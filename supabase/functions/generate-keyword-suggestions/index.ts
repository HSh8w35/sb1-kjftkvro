import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const ALLOWED_ORIGINS = [
  "https://heidistonehospitality.com",
  "https://www.heidistonehospitality.com",
  "http://localhost:5173",
  "http://localhost:4173",
];

function getCorsHeaders(origin: string | null) {
  const allowedOrigin = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
  };
}

interface KeywordSuggestionRequest {
  pageRoute: string;
  currentKeywords?: string[];
  pageContent?: string;
  industry?: string;
}

// Simulated keyword database with relevance scores
const KEYWORD_DATABASE: Record<string, Array<{ keyword: string; volume: number; competition: string }>> = {
  "/": [
    { keyword: "strategic consulting", volume: 2400, competition: "medium" },
    { keyword: "business strategy", volume: 8100, competition: "high" },
    { keyword: "leadership consulting", volume: 1300, competition: "low" },
    { keyword: "organizational development", volume: 1900, competition: "medium" },
    { keyword: "executive coaching", volume: 3600, competition: "high" },
  ],
  "/about": [
    { keyword: "about us", volume: 12100, competition: "high" },
    { keyword: "our team", volume: 2900, competition: "medium" },
    { keyword: "company history", volume: 1600, competition: "low" },
    { keyword: "leadership team", volume: 1800, competition: "medium" },
  ],
  "/services": [
    { keyword: "consulting services", volume: 3600, competition: "high" },
    { keyword: "business consulting", volume: 5400, competition: "high" },
    { keyword: "strategy services", volume: 1000, competition: "medium" },
    { keyword: "advisory services", volume: 2100, competition: "medium" },
    { keyword: "management consulting", volume: 6600, competition: "high" },
  ],
  "/insights": [
    { keyword: "business insights", volume: 1600, competition: "medium" },
    { keyword: "industry insights", volume: 1300, competition: "low" },
    { keyword: "thought leadership", volume: 2400, competition: "medium" },
    { keyword: "business trends", volume: 3600, competition: "high" },
  ],
};

function calculateRelevanceScore(
  keyword: string,
  currentKeywords: string[],
  pageContent: string
): number {
  let score = 50; // Base score

  // Boost if keyword is similar to current keywords
  const keywordLower = keyword.toLowerCase();
  for (const current of currentKeywords) {
    if (keywordLower.includes(current.toLowerCase()) || current.toLowerCase().includes(keywordLower)) {
      score += 15;
      break;
    }
  }

  // Boost if keyword appears in page content
  if (pageContent && pageContent.toLowerCase().includes(keywordLower)) {
    score += 20;
  }

  // Random variation for realism
  score += Math.floor(Math.random() * 20) - 10;

  return Math.min(Math.max(score, 0), 100);
}

Deno.serve(async (req: Request) => {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ success: false, error: "Unauthorized" }),
        {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const { data: { user } } = await supabase.auth.getUser(
      authHeader.replace("Bearer ", "")
    );

    if (!user) {
      return new Response(
        JSON.stringify({ success: false, error: "Unauthorized" }),
        {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const { pageRoute, currentKeywords = [], pageContent = "", industry = "consulting" }: KeywordSuggestionRequest = await req.json();

    // Get keyword suggestions from our database
    const baseKeywords = KEYWORD_DATABASE[pageRoute] || KEYWORD_DATABASE["/"];
    
    // Calculate relevance scores
    const suggestions = baseKeywords.map((kw) => ({
      keyword: kw.keyword,
      relevanceScore: calculateRelevanceScore(kw.keyword, currentKeywords, pageContent),
      searchVolume: kw.volume,
      competitionLevel: kw.competition,
    }));

    // Sort by relevance score
    suggestions.sort((a, b) => b.relevanceScore - a.relevanceScore);

    // Save suggestions to database
    const insertData = suggestions.map((s) => ({
      page_route: pageRoute,
      suggested_keyword: s.keyword,
      relevance_score: s.relevanceScore,
      search_volume: s.searchVolume,
      competition_level: s.competitionLevel,
      status: "pending",
    }));

    const { data: inserted, error: insertError } = await supabase
      .from("keyword_suggestions")
      .insert(insertData)
      .select();

    if (insertError) {
      throw insertError;
    }

    return new Response(
      JSON.stringify({
        success: true,
        suggestions: inserted,
        message: `Generated ${suggestions.length} keyword suggestions`,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error generating keyword suggestions:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
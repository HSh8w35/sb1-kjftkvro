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

interface CompetitorAnalysisRequest {
  competitorUrl: string;
  competitorName?: string;
  keywordsToTrack?: string[];
}

function extractMetaTag(html: string, name: string): string {
  const patterns = [
    new RegExp(`<meta\\s+name=["']${name}["']\\s+content=["']([^"']*)["']`, "i"),
    new RegExp(`<meta\\s+content=["']([^"']*)["']\\s+name=["']${name}["']`, "i"),
    new RegExp(`<meta\\s+property=["']og:${name}["']\\s+content=["']([^"']*)["']`, "i"),
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return "";
}

function extractTitle(html: string): string {
  const match = html.match(/<title>([^<]*)<\/title>/i);
  return match ? match[1] : "";
}

function countKeywords(html: string, keywords: string[]): number {
  const lowerHtml = html.toLowerCase();
  let count = 0;
  
  for (const keyword of keywords) {
    const regex = new RegExp(keyword.toLowerCase(), "gi");
    const matches = lowerHtml.match(regex);
    count += matches ? matches.length : 0;
  }
  
  return count;
}

function removeHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function isValidUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString);

    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return false;
    }

    const hostname = url.hostname.toLowerCase();
    const privateRanges = [
      /^localhost$/i,
      /^127\./,
      /^10\./,
      /^172\.(1[6-9]|2\d|3[01])\./,
      /^192\.168\./,
      /^169\.254\./,
      /^::1$/,
      /^fe80:/,
      /^fc00:/,
      /^fd00:/,
    ];

    for (const pattern of privateRanges) {
      if (pattern.test(hostname)) {
        return false;
      }
    }

    return true;
  } catch {
    return false;
  }
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

    const { competitorUrl, competitorName, keywordsToTrack = [] }: CompetitorAnalysisRequest = await req.json();

    if (!competitorUrl) {
      return new Response(
        JSON.stringify({ success: false, error: "Competitor URL is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (!isValidUrl(competitorUrl)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid URL or private IP address" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Fetch competitor website
    console.log("Fetching competitor website:", competitorUrl);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch(competitorUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; SEO-Analyzer/1.0)",
        },
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Failed to fetch website: ${response.statusText}`);
      }

      const html = await response.text();

      // Extract SEO data
      const metaTitle = extractTitle(html);
      const metaDescription = extractMetaTag(html, "description");
      const keywordCount = countKeywords(html, keywordsToTrack);
      const textContent = removeHtmlTags(html);
      const contentLength = textContent.length;

      // Save or update competitor analysis
      const { data: existing } = await supabase
        .from("competitor_analysis")
        .select("id")
        .eq("competitor_url", competitorUrl)
        .maybeSingle();

      const analysisData = {
        competitor_name: competitorName || new URL(competitorUrl).hostname,
        competitor_url: competitorUrl,
        keywords_tracked: keywordsToTrack,
        last_scraped_at: new Date().toISOString(),
        meta_title: metaTitle,
        meta_description: metaDescription,
        keyword_count: keywordCount,
        content_length: contentLength,
        updated_at: new Date().toISOString(),
      };

      let result;
      if (existing) {
        // Update existing record
        const { data, error } = await supabase
          .from("competitor_analysis")
          .update(analysisData)
          .eq("id", existing.id)
          .select()
          .single();

        if (error) throw error;
        result = data;
      } else {
        // Insert new record
        const { data, error } = await supabase
          .from("competitor_analysis")
          .insert(analysisData)
          .select()
          .single();

        if (error) throw error;
        result = data;
      }

      return new Response(
        JSON.stringify({
          success: true,
          data: result,
          message: "Competitor analysis completed",
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    } catch (fetchError) {
      clearTimeout(timeoutId);
      throw fetchError;
    }
  } catch (error) {
    console.error("Error analyzing competitor:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
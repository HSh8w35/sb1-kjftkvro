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

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

interface ReportData {
  reportType: string;
  dateRange: { start: string; end: string };
  data: any;
}

function calculateNextSchedule(frequency: string): Date {
  const now = new Date();
  switch (frequency) {
    case "daily":
      return new Date(now.getTime() + 24 * 60 * 60 * 1000);
    case "weekly":
      return new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    case "monthly":
      const next = new Date(now);
      next.setMonth(next.getMonth() + 1);
      return next;
    default:
      return new Date(now.getTime() + 24 * 60 * 60 * 1000);
  }
}

async function generateSEOPerformanceReport(supabase: any, dateRange: { start: string; end: string }) {
  const { data: analytics } = await supabase
    .from("seo_analytics")
    .select("*")
    .gte("created_at", dateRange.start)
    .lte("created_at", dateRange.end);

  const { data: keywords } = await supabase
    .from("seo_keywords")
    .select("*");

  const summary = {
    totalPageViews: analytics?.reduce((sum: number, a: any) => sum + (a.page_views || 0), 0) || 0,
    avgTimeOnPage: analytics?.reduce((sum: number, a: any) => sum + (a.avg_time_on_page || 0), 0) / (analytics?.length || 1) || 0,
    totalKeywords: keywords?.length || 0,
    topPages: analytics?.sort((a: any, b: any) => b.page_views - a.page_views).slice(0, 5) || [],
  };

  return summary;
}

async function generateKeywordAnalysisReport(supabase: any) {
  const { data: keywords } = await supabase
    .from("seo_keywords")
    .select("*");

  const { data: suggestions } = await supabase
    .from("keyword_suggestions")
    .select("*")
    .eq("status", "approved");

  const summary = {
    totalKeywords: keywords?.length || 0,
    keywordsByPage: keywords?.reduce((acc: any, k: any) => {
      acc[k.page_route] = (acc[k.page_route] || 0) + 1;
      return acc;
    }, {}) || {},
    approvedSuggestions: suggestions?.length || 0,
  };

  return summary;
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

    // Get all active scheduled reports that are due
    const { data: dueReports } = await supabase
      .from("scheduled_reports")
      .select("*")
      .eq("is_active", true)
      .lte("next_scheduled_at", new Date().toISOString());

    if (!dueReports || dueReports.length === 0) {
      return new Response(
        JSON.stringify({ success: true, message: "No reports due" }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const results = [];

    for (const report of dueReports) {
      try {
        // Calculate date range based on frequency
        const endDate = new Date();
        const startDate = new Date();
        
        if (report.frequency === "daily") {
          startDate.setDate(startDate.getDate() - 1);
        } else if (report.frequency === "weekly") {
          startDate.setDate(startDate.getDate() - 7);
        } else if (report.frequency === "monthly") {
          startDate.setMonth(startDate.getMonth() - 1);
        }

        const dateRange = {
          start: startDate.toISOString(),
          end: endDate.toISOString(),
        };

        // Generate report based on type
        let reportData;
        if (report.report_type === "seo_performance") {
          reportData = await generateSEOPerformanceReport(supabase, dateRange);
        } else if (report.report_type === "keyword_analysis") {
          reportData = await generateKeywordAnalysisReport(supabase);
        }

        // Create HTML email content
        const htmlContent = `
          <html>
            <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2>${escapeHtml(report.report_name)}</h2>
              <p><strong>Report Type:</strong> ${escapeHtml(report.report_type)}</p>
              <p><strong>Period:</strong> ${escapeHtml(startDate.toLocaleDateString())} - ${escapeHtml(endDate.toLocaleDateString())}</p>
              <hr>
              <pre>${escapeHtml(JSON.stringify(reportData, null, 2))}</pre>
            </body>
          </html>
        `;

        // Send email to each recipient
        for (const email of report.recipient_emails) {
          await fetch(`${supabaseUrl}/functions/v1/send-notification-email`, {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${supabaseKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              recipientEmail: email,
              notificationType: "scheduled_report",
              subject: `${escapeHtml(report.report_name)} - ${escapeHtml(endDate.toLocaleDateString())}`,
              htmlContent,
            }),
          });
        }

        // Update report schedule
        const nextScheduled = calculateNextSchedule(report.frequency);
        await supabase
          .from("scheduled_reports")
          .update({
            last_generated_at: new Date().toISOString(),
            next_scheduled_at: nextScheduled.toISOString(),
          })
          .eq("id", report.id);

        results.push({ reportId: report.id, success: true });
      } catch (error) {
        console.error(`Error generating report ${report.id}:`, error);
        results.push({ reportId: report.id, success: false, error: error.message });
      }
    }

    return new Response(
      JSON.stringify({ success: true, results }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error generating reports:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
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

interface ExportRequest {
  exportType: string;
  format: "csv" | "json" | "pdf";
  filters?: any;
}

function convertToCSV(data: any[]): string {
  if (!data || data.length === 0) return "";

  const headers = Object.keys(data[0]);
  const csvRows = [];

  // Add header row
  csvRows.push(headers.join(","));

  // Add data rows
  for (const row of data) {
    const values = headers.map((header) => {
      const value = row[header];
      if (value === null || value === undefined) return "";
      if (typeof value === "string" && (value.includes(",") || value.includes('"'))) {
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value;
    });
    csvRows.push(values.join(","));
  }

  return csvRows.join("\n");
}

function generateHTMLReport(data: any[], title: string): string {
  const tableRows = data.map((row) => {
    const cells = Object.entries(row)
      .map(([key, value]) => `<td>${escapeHtml(String(value ?? ''))}</td>`)
      .join("");
    return `<tr>${cells}</tr>`;
  }).join("");

  const headers = data.length > 0
    ? Object.keys(data[0]).map((key) => `<th>${escapeHtml(key)}</th>`).join("")
    : "";

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${escapeHtml(title)}</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { color: #333; }
        table { border-collapse: collapse; width: 100%; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        th { background-color: #4a5568; color: white; }
        tr:nth-child(even) { background-color: #f9fafb; }
      </style>
    </head>
    <body>
      <h1>${escapeHtml(title)}</h1>
      <p>Generated on: ${escapeHtml(new Date().toLocaleString())}</p>
      <table>
        <thead><tr>${headers}</tr></thead>
        <tbody>${tableRows}</tbody>
      </table>
    </body>
    </html>
  `;
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

    // Get auth user from request
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

    const { exportType, format, filters = {} }: ExportRequest = await req.json();

    // Fetch data based on export type
    let data: any[] = [];
    let tableName = "";
    let reportTitle = "";

    switch (exportType) {
      case "analytics":
        tableName = "seo_analytics";
        reportTitle = "SEO Analytics Report";
        break;
      case "keywords":
        tableName = "seo_keywords";
        reportTitle = "SEO Keywords Report";
        break;
      case "keyword_suggestions":
        tableName = "keyword_suggestions";
        reportTitle = "Keyword Suggestions Report";
        break;
      case "competitor_analysis":
        tableName = "competitor_analysis";
        reportTitle = "Competitor Analysis Report";
        break;
      case "audit_log":
        tableName = "seo_audit_log";
        reportTitle = "SEO Audit Log";
        break;
      default:
        return new Response(
          JSON.stringify({ success: false, error: "Invalid export type" }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
    }

    const { data: fetchedData, error } = await supabase
      .from(tableName)
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    data = fetchedData || [];

    // Generate export content
    let content: string;
    let contentType: string;
    let filename: string;

    if (format === "csv") {
      content = convertToCSV(data);
      contentType = "text/csv";
      filename = `${exportType}_${Date.now()}.csv`;
    } else if (format === "json") {
      content = JSON.stringify(data, null, 2);
      contentType = "application/json";
      filename = `${exportType}_${Date.now()}.json`;
    } else if (format === "pdf") {
      // For PDF, we'll return HTML that can be printed to PDF
      content = generateHTMLReport(data, reportTitle);
      contentType = "text/html";
      filename = `${exportType}_${Date.now()}.html`;
    } else {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid format" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Log export
    await supabase.from("export_history").insert({
      export_type: exportType,
      file_format: format,
      exported_by: user.id,
      file_size: content.length,
    });

    // Return the file
    return new Response(content, {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error("Error exporting report:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
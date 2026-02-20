import "jsr:@supabase/functions-js/edge-runtime.d.ts";

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
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
  };
}

interface SpeakingInquiry {
  name: string;
  email: string;
  organization?: string;
  role?: string;
  phone?: string;
  event_type?: string;
  event_date?: string;
  audience?: string;
  context: string;
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
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
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY environment variable is not set");
    }

    const inquiry: SpeakingInquiry = await req.json();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1F2A44;">New Speaking Inquiry</h2>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${escapeHtml(inquiry.name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(inquiry.email)}">${escapeHtml(inquiry.email)}</a></p>
          ${inquiry.organization ? `<p><strong>Organization:</strong> ${escapeHtml(inquiry.organization)}</p>` : ''}
          ${inquiry.role ? `<p><strong>Role:</strong> ${escapeHtml(inquiry.role)}</p>` : ''}
          ${inquiry.phone ? `<p><strong>Phone:</strong> ${escapeHtml(inquiry.phone)}</p>` : ''}
          ${inquiry.event_type ? `<p><strong>Event Type:</strong> ${escapeHtml(inquiry.event_type)}</p>` : ''}
          ${inquiry.event_date ? `<p><strong>Event Date:</strong> ${escapeHtml(inquiry.event_date)}</p>` : ''}
          ${inquiry.audience ? `<p><strong>Audience:</strong> ${escapeHtml(inquiry.audience)}</p>` : ''}
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #1F2A44;">Context:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(inquiry.context)}</p>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">

        <p style="color: #666; font-size: 12px;">
          This inquiry was submitted through the Heidi Stone Hospitality website speaking engagement form.
        </p>
      </div>
    `;

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Heidi Stone Hospitality <contact@heidistonehospitality.com>",
        to: "heidi@heidistonehospitality.com",
        reply_to: inquiry.email,
        subject: `New Speaking Inquiry from ${escapeHtml(inquiry.name)}`,
        html: htmlContent,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error("Resend API error:", errorData);
      throw new Error(`Failed to send email: ${errorData}`);
    }

    const emailData = await emailResponse.json();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
        emailId: emailData.id
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

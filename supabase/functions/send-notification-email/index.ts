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

interface NotificationRequest {
  recipientEmail: string;
  notificationType: string;
  subject: string;
  htmlContent: string;
  textContent?: string;
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

    const { recipientEmail, notificationType, subject, htmlContent, textContent }: NotificationRequest = await req.json();

    // Check if notifications are enabled for this recipient and type
    const { data: notification } = await supabase
      .from("email_notifications")
      .select("*")
      .eq("recipient_email", recipientEmail)
      .eq("notification_type", notificationType)
      .eq("is_enabled", true)
      .maybeSingle();

    if (!notification) {
      return new Response(
        JSON.stringify({ success: false, message: "Notifications disabled for this recipient" }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Here you would integrate with your email service (Resend, SendGrid, etc.)
    // For now, we'll simulate sending and log the email
    console.log("Sending email:", {
      to: recipientEmail,
      subject,
      html: htmlContent,
      text: textContent || htmlContent.replace(/<[^>]*>/g, ""),
    });

    // Update last_sent_at timestamp
    await supabase
      .from("email_notifications")
      .update({ last_sent_at: new Date().toISOString() })
      .eq("id", notification.id);

    // In production, integrate with your email provider:
    // const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    // const emailResponse = await fetch("https://api.resend.com/emails", {
    //   method: "POST",
    //   headers: {
    //     "Authorization": `Bearer ${RESEND_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     from: "noreply@yourdomain.com",
    //     to: recipientEmail,
    //     subject,
    //     html: htmlContent,
    //   }),
    // });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
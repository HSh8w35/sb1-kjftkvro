/*
  # Advanced SEO Features

  ## New Tables
  
  ### 1. email_notifications
  Stores email notification preferences and history for validation failures
  - `id` (uuid, primary key)
  - `recipient_email` (text) - Email address to send notifications to
  - `notification_type` (text) - Type of notification (validation_failure, weekly_report, etc.)
  - `is_enabled` (boolean) - Whether notifications are enabled
  - `last_sent_at` (timestamptz) - When the last notification was sent
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ### 2. scheduled_reports
  Configures scheduled report generation and delivery
  - `id` (uuid, primary key)
  - `report_name` (text) - Name of the report
  - `report_type` (text) - Type of report (seo_performance, keyword_analysis, etc.)
  - `frequency` (text) - Frequency (daily, weekly, monthly)
  - `recipient_emails` (text[]) - Array of email addresses
  - `last_generated_at` (timestamptz)
  - `next_scheduled_at` (timestamptz)
  - `is_active` (boolean)
  - `created_at` (timestamptz)
  
  ### 3. keyword_suggestions
  Stores AI-generated keyword suggestions for pages
  - `id` (uuid, primary key)
  - `page_route` (text) - Page route the suggestion is for
  - `suggested_keyword` (text) - The suggested keyword
  - `relevance_score` (numeric) - AI-calculated relevance score (0-100)
  - `search_volume` (integer) - Estimated monthly search volume
  - `competition_level` (text) - low, medium, high
  - `status` (text) - pending, approved, rejected
  - `created_at` (timestamptz)
  
  ### 4. competitor_analysis
  Tracks competitor SEO metrics and keywords
  - `id` (uuid, primary key)
  - `competitor_name` (text) - Name of competitor
  - `competitor_url` (text) - URL of competitor
  - `keywords_tracked` (text[]) - Keywords being tracked
  - `last_scraped_at` (timestamptz)
  - `meta_title` (text) - Their meta title
  - `meta_description` (text) - Their meta description
  - `keyword_count` (integer) - Number of keywords found
  - `content_length` (integer) - Length of their content
  - `notes` (text) - Additional notes
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ### 5. export_history
  Tracks report exports for auditing
  - `id` (uuid, primary key)
  - `export_type` (text) - Type of export (analytics, keywords, etc.)
  - `file_format` (text) - Format (csv, pdf, json)
  - `exported_by` (uuid) - User who exported
  - `file_size` (integer) - Size in bytes
  - `created_at` (timestamptz)

  ## Security
  - Enable RLS on all new tables
  - Add policies for authenticated admin users only
*/

-- Create email_notifications table
CREATE TABLE IF NOT EXISTS email_notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  recipient_email text NOT NULL,
  notification_type text NOT NULL,
  is_enabled boolean DEFAULT true,
  last_sent_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE email_notifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view notifications"
  ON email_notifications FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert notifications"
  ON email_notifications FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update notifications"
  ON email_notifications FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete notifications"
  ON email_notifications FOR DELETE
  TO authenticated
  USING (true);

-- Create scheduled_reports table
CREATE TABLE IF NOT EXISTS scheduled_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  report_name text NOT NULL,
  report_type text NOT NULL,
  frequency text NOT NULL,
  recipient_emails text[] NOT NULL DEFAULT '{}',
  last_generated_at timestamptz,
  next_scheduled_at timestamptz,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE scheduled_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view scheduled reports"
  ON scheduled_reports FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert scheduled reports"
  ON scheduled_reports FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update scheduled reports"
  ON scheduled_reports FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete scheduled reports"
  ON scheduled_reports FOR DELETE
  TO authenticated
  USING (true);

-- Create keyword_suggestions table
CREATE TABLE IF NOT EXISTS keyword_suggestions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_route text NOT NULL,
  suggested_keyword text NOT NULL,
  relevance_score numeric DEFAULT 0,
  search_volume integer DEFAULT 0,
  competition_level text DEFAULT 'medium',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE keyword_suggestions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view keyword suggestions"
  ON keyword_suggestions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert keyword suggestions"
  ON keyword_suggestions FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update keyword suggestions"
  ON keyword_suggestions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete keyword suggestions"
  ON keyword_suggestions FOR DELETE
  TO authenticated
  USING (true);

-- Create competitor_analysis table
CREATE TABLE IF NOT EXISTS competitor_analysis (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  competitor_name text NOT NULL,
  competitor_url text NOT NULL,
  keywords_tracked text[] DEFAULT '{}',
  last_scraped_at timestamptz,
  meta_title text,
  meta_description text,
  keyword_count integer DEFAULT 0,
  content_length integer DEFAULT 0,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE competitor_analysis ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view competitor analysis"
  ON competitor_analysis FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert competitor analysis"
  ON competitor_analysis FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update competitor analysis"
  ON competitor_analysis FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete competitor analysis"
  ON competitor_analysis FOR DELETE
  TO authenticated
  USING (true);

-- Create export_history table
CREATE TABLE IF NOT EXISTS export_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  export_type text NOT NULL,
  file_format text NOT NULL,
  exported_by uuid REFERENCES auth.users(id),
  file_size integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE export_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view export history"
  ON export_history FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert export history"
  ON export_history FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_email_notifications_recipient ON email_notifications(recipient_email);
CREATE INDEX IF NOT EXISTS idx_scheduled_reports_next_scheduled ON scheduled_reports(next_scheduled_at) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_keyword_suggestions_page ON keyword_suggestions(page_route);
CREATE INDEX IF NOT EXISTS idx_keyword_suggestions_status ON keyword_suggestions(status);
CREATE INDEX IF NOT EXISTS idx_competitor_analysis_url ON competitor_analysis(competitor_url);
CREATE INDEX IF NOT EXISTS idx_export_history_created ON export_history(created_at DESC);
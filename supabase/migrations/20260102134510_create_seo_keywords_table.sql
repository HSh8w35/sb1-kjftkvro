/*
  # Create SEO Keywords Table

  1. New Tables
    - `seo_keywords`
      - `id` (uuid, primary key)
      - `keyword` (text, unique) - The keyword phrase
      - `page` (text, nullable) - Specific page this keyword is for, null means global
      - `is_active` (boolean) - Whether this keyword is currently active
      - `display_order` (integer) - Order for display/priority
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `seo_keywords` table
    - Add policy for public read access to active keywords
*/

CREATE TABLE IF NOT EXISTS seo_keywords (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  keyword text NOT NULL UNIQUE,
  page text DEFAULT NULL,
  is_active boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE seo_keywords ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active keywords"
  ON seo_keywords
  FOR SELECT
  USING (is_active = true);

-- Insert the initial keywords
INSERT INTO seo_keywords (keyword, display_order) VALUES
  ('Independent hotel consulting', 1),
  ('Hospitality advisory', 2),
  ('Hotel performance consulting', 3),
  ('Boutique hotel consulting', 4),
  ('Hotel strategy consultant', 5)
ON CONFLICT (keyword) DO NOTHING;
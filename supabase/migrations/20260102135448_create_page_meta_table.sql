/*
  # Create Page Meta Data Table

  1. New Tables
    - `page_meta`
      - `id` (uuid, primary key)
      - `page_key` (text, unique) - Unique identifier for the page (e.g., 'homepage', 'about')
      - `page_name` (text) - Human-readable page name
      - `meta_title` (text) - SEO meta title
      - `meta_description` (text) - SEO meta description
      - `is_active` (boolean) - Whether this meta data is currently active
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `page_meta` table
    - Add policy for public read access to active page meta data
*/

CREATE TABLE IF NOT EXISTS page_meta (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_key text NOT NULL UNIQUE,
  page_name text NOT NULL,
  meta_title text NOT NULL,
  meta_description text NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE page_meta ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active page meta"
  ON page_meta
  FOR SELECT
  USING (is_active = true);

-- Insert the initial page meta data
INSERT INTO page_meta (page_key, page_name, meta_title, meta_description) VALUES
  (
    'homepage',
    'Homepage',
    'Hospitality Leadership Advisory for Independent Hotels',
    'Strategic hospitality advisory for independent hotels navigating complexity, growth, and leadership decisions. Judgment-driven, owner-aligned counsel.'
  ),
  (
    'about',
    'About Heidi Stone',
    'Independent Hotel Advisor | Hospitality Leadership & Strategy',
    'Heidi Stone advises independent hotel owners and executives on leadership alignment, strategic clarity, and long-term performance without compromise.'
  ),
  (
    'our-approach',
    'Our Approach',
    'Strategic Hospitality Advisory Built for Independence',
    'A leadership-first hospitality advisory approach for independent hotels facing growth, transition, or misalignment. Strategy before execution.'
  ),
  (
    'services',
    'Let''s Talk / Services',
    'Hospitality Leadership Advisory for Owners & Executives',
    'Advisory support for independent hotel owners and executive teams who need judgment, alignment, and strategic direction—not playbooks.'
  ),
  (
    'perspectives',
    'Perspectives',
    'Perspectives on Independent Hotel Leadership & Strategy',
    'Insights on hospitality leadership, independence, and strategic decision-making for owners navigating complexity in today''s hotel landscape.'
  )
ON CONFLICT (page_key) DO NOTHING;
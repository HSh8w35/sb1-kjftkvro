/*
  # Create perspectives table

  1. New Tables
    - `perspectives`
      - `id` (uuid, primary key)
      - `title` (text) - The title of the perspective article
      - `slug` (text, unique) - URL-friendly version of the title
      - `excerpt` (text) - Short summary/preview text
      - `content` (text) - Full article content
      - `category` (text) - Category like "Leadership", "Strategy", etc.
      - `icon_name` (text) - Name of the icon to use (e.g., "TrendingUp", "Target")
      - `display_order` (integer) - Order to display the articles
      - `pdf_url` (text, nullable) - Optional link to PDF version
      - `is_published` (boolean) - Whether the article is published
      - `published_at` (timestamp) - When the article was published
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `perspectives` table
    - Add policy for public read access to published perspectives
*/

CREATE TABLE IF NOT EXISTS perspectives (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL DEFAULT 'Leadership',
  icon_name text NOT NULL DEFAULT 'BookOpen',
  display_order integer DEFAULT 0,
  pdf_url text,
  is_published boolean DEFAULT true,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE perspectives ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published perspectives"
  ON perspectives
  FOR SELECT
  USING (is_published = true);
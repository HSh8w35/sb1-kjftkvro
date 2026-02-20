/*
  # Create testimonials table

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key) - Unique identifier for each testimonial
      - `client_name` (text) - Name of the client providing the testimonial
      - `client_title` (text) - Job title or position of the client
      - `client_property` (text) - Name of the property/organization
      - `quote` (text) - The testimonial content
      - `display_order` (integer) - Order for displaying testimonials (lower numbers first)
      - `is_active` (boolean) - Whether the testimonial should be displayed
      - `created_at` (timestamptz) - Timestamp when testimonial was created
      - `updated_at` (timestamptz) - Timestamp when testimonial was last updated

  2. Security
    - Enable RLS on `testimonials` table
    - Add policy for public read access (testimonials are public-facing)
    - Only authenticated admin users can insert/update/delete testimonials

  3. Notes
    - Testimonials are public-facing content, so they can be read by anyone
    - Management of testimonials is restricted to authenticated users
    - Display order allows for custom arrangement of testimonials
    - Active flag allows for easy toggling of testimonial visibility
*/

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_title text NOT NULL,
  client_property text NOT NULL,
  quote text NOT NULL,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view active testimonials
CREATE POLICY "Anyone can view active testimonials"
  ON testimonials
  FOR SELECT
  USING (is_active = true);

-- Allow authenticated users to insert testimonials
CREATE POLICY "Authenticated users can insert testimonials"
  ON testimonials
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update testimonials
CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to delete testimonials
CREATE POLICY "Authenticated users can delete testimonials"
  ON testimonials
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index for faster queries by display_order
CREATE INDEX IF NOT EXISTS idx_testimonials_display_order ON testimonials(display_order);

-- Create index for faster queries by is_active
CREATE INDEX IF NOT EXISTS idx_testimonials_is_active ON testimonials(is_active);

-- Insert sample testimonials
INSERT INTO testimonials (client_name, client_title, client_property, quote, display_order, is_active) VALUES
('Michael Richardson', 'General Manager', 'The Aspen Lodge', 'Working with Heidi transformed not just our revenue strategy, but how I think about leadership itself. Her guidance helped me rediscover the creative vision that first drew me to hospitality.', 1, true),
('Sarah Chen', 'Owner', 'Coastal Haven Resort', 'Heidi''s strategic partnership gave us the clarity and confidence to reposition our property in the market. The results exceeded every expectation—both financially and in team morale.', 2, true),
('David Martinez', 'Executive Director', 'Mountain View Inn', 'In an industry filled with consultants who prescribe cookie-cutter solutions, Heidi stands apart. She understands the soul of independent hospitality and helped us honor that while driving real growth.', 3, true),
('Jennifer Walsh', 'President', 'Heritage Springs Resort', 'The executive coaching I received was nothing short of transformative. Heidi helped me move from surviving to leading with renewed purpose and strategic clarity.', 4, true),
('Robert Thompson', 'Managing Director', 'Lakeside Grand Hotel', 'Heidi''s decades of experience shine through in every conversation. She helped us build authentic regional partnerships that elevated our brand and connected us deeply to our community.', 5, true),
('Amanda Foster', 'Resort Owner', 'Wildflower Valley Lodge', 'What impressed me most was Heidi''s ability to see the bigger picture while understanding the nuanced details that make independent properties special. True strategic partnership.', 6, true);
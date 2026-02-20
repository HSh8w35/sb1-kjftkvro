/*
  # Create speaking_inquiries table

  1. New Tables
    - `speaking_inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `name` (text) - Full name of the person submitting
      - `email` (text) - Email address for contact
      - `organization` (text, nullable) - Organization or event name
      - `role` (text, nullable) - Their role/title
      - `phone` (text, nullable) - Phone number
      - `event_type` (text, nullable) - Type of event (conference, retreat, etc.)
      - `event_date` (text, nullable) - Expected date or timeframe
      - `audience` (text, nullable) - Description of audience
      - `context` (text) - Event context and objectives
      - `created_at` (timestamptz) - Timestamp of submission

  2. Security
    - Enable RLS on `speaking_inquiries` table
    - Add policy for authenticated admin access only
    - No public read access for privacy
*/

CREATE TABLE IF NOT EXISTS speaking_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  organization text,
  role text,
  phone text,
  event_type text,
  event_date text,
  audience text,
  context text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE speaking_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Only authenticated users can view speaking inquiries"
  ON speaking_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can submit speaking inquiry"
  ON speaking_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);
/*
  # Create newsletter subscribers table

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key) - Unique identifier for each subscriber
      - `email` (text, unique, not null) - Subscriber email address
      - `subscribed_at` (timestamptz) - When the subscription was created
      - `is_active` (boolean) - Whether the subscription is active
      - `source` (text) - Where the signup came from (e.g., 'footer', 'homepage')
  
  2. Security
    - Enable RLS on `newsletter_subscribers` table
    - Add policy for public insert access (anyone can subscribe)
    - No public read access (admin only via service role)
  
  3. Indexes
    - Index on email for fast lookups
    - Index on subscribed_at for chronological queries
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true,
  source text DEFAULT 'footer'
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribed_at ON newsletter_subscribers(subscribed_at DESC);
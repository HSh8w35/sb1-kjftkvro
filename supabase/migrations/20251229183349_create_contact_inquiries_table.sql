/*
  # Create Contact Inquiries Table

  ## Overview
  This migration creates a table to store contact form submissions from the "Let's Talk" page.
  All inquiries are treated as confidential and are stored securely with proper access controls.

  ## Tables Created
  
  ### `contact_inquiries`
  Stores all contact form submissions from potential clients
  
  **Columns:**
  - `id` (uuid, primary key) - Unique identifier for each inquiry
  - `name` (text, required) - Full name of the person reaching out
  - `email` (text, required) - Email address for response
  - `property_name` (text, optional) - Name of their property/organization
  - `role` (text, optional) - Their role/position
  - `message` (text, required) - Their inquiry message
  - `phone` (text, optional) - Optional phone number
  - `inquiry_type` (text, optional) - Type of inquiry (consultation, speaking, partnership, etc.)
  - `created_at` (timestamptz) - When the inquiry was submitted
  
  ## Security
  
  ### Row Level Security (RLS)
  - RLS is enabled on the `contact_inquiries` table
  - Public INSERT policy allows anyone to submit inquiries (form submissions)
  - No public SELECT policy - inquiries are private and only accessible by administrators
  
  ## Notes
  - All inquiries are treated with complete discretion
  - Email validation should be handled on the frontend
  - Consider implementing rate limiting to prevent spam
*/

-- Create contact_inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  property_name text,
  role text,
  message text NOT NULL,
  phone text,
  inquiry_type text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a contact inquiry (INSERT only)
CREATE POLICY "Anyone can submit contact inquiry"
  ON contact_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create index on created_at for efficient querying
CREATE INDEX IF NOT EXISTS contact_inquiries_created_at_idx ON contact_inquiries(created_at DESC);
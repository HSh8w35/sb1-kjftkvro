/*
  # Add Inquiry Management Fields

  ## Overview
  This migration enhances the inquiry tables with status tracking, timestamps, and notes
  to support admin management workflows in the Admin Dashboard.

  ## Changes

  ### Contact Inquiries Table
  - Add `status` column with values: new, read, responded, archived (default: new)
  - Add `read_at` timestamp for when inquiry was first viewed
  - Add `responded_at` timestamp for when response was sent
  - Add `notes` text field for internal admin comments
  - Add indexes for efficient filtering by status

  ### Speaking Inquiries Table
  - Add `status` column with values: new, read, responded, archived (default: new)
  - Add `read_at` timestamp for when inquiry was first viewed
  - Add `responded_at` timestamp for when response was sent
  - Add `notes` text field for internal admin comments
  - Add indexes for efficient filtering by status

  ## Security
  - Add SELECT policies for authenticated users to view inquiries
  - Add UPDATE policies for authenticated users to manage inquiry status and notes
  - Maintain existing INSERT policies for public form submissions

  ## Notes
  - Status tracking enables workflow management in admin dashboard
  - Timestamps provide audit trail for inquiry handling
  - Notes field allows internal communication about each inquiry
*/

-- Add management fields to contact_inquiries
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_inquiries' AND column_name = 'status'
  ) THEN
    ALTER TABLE contact_inquiries ADD COLUMN status text DEFAULT 'new';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_inquiries' AND column_name = 'read_at'
  ) THEN
    ALTER TABLE contact_inquiries ADD COLUMN read_at timestamptz;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_inquiries' AND column_name = 'responded_at'
  ) THEN
    ALTER TABLE contact_inquiries ADD COLUMN responded_at timestamptz;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_inquiries' AND column_name = 'notes'
  ) THEN
    ALTER TABLE contact_inquiries ADD COLUMN notes text;
  END IF;
END $$;

-- Add management fields to speaking_inquiries
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'speaking_inquiries' AND column_name = 'status'
  ) THEN
    ALTER TABLE speaking_inquiries ADD COLUMN status text DEFAULT 'new';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'speaking_inquiries' AND column_name = 'read_at'
  ) THEN
    ALTER TABLE speaking_inquiries ADD COLUMN read_at timestamptz;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'speaking_inquiries' AND column_name = 'responded_at'
  ) THEN
    ALTER TABLE speaking_inquiries ADD COLUMN responded_at timestamptz;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'speaking_inquiries' AND column_name = 'notes'
  ) THEN
    ALTER TABLE speaking_inquiries ADD COLUMN notes text;
  END IF;
END $$;

-- Add indexes for efficient status filtering
CREATE INDEX IF NOT EXISTS contact_inquiries_status_idx ON contact_inquiries(status);
CREATE INDEX IF NOT EXISTS speaking_inquiries_status_idx ON speaking_inquiries(status);

-- Add SELECT policy for contact_inquiries (authenticated users can view)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_inquiries' 
    AND policyname = 'Authenticated users can view contact inquiries'
  ) THEN
    CREATE POLICY "Authenticated users can view contact inquiries"
      ON contact_inquiries
      FOR SELECT
      TO authenticated
      USING (true);
  END IF;
END $$;

-- Add UPDATE policy for contact_inquiries (authenticated users can update)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_inquiries' 
    AND policyname = 'Authenticated users can update contact inquiries'
  ) THEN
    CREATE POLICY "Authenticated users can update contact inquiries"
      ON contact_inquiries
      FOR UPDATE
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

-- Add DELETE policy for contact_inquiries (authenticated users can delete)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_inquiries' 
    AND policyname = 'Authenticated users can delete contact inquiries'
  ) THEN
    CREATE POLICY "Authenticated users can delete contact inquiries"
      ON contact_inquiries
      FOR DELETE
      TO authenticated
      USING (true);
  END IF;
END $$;

-- Add UPDATE policy for speaking_inquiries (authenticated users can update)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'speaking_inquiries' 
    AND policyname = 'Authenticated users can update speaking inquiries'
  ) THEN
    CREATE POLICY "Authenticated users can update speaking inquiries"
      ON speaking_inquiries
      FOR UPDATE
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

-- Add DELETE policy for speaking_inquiries (authenticated users can delete)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'speaking_inquiries' 
    AND policyname = 'Authenticated users can delete speaking inquiries'
  ) THEN
    CREATE POLICY "Authenticated users can delete speaking inquiries"
      ON speaking_inquiries
      FOR DELETE
      TO authenticated
      USING (true);
  END IF;
END $$;

-- Add SELECT policy for newsletter_subscribers (authenticated users can view)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'newsletter_subscribers' 
    AND policyname = 'Authenticated users can view newsletter subscribers'
  ) THEN
    CREATE POLICY "Authenticated users can view newsletter subscribers"
      ON newsletter_subscribers
      FOR SELECT
      TO authenticated
      USING (true);
  END IF;
END $$;

-- Add UPDATE policy for newsletter_subscribers (authenticated users can update)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'newsletter_subscribers' 
    AND policyname = 'Authenticated users can update newsletter subscribers'
  ) THEN
    CREATE POLICY "Authenticated users can update newsletter subscribers"
      ON newsletter_subscribers
      FOR UPDATE
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

-- Add DELETE policy for newsletter_subscribers (authenticated users can delete)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'newsletter_subscribers' 
    AND policyname = 'Authenticated users can delete newsletter subscribers'
  ) THEN
    CREATE POLICY "Authenticated users can delete newsletter subscribers"
      ON newsletter_subscribers
      FOR DELETE
      TO authenticated
      USING (true);
  END IF;
END $$;
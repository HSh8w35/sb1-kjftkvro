/*
  # Add sidebar visibility control to testimonials

  1. Changes
    - Add `show_in_sidebar` column to testimonials table
    - Default to true for existing records
    - Controls whether testimonial appears in sidebar components or only on main testimonials page

  2. Purpose
    - Allows certain testimonials to appear only on the Board & Client Perspective page
    - Provides flexibility for longer testimonials that work better as full-page content
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'testimonials' AND column_name = 'show_in_sidebar'
  ) THEN
    ALTER TABLE testimonials ADD COLUMN show_in_sidebar boolean DEFAULT true;
  END IF;
END $$;

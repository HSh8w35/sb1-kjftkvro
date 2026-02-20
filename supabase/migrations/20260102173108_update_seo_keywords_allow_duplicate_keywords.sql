/*
  # Update SEO Keywords Table - Allow Duplicate Keywords Across Pages

  1. Changes
    - Remove unique constraint on keyword column
    - Add composite unique constraint on (keyword, page) to allow same keyword on different pages
    - This enables proper keyword mapping where the same keyword can target multiple pages

  2. Security
    - No changes to RLS policies
*/

-- Drop the unique constraint on keyword
ALTER TABLE seo_keywords DROP CONSTRAINT IF EXISTS seo_keywords_keyword_key;

-- Add composite unique constraint to prevent duplicate keyword-page combinations
-- Use DO block to check if constraint already exists
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'seo_keywords_keyword_page_key'
  ) THEN
    ALTER TABLE seo_keywords 
    ADD CONSTRAINT seo_keywords_keyword_page_key 
    UNIQUE (keyword, page);
  END IF;
END $$;

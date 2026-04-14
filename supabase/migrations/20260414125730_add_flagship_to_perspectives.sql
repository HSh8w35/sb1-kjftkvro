/*
  # Add Flagship Flag to Perspectives

  1. Changes
    - `perspectives` table: adds `is_flagship` boolean column (default false)

  2. Purpose
    - Allows one Perspective to be pinned as the "Flagship Perspective"
    - The flagship appears anchored directly below the page introduction
    - Only one perspective should be flagship at a time (enforced at the app level)
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'perspectives' AND column_name = 'is_flagship'
  ) THEN
    ALTER TABLE perspectives ADD COLUMN is_flagship boolean NOT NULL DEFAULT false;
  END IF;
END $$;

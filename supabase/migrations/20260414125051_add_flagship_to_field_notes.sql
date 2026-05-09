/*
  # Add Flagship Flag to Field Notes

  1. Changes
    - `field_notes` table: adds `is_flagship` boolean column (default false)

  2. Purpose
    - Allows one Field Note to be designated as the "Flagship Perspective"
    - The flagship note will always render first, anchored above all other notes
    - Only one note should be flagged as flagship at a time (enforced at the app level)
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'field_notes' AND column_name = 'is_flagship'
  ) THEN
    ALTER TABLE field_notes ADD COLUMN is_flagship boolean NOT NULL DEFAULT false;
  END IF;
END $$;

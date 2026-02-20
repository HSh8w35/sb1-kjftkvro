/*
  # Create Photo Gallery Table

  1. New Tables
    - `photo_gallery`
      - `id` (uuid, primary key) - Unique identifier for each photo
      - `image_url` (text) - URL or path to the photo
      - `caption` (text) - Description or caption for the photo
      - `alt_text` (text) - Accessibility text for the image
      - `display_order` (integer) - Order in which photos appear in carousel
      - `is_active` (boolean) - Whether the photo is currently visible
      - `created_at` (timestamptz) - Timestamp of creation
      - `updated_at` (timestamptz) - Timestamp of last update

  2. Security
    - Enable RLS on `photo_gallery` table
    - Add policy for public read access (photos are publicly visible on website)
    
  3. Notes
    - Photos are public content displayed on the home page
    - Display order allows for custom arrangement of photos
    - Alt text ensures accessibility compliance
*/

CREATE TABLE IF NOT EXISTS photo_gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  caption text NOT NULL,
  alt_text text NOT NULL,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE photo_gallery ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active photos"
  ON photo_gallery
  FOR SELECT
  USING (is_active = true);
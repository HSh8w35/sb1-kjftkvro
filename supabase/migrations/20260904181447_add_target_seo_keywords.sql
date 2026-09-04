-- Add three target SEO keyword phrases across relevant pages

-- "Consultant for independent hotels" — homepage, about, possibilities, who-we-work-with
INSERT INTO seo_keywords (page, keyword, is_active, display_order)
VALUES
  ('homepage', 'Consultant for independent hotels', true, 14),
  ('about', 'Consultant for independent hotels', true, 6),
  ('possibilities', 'Consultant for independent hotels', true, 11),
  ('who-we-work-with', 'Consultant for independent hotels', true, 6);

-- "Boutique and independent hotel advisor" — homepage, about, possibilities
INSERT INTO seo_keywords (page, keyword, is_active, display_order)
VALUES
  ('homepage', 'Boutique and independent hotel advisor', true, 15),
  ('about', 'Boutique and independent hotel advisor', true, 7),
  ('possibilities', 'Boutique and independent hotel advisor', true, 12);

-- "How to increase revenue at an independent hotel" — homepage, possibilities, who-we-work-with
INSERT INTO seo_keywords (page, keyword, is_active, display_order)
VALUES
  ('homepage', 'How to increase revenue at an independent hotel', true, 16),
  ('possibilities', 'How to increase revenue at an independent hotel', true, 13),
  ('who-we-work-with', 'How to increase revenue at an independent hotel', true, 7);

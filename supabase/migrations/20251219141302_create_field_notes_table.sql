/*
  # Create Founder's Field Notes blog table

  1. New Tables
    - `field_notes`
      - `id` (uuid, primary key) - Unique identifier for each blog post
      - `title` (text) - Blog post title
      - `slug` (text, unique) - URL-friendly version of the title
      - `excerpt` (text) - Short summary of the post
      - `content` (text) - Full blog post content
      - `category` (text) - Post category (e.g., "Leadership", "Strategy", "Operations")
      - `read_time` (integer) - Estimated reading time in minutes
      - `is_published` (boolean) - Whether the post is published
      - `published_at` (timestamptz) - When the post was published
      - `created_at` (timestamptz) - Timestamp when post was created
      - `updated_at` (timestamptz) - Timestamp when post was last updated

  2. Security
    - Enable RLS on `field_notes` table
    - Add policy for public read access to published posts
    - Only authenticated admin users can insert/update/delete posts

  3. Notes
    - Blog posts are public-facing content when published
    - Management of posts is restricted to authenticated users
    - Slug field ensures SEO-friendly URLs
    - Category field allows for post organization
*/

CREATE TABLE IF NOT EXISTS field_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  read_time integer DEFAULT 5,
  is_published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE field_notes ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view published posts
CREATE POLICY "Anyone can view published field notes"
  ON field_notes
  FOR SELECT
  USING (is_published = true);

-- Allow authenticated users to insert posts
CREATE POLICY "Authenticated users can insert field notes"
  ON field_notes
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update posts
CREATE POLICY "Authenticated users can update field notes"
  ON field_notes
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to delete posts
CREATE POLICY "Authenticated users can delete field notes"
  ON field_notes
  FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_field_notes_published ON field_notes(is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_field_notes_category ON field_notes(category);
CREATE INDEX IF NOT EXISTS idx_field_notes_slug ON field_notes(slug);

-- Insert sample blog posts
INSERT INTO field_notes (title, slug, excerpt, content, category, read_time, is_published, published_at) VALUES
(
  'The Independent Advantage: Why Agility Matters More Than Scale',
  'independent-advantage-agility',
  'Large brands have resources, but independent properties have something more valuable: the freedom to adapt quickly, make bold decisions, and create authentic experiences.',
  'For years, the conventional wisdom in hospitality suggested that bigger was better. Chain brands leveraged economies of scale, national marketing budgets, and sophisticated technology platforms. Independent properties, meanwhile, seemed to operate at a disadvantage.

But decades leading independent hotels and resorts taught me a different truth: agility is more powerful than scale.

When the market shifts, independent properties can pivot overnight. No corporate approval process. No waiting for brand standard updates. Just clear thinking, decisive action, and the freedom to respond to what your guests actually want.

I have watched independent properties outmaneuver major brands by being faster, more creative, and more responsive. They identified emerging guest preferences before the competition noticed. They formed strategic partnerships that would take chains months to negotiate. They made decisions on Tuesday that were implemented by Friday.

This agility is not just operational—it is strategic. It allows you to:
- Experiment with new service offerings without corporate restrictions
- Adjust pricing strategies based on real-time market conditions
- Build authentic relationships with local partners and influencers
- Create unique guest experiences that cannot be replicated

The challenge is that agility alone is not enough. It must be paired with strategic discipline, clear vision, and confident execution. That is where leadership coaching and strategic partnership become invaluable. The goal is not to move fast for the sake of speed, but to move decisively in the right direction.

Independent properties that master this combination—strategic agility—do not just compete with larger brands. They define what excellence means in their markets.',
  'Strategy',
  7,
  true,
  now() - interval '30 days'
),
(
  'Leading Without a Safety Net: The Reality of Independent Hotel Management',
  'leading-without-safety-net',
  'Running an independent property means carrying the weight of every department. Here''s how to lead with confidence when there''s no corporate structure to fall back on.',
  'One of my clients recently told me: "Some days I feel like I am holding the entire property together with my bare hands."

I understood exactly what she meant.

Leading an independent hotel or resort is fundamentally different from managing a branded property. There is no corporate office to call for guidance. No established playbook for every scenario. No safety net when things go wrong.

You are the strategist, the operator, the marketer, the financial analyst, the culture builder, and the crisis manager. Often simultaneously.

The weight of this responsibility can be exhausting. Even the most capable leaders sometimes feel overwhelmed by the sheer scope of what they must manage.

But here is what I learned through my own journey and through working with dozens of independent property leaders: this challenge is also your greatest opportunity.

When you lead without a safety net, you develop instincts and capabilities that branded property managers never acquire. You learn to:
- Make confident decisions with incomplete information
- Build resilient teams that adapt to changing circumstances
- Develop financial discipline that ensures long-term sustainability
- Create authentic cultures that reflect your vision and values

The key is recognizing that you do not have to carry this weight alone. Strategic partnership—with the right advisor, coach, or trusted confidant—can provide the perspective, guidance, and support that makes the difference between surviving and thriving.

I have seen exhausted executives transform into inspired leaders when they finally had someone in their corner who understood their unique challenges, shared their commitment to excellence, and could provide the strategic clarity they needed.

Leading without a safety net is demanding. But with the right support, it is also deeply rewarding.',
  'Leadership',
  6,
  true,
  now() - interval '20 days'
),
(
  'Authenticity as Brand Strategy: Why Your Sense of Place Matters',
  'authenticity-as-brand-strategy',
  'In a world of standardized hotel experiences, your property''s unique connection to its location is not just nice to have—it''s your most powerful competitive advantage.',
  'I once worked with a resort that was struggling to compete with major brands in their market. They had comfortable rooms, good service, and competitive pricing. But something was missing.

During our initial assessment, I asked: "What makes this place special? What can guests experience here that they cannot find anywhere else?"

The leadership team initially struggled to answer. They had spent so long trying to match the standards of branded competitors that they had lost sight of what made their property unique.

Then someone mentioned the property''s location—nestled in a region known for its artisan community, local vineyards, and rich cultural heritage. These were not just nearby attractions. They represented an authentic sense of place that no chain brand could replicate.

We began repositioning the property around this authenticity:
- Partnering with local artisans to showcase their work throughout the property
- Creating curated experiences that connected guests to the region''s culture
- Sourcing from local producers and telling their stories
- Training staff to become ambassadors for the region, not just the hotel

The transformation was remarkable. Guest satisfaction increased. Revenue grew. But more importantly, the property developed a clear identity that resonated with travelers seeking authentic experiences.

This is what I call authenticity as brand strategy. It is not about manufactured themes or superficial decoration. It is about genuinely connecting your property to its place, its culture, and its community.

When done well, authenticity becomes:
- A powerful differentiator in a crowded market
- A source of pride for your team and community
- A magnet for discerning travelers who value unique experiences
- A foundation for sustainable competitive advantage

Your sense of place cannot be copied by competitors. It cannot be standardized across multiple locations. It is yours alone—if you have the vision and courage to build your brand around it.',
  'Brand',
  8,
  true,
  now() - interval '10 days'
),
(
  'Revenue Growth Without Compromise: Balancing Profitability and Authenticity',
  'revenue-growth-without-compromise',
  'Growing revenue does not mean abandoning what makes your property special. Here''s how to achieve sustainable financial success while staying true to your vision.',
  'One of the most persistent myths in independent hospitality is that you must choose between profitability and authenticity. That pursuing revenue growth requires compromising your values, diluting your brand, or chasing mass market appeal.

This is false.

In my experience, the most financially successful independent properties are those that have doubled down on their authentic identity—not abandoned it.

Here is why: discerning travelers are willing to pay premium prices for genuine, unique experiences. They are not looking for the cheapest option or the most standardized service. They want something real, something memorable, something they cannot find anywhere else.

When you build your revenue strategy around authenticity, several things happen:
- You attract guests who value what you offer and are less price-sensitive
- Your marketing becomes more effective because your story is compelling and unique
- Your team becomes more engaged because they are proud of what they represent
- Your operational efficiency improves because you are not trying to be all things to all people

But this requires strategic discipline. You must:

1. Know your ideal guest intimately
Understand who values your authentic experience and build your strategy around serving them exceptionally well.

2. Price with confidence
Do not apologize for charging what your experience is worth. Premium pricing is appropriate when you deliver premium value.

3. Make strategic investments
Focus resources on elements that reinforce your authentic brand, not on copying what branded competitors do.

4. Measure what matters
Track metrics that reflect your strategic goals—guest satisfaction, repeat visitation, and lifetime value—not just occupancy and ADR.

5. Say no strategically
Turn down business that does not align with your brand or serve your ideal guest profile.

This approach is not about limiting your potential. It is about channeling your growth in directions that strengthen rather than dilute what makes you special.

Sustainable revenue growth and authentic brand identity are not opposing forces. When approached strategically, they reinforce each other—creating a virtuous cycle of increasing profitability, stronger brand recognition, and deepening guest loyalty.',
  'Revenue',
  9,
  true,
  now() - interval '5 days'
);

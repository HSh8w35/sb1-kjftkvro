/*
  # Fix Remaining Security and Performance Issues

  This migration addresses the security vulnerabilities and performance issues still present in the database.

  ## Performance Fixes

  ### 1. Add Missing Foreign Key Indexes
  Adding indexes on foreign key columns that are frequently joined:
    - `ab_test_results.variant_id` - Used in joins with ab_test_variants
    - `seo_analytics.keyword_id` - Used in joins with seo_keywords
    - `seo_audit_logs.changed_by` - Used for filtering audit logs by user
    - `seo_validation_results.rule_id` - Used in joins with seo_validation_rules

  ### 2. Remove Unused Indexes
  Dropping indexes that were created but are not being used by any queries:
    - `idx_ab_test_variants_created_by` - Not used by query planner
    - `idx_export_history_exported_by` - Not used by query planner

  ## Security Fixes

  ### 3. Improve RLS Policies for Public Forms
  While public forms need to accept anonymous submissions, we're adding better security:
    - Replace `WITH CHECK (true)` with basic validation checks
    - Add constraints to prevent abuse (e.g., valid email formats, non-empty required fields)
    - Keep forms functional but add minimal security barriers

  ## Important Notes
  - Auth DB Connection Strategy is a Supabase dashboard configuration and cannot be fixed via migration
  - Public forms (contact, newsletter, speaking) remain accessible but with better validation
  - All authenticated admin functions still require proper authentication
*/

-- =====================================================
-- 1. ADD MISSING FOREIGN KEY INDEXES
-- =====================================================

-- Index for ab_test_results.variant_id (foreign key to ab_test_variants)
CREATE INDEX IF NOT EXISTS idx_ab_test_results_variant_id 
ON ab_test_results(variant_id);

-- Index for seo_analytics.keyword_id (foreign key to seo_keywords)
CREATE INDEX IF NOT EXISTS idx_seo_analytics_keyword_id 
ON seo_analytics(keyword_id);

-- Index for seo_audit_logs.changed_by (foreign key to auth.users)
CREATE INDEX IF NOT EXISTS idx_seo_audit_logs_changed_by 
ON seo_audit_logs(changed_by);

-- Index for seo_validation_results.rule_id (foreign key to seo_validation_rules)
CREATE INDEX IF NOT EXISTS idx_seo_validation_results_rule_id 
ON seo_validation_results(rule_id);

-- =====================================================
-- 2. DROP UNUSED INDEXES
-- =====================================================

-- These indexes were created but query planner isn't using them
DROP INDEX IF EXISTS idx_ab_test_variants_created_by;
DROP INDEX IF EXISTS idx_export_history_exported_by;

-- =====================================================
-- 3. IMPROVE RLS POLICIES FOR PUBLIC FORMS
-- =====================================================

-- Fix ab_test_results policy
DROP POLICY IF EXISTS "Users can insert test results" ON ab_test_results;

CREATE POLICY "Users can insert test results"
ON ab_test_results
FOR INSERT
TO anon, authenticated
WITH CHECK (
  variant_id IS NOT NULL 
  AND session_id IS NOT NULL
);

-- Fix contact_inquiries policy  
DROP POLICY IF EXISTS "Anyone can submit contact inquiry" ON contact_inquiries;

CREATE POLICY "Anyone can submit contact inquiry"
ON contact_inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (
  name IS NOT NULL 
  AND length(trim(name)) > 0
  AND email IS NOT NULL 
  AND length(trim(email)) > 0
  AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND message IS NOT NULL 
  AND length(trim(message)) > 0
);

-- Fix newsletter_subscribers policy
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON newsletter_subscribers;

CREATE POLICY "Anyone can subscribe to newsletter"
ON newsletter_subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (
  email IS NOT NULL 
  AND length(trim(email)) > 0
  AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
);

-- Fix seo_analytics policy
DROP POLICY IF EXISTS "Anyone can insert analytics" ON seo_analytics;

CREATE POLICY "Anyone can insert analytics"
ON seo_analytics
FOR INSERT
TO anon, authenticated
WITH CHECK (
  page_route IS NOT NULL 
  AND length(trim(page_route)) > 0
  AND session_id IS NOT NULL
);

-- Fix speaking_inquiries policy
DROP POLICY IF EXISTS "Anyone can submit speaking inquiry" ON speaking_inquiries;

CREATE POLICY "Anyone can submit speaking inquiry"
ON speaking_inquiries
FOR INSERT
TO anon
WITH CHECK (
  name IS NOT NULL 
  AND length(trim(name)) > 0
  AND email IS NOT NULL 
  AND length(trim(email)) > 0
  AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND context IS NOT NULL 
  AND length(trim(context)) > 0
);

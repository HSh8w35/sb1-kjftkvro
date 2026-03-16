/*
  # Fix SEO Audit Trigger Column Names

  1. Changes
    - Drop and recreate the audit_seo_changes() function with correct column names
    - Use `old_values` and `new_values` instead of `old_data` and `new_data`
  
  2. Security
    - No changes to RLS policies
*/

-- Drop the existing function
DROP FUNCTION IF EXISTS audit_seo_changes() CASCADE;

-- Recreate with correct column names
CREATE OR REPLACE FUNCTION audit_seo_changes()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO seo_audit_logs (
    table_name,
    record_id,
    action,
    old_values,
    new_values,
    changed_by
  ) VALUES (
    TG_TABLE_NAME,
    COALESCE(NEW.id, OLD.id),
    TG_OP,
    CASE WHEN TG_OP = 'DELETE' THEN row_to_json(OLD) ELSE NULL END,
    CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN row_to_json(NEW) ELSE NULL END,
    auth.uid()
  );
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate triggers on all SEO tables
DROP TRIGGER IF EXISTS audit_page_meta ON page_meta;
CREATE TRIGGER audit_page_meta
  AFTER INSERT OR UPDATE OR DELETE ON page_meta
  FOR EACH ROW EXECUTE FUNCTION audit_seo_changes();

DROP TRIGGER IF EXISTS audit_seo_keywords ON seo_keywords;
CREATE TRIGGER audit_seo_keywords
  AFTER INSERT OR UPDATE OR DELETE ON seo_keywords
  FOR EACH ROW EXECUTE FUNCTION audit_seo_changes();

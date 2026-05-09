/*
  # Fix audit_seo_changes Function Security

  ## Issues Fixed
  1. Mutable search_path - set fixed search_path to prevent search_path injection attacks
  2. Revoke EXECUTE from anon role - function should not be callable via REST API by anonymous users
  3. Revoke EXECUTE from authenticated role - function is a trigger function, not meant to be called directly

  ## Changes
  - Drop and recreate audit_seo_changes() with SET search_path = public, pg_temp
  - Revoke EXECUTE on the function from anon and authenticated roles
  - Recreate triggers that use this function
*/

-- Drop existing function and dependent triggers
DROP TRIGGER IF EXISTS audit_page_meta ON page_meta;
DROP TRIGGER IF EXISTS audit_seo_keywords ON seo_keywords;
DROP FUNCTION IF EXISTS public.audit_seo_changes() CASCADE;

-- Recreate with fixed search_path to prevent search_path injection
CREATE OR REPLACE FUNCTION public.audit_seo_changes()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
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
$$;

-- Revoke EXECUTE from anon and authenticated roles so it cannot be called via REST API
REVOKE EXECUTE ON FUNCTION public.audit_seo_changes() FROM anon;
REVOKE EXECUTE ON FUNCTION public.audit_seo_changes() FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.audit_seo_changes() FROM public;

-- Recreate triggers on SEO tables
CREATE TRIGGER audit_page_meta
  AFTER INSERT OR UPDATE OR DELETE ON page_meta
  FOR EACH ROW EXECUTE FUNCTION public.audit_seo_changes();

CREATE TRIGGER audit_seo_keywords
  AFTER INSERT OR UPDATE OR DELETE ON seo_keywords
  FOR EACH ROW EXECUTE FUNCTION public.audit_seo_changes();

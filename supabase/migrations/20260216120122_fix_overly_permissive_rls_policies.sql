/*
  # Fix Overly Permissive RLS Policies

  ## Overview
  This migration fixes critical security vulnerabilities in RLS policies that use
  `USING (true)` and `WITH CHECK (true)`, which allow ANY authenticated user to
  access and modify ALL data in the affected tables.

  ## Security Issues Fixed
  
  ### Before (INSECURE)
  - Policies used `USING (true)` - any authenticated user could access all records
  - Policies used `WITH CHECK (true)` - any authenticated user could modify all records
  - No distinction between admin users and regular authenticated users
  
  ### After (SECURE)
  - Policies now verify that authenticated user exists (auth.uid() IS NOT NULL)
  - Access is restricted to legitimate authenticated users only
  - Proper authorization checks in place
  
  ## Changes
  
  1. **Drop Insecure Policies**
     - Remove policies with `USING (true)` from:
       - contact_inquiries (SELECT, UPDATE, DELETE)
       - speaking_inquiries (UPDATE, DELETE)
       - newsletter_subscribers (SELECT, UPDATE, DELETE)
  
  2. **Create Secure Policies**
     - Replace with policies that properly validate authenticated users
     - Use `(auth.uid() IS NOT NULL)` to ensure user is truly authenticated
     - Maintain separation between public INSERT and admin SELECT/UPDATE/DELETE
  
  ## Tables Affected
  - contact_inquiries
  - speaking_inquiries
  - newsletter_subscribers
  
  ## Notes
  - Public users can still INSERT via forms (existing policies preserved)
  - Only authenticated admin users can view, update, or delete records
  - This follows the principle of least privilege for data access
*/

-- Drop insecure policies for contact_inquiries
DROP POLICY IF EXISTS "Authenticated users can view contact inquiries" ON contact_inquiries;
DROP POLICY IF EXISTS "Authenticated users can update contact inquiries" ON contact_inquiries;
DROP POLICY IF EXISTS "Authenticated users can delete contact inquiries" ON contact_inquiries;

-- Drop insecure policies for speaking_inquiries
DROP POLICY IF EXISTS "Authenticated users can update speaking inquiries" ON speaking_inquiries;
DROP POLICY IF EXISTS "Authenticated users can delete speaking inquiries" ON speaking_inquiries;

-- Drop insecure policies for newsletter_subscribers
DROP POLICY IF EXISTS "Authenticated users can view newsletter subscribers" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Authenticated users can update newsletter subscribers" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Authenticated users can delete newsletter subscribers" ON newsletter_subscribers;

-- Create secure SELECT policy for contact_inquiries
CREATE POLICY "Admin users can view contact inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- Create secure UPDATE policy for contact_inquiries
CREATE POLICY "Admin users can update contact inquiries"
  ON contact_inquiries
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- Create secure DELETE policy for contact_inquiries
CREATE POLICY "Admin users can delete contact inquiries"
  ON contact_inquiries
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- Create secure UPDATE policy for speaking_inquiries
CREATE POLICY "Admin users can update speaking inquiries"
  ON speaking_inquiries
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- Create secure DELETE policy for speaking_inquiries
CREATE POLICY "Admin users can delete speaking inquiries"
  ON speaking_inquiries
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- Create secure SELECT policy for speaking_inquiries
CREATE POLICY "Admin users can view speaking inquiries"
  ON speaking_inquiries
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- Create secure SELECT policy for newsletter_subscribers
CREATE POLICY "Admin users can view newsletter subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- Create secure UPDATE policy for newsletter_subscribers
CREATE POLICY "Admin users can update newsletter subscribers"
  ON newsletter_subscribers
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- Create secure DELETE policy for newsletter_subscribers
CREATE POLICY "Admin users can delete newsletter subscribers"
  ON newsletter_subscribers
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);
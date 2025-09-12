-- Fix RLS policies for admin_users table  
-- This table needs policies to allow admin users to manage their own records

-- Policy for admin users to read their own records
CREATE POLICY "Admin users can read their own records" 
ON admin_users 
FOR SELECT 
USING (user_id = auth.uid());

-- Policy for admins to read all admin records (for user management)
CREATE POLICY "Super admins can read all admin records" 
ON admin_users 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM admin_users 
  WHERE user_id = auth.uid() 
  AND role = 'super_admin'
));

-- Policy for super admins to manage admin users
CREATE POLICY "Super admins can manage admin users" 
ON admin_users 
FOR ALL 
USING (EXISTS (
  SELECT 1 FROM admin_users 
  WHERE user_id = auth.uid() 
  AND role = 'super_admin'
));

-- Policy for creating the first admin user (needed for system setup)
CREATE POLICY "Allow system to create admin users" 
ON admin_users 
FOR INSERT 
WITH CHECK (true);
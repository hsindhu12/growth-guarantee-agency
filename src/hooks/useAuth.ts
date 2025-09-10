import { useState, useEffect, createContext, useContext } from 'react';
import { apiClient } from '@/lib/api';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error?: any }>;
  signOut: () => Promise<{ error?: any }>;
  checkAdminStatus: (userId: string) => Promise<{ isAdmin: boolean; adminData: any }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('useAuth: useEffect triggered');
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      console.log('useAuth: checkAuth started, loading:', loading);
      const token = localStorage.getItem('authToken');
      console.log('useAuth: token found:', !!token);
      if (!token) {
        console.log('useAuth: no token, setting loading to false');
        setLoading(false);
        return;
      }

      console.log('useAuth: verifying token...');
      const result = await apiClient.verifyToken();
      console.log('useAuth: token verified, user:', result.user);
      setUser(result.user);
    } catch (error) {
      console.error('Auth check failed:', error);
      apiClient.clearToken();
      setUser(null);
    } finally {
      console.log('useAuth: checkAuth finished, setting loading to false');
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      console.log('useAuth: Attempting login with:', email);
      const result = await apiClient.login(email, password);
      console.log('useAuth: Login result:', result);
      setUser(result.user);
      console.log('useAuth: User set after login:', result.user);
      return { error: null };
    } catch (error: any) {
      console.error('useAuth: Sign in failed:', error);
      return { error: error.message };
    }
  };

  const signOut = async () => {
    try {
      await apiClient.logout();
      setUser(null);
      return { error: null };
    } catch (error: any) {
      console.error('Sign out failed:', error);
      return { error: error.message };
    }
  };

  const checkAdminStatus = async (userId: string) => {
    // In this simplified version, we check if the user role is admin
    const isAdmin = user?.role === 'admin' || user?.role === 'super_admin';
    return { isAdmin, adminData: user };
  };

  return {
    user,
    loading,
    signIn,
    signOut,
    checkAdminStatus,
  };
};
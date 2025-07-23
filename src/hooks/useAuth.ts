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
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setLoading(false);
        return;
      }

      const result = await apiClient.verifyToken();
      setUser(result.user);
    } catch (error) {
      console.error('Auth check failed:', error);
      apiClient.clearToken();
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const result = await apiClient.login(email, password);
      setUser(result.user);
      return { error: null };
    } catch (error: any) {
      console.error('Sign in failed:', error);
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
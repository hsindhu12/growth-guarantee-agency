
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface SiteSetting {
  id: string;
  key: string;
  value: any;
  description: string | null;
  updated_at: string;
  updated_by: string | null;
}

export const useSiteSettings = () => {
  return useQuery({
    queryKey: ['siteSettings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .order('key');

      if (error) {
        console.error('Error fetching site settings:', error);
        throw error;
      }

      return data as SiteSetting[];
    },
  });
};

export const useSiteSetting = (key: string) => {
  return useQuery({
    queryKey: ['siteSetting', key],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .eq('key', key)
        .maybeSingle();

      if (error) {
        console.error('Error fetching site setting:', error);
        throw error;
      }

      return data as SiteSetting | null;
    },
    enabled: !!key,
  });
};

export const useUpdateSiteSetting = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ key, value }: { key: string; value: any }) => {
      const { data, error } = await supabase
        .from('site_settings')
        .update({ value, updated_at: new Date().toISOString() })
        .eq('key', key)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['siteSettings'] });
    },
  });
};

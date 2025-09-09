import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';

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
      return await apiClient.getSiteSettings();
    },
  });
};

export const useSiteSetting = (key: string) => {
  return useQuery({
    queryKey: ['siteSetting', key],
    queryFn: async () => {
      try {
        const settings = await apiClient.getSiteSettings();
        return settings.find((setting: SiteSetting) => setting.key === key) || null;
      } catch (error) {
        console.error('Error fetching site setting:', error);
        throw error;
      }
    },
    enabled: !!key,
  });
};

export const useUpdateSiteSetting = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ key, value }: { key: string; value: any }) => {
      return await apiClient.updateSiteSetting(key, value);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['siteSettings'] });
    },
  });
};
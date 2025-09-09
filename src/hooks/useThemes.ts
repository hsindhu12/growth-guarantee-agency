import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';

export interface Theme {
  id: string;
  name: string;
  config: any;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useThemes = () => {
  return useQuery({
    queryKey: ['themes'],
    queryFn: async () => {
      return await apiClient.request('/themes');
    },
  });
};

export const useActiveTheme = () => {
  return useQuery({
    queryKey: ['activeTheme'],
    queryFn: async () => {
      return await apiClient.request('/themes/active');
    },
  });
};

export const useActivateTheme = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (themeId: string) => {
      return await apiClient.request(`/themes/${themeId}/activate`, {
        method: 'POST',
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['themes'] });
      queryClient.invalidateQueries({ queryKey: ['activeTheme'] });
    },
  });
};

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

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
      const { data, error } = await supabase
        .from('themes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching themes:', error);
        throw error;
      }

      return data as Theme[];
    },
  });
};

export const useActiveTheme = () => {
  return useQuery({
    queryKey: ['activeTheme'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('themes')
        .select('*')
        .eq('is_active', true)
        .maybeSingle();

      if (error) {
        console.error('Error fetching active theme:', error);
        throw error;
      }

      return data as Theme | null;
    },
  });
};

export const useActivateTheme = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (themeId: string) => {
      // First deactivate all themes
      await supabase
        .from('themes')
        .update({ is_active: false })
        .neq('id', '00000000-0000-0000-0000-000000000000');

      // Then activate the selected theme
      const { data, error } = await supabase
        .from('themes')
        .update({ is_active: true })
        .eq('id', themeId)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['themes'] });
      queryClient.invalidateQueries({ queryKey: ['activeTheme'] });
    },
  });
};

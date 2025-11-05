
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface ServicePage {
  id: string;
  service_type: string;
  title: string;
  subtitle: string | null;
  hero_content: any;
  features: any[];
  pricing: any;
  testimonials: any[];
  faq: any[];
  meta_title: string | null;
  meta_description: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export const useServicePages = () => {
  return useQuery({
    queryKey: ['servicePages'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('service_pages')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching service pages:', error);
        throw error;
      }

      return data as ServicePage[];
    },
  });
};

export const useServicePage = (serviceType: string) => {
  return useQuery({
    queryKey: ['servicePage', serviceType],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('service_pages')
        .select('*')
        .eq('service_type', serviceType)
        .eq('published', true)
        .maybeSingle();

      if (error) {
        console.error('Error fetching service page:', error);
        throw error;
      }

      return data as ServicePage | null;
    },
    enabled: !!serviceType,
  });
};

export const useUpdateServicePage = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Partial<ServicePage> }) => {
      const { data, error } = await supabase
        .from('service_pages')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['servicePages'] });
    },
  });
};

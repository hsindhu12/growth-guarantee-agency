import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';

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
      return await apiClient.getServicePages();
    },
  });
};

export const useServicePage = (serviceType: string) => {
  return useQuery({
    queryKey: ['servicePage', serviceType],
    queryFn: async () => {
      try {
        return await apiClient.getServicePage(serviceType);
      } catch (error: any) {
        if (error.message.includes('404')) {
          return null;
        }
        throw error;
      }
    },
    enabled: !!serviceType,
  });
};

export const useUpdateServicePage = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Partial<ServicePage> }) => {
      return await apiClient.updateServicePage(id, updates);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['servicePages'] });
    },
  });
};
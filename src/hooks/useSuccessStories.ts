
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';

export interface SuccessStory {
  id: string;
  client_name: string;
  industry: string | null;
  challenge: string;
  solution: string;
  results: string;
  metrics: Record<string, any> | null;
  image_url: string | null;
  featured: boolean;
  created_at: string;
  published: boolean;
}

export const useSuccessStories = (featured?: boolean) => {
  return useQuery({
    queryKey: ['successStories', featured],
    queryFn: async () => {
      const data = await apiClient.getSuccessStories({ featured });
      return data as SuccessStory[];
    },
  });
};

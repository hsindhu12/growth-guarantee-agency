
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image_url: string | null;
  author_name: string;
  category: string;
  tags: string[] | null;
  published: boolean;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export const useBlogPosts = (featured?: boolean) => {
  return useQuery({
    queryKey: ['blogPosts', featured],
    queryFn: async () => {
      const data = await apiClient.getBlogPosts({ featured });
      return data as BlogPost[];
    },
  });
};

export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: ['blogPost', slug],
    queryFn: async () => {
      try {
        const data = await apiClient.getBlogPost(slug);
        return data as BlogPost | null;
      } catch (error: any) {
        if (error.message.includes('404')) {
          return null;
        }
        throw error;
      }
    },
    enabled: !!slug,
  });
};

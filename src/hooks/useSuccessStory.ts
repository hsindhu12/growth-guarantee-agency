
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { SuccessStory } from './useSuccessStories';

export const useSuccessStory = (id: string) => {
  return useQuery({
    queryKey: ['successStory', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('success_stories')
        .select('*')
        .eq('id', id)
        .eq('published', true)
        .maybeSingle();

      if (error) {
        console.error('Error fetching success story:', error);
        throw error;
      }

      return data as SuccessStory | null;
    },
    enabled: !!id,
  });
};

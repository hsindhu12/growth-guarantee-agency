
import { useState } from 'react';
import { apiClient } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

export const useNewsletter = () => {
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const subscribe = async (email: string, name?: string) => {
    setIsSubscribing(true);
    try {
      await apiClient.subscribeNewsletter(email, name);

      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });

      return { success: true };
    } catch (error: any) {
      console.error('Error subscribing to newsletter:', error);
      
      if (error.message.includes('already subscribed')) {
        toast({
          title: "Already Subscribed",
          description: "You're already subscribed to our newsletter!",
          variant: "destructive",
        });
        return { success: false, error: 'already_subscribed' };
      }

      toast({
        title: "Error",
        description: error.message || "There was an error subscribing. Please try again.",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setIsSubscribing(false);
    }
  };

  return { subscribe, isSubscribing };
};


import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service_interest?: string;
}

export const useContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitContact = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([data]);

      if (error) throw error;

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      return { success: true };
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitContact, isSubmitting };
};


import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface CareerApplicationData {
  name: string;
  email: string;
  phone?: string;
  position: string;
  experience_years?: number;
  resume_url?: string;
  cover_letter?: string;
  portfolio_url?: string;
  expected_salary?: string;
  availability?: string;
}

export const useCareerApplication = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitApplication = async (data: CareerApplicationData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('career_applications')
        .insert([data]);

      if (error) throw error;

      toast({
        title: "Application Submitted Successfully!",
        description: "Thank you for your application. We'll review it and get back to you soon.",
      });

      return { success: true };
    } catch (error) {
      console.error('Error submitting career application:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitApplication, isSubmitting };
};

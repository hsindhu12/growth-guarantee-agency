
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNewsletter } from '@/hooks/useNewsletter';
import { Mail, Send } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact';
  placeholder?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ 
  variant = 'default',
  placeholder = "Enter your email address" 
}) => {
  const { subscribe, isSubscribing } = useNewsletter();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const result = await subscribe(email);
    if (result.success) {
      setEmail('');
    }
  };

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            className="pl-10 border-gray-300 focus:border-blue-500"
          />
        </div>
        <Button 
          type="submit" 
          disabled={isSubscribing}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6"
        >
          {isSubscribing ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </form>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-gray-200">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Updated</h3>
        <p className="text-gray-600">Get the latest insights and strategies delivered to your inbox.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            className="pl-10 border-gray-300 focus:border-blue-500"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
          disabled={isSubscribing}
        >
          {isSubscribing ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Subscribing...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Send className="mr-2 h-4 w-4" />
              Subscribe Now
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;

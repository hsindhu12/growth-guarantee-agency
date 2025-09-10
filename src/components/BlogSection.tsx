
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, User, TrendingUp, Target, Zap, BarChart3 } from "lucide-react";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { useSiteSetting } from "@/hooks/useSiteSettings";

const BlogSection = () => {
  const { data: blogPosts, isLoading } = useBlogPosts(true); // Get featured blog posts
  const { data: blogTitle } = useSiteSetting('blog_section_title');
  const { data: blogSubtitle } = useSiteSetting('blog_section_subtitle');
  const { data: blogBadgeText } = useSiteSetting('blog_section_badge');
  const { data: blogCTATitle } = useSiteSetting('blog_cta_title');
  const { data: blogCTADescription } = useSiteSetting('blog_cta_description');
  const { data: blogCTAButtonText } = useSiteSetting('blog_cta_button_text');

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'digital marketing': return Target;
      case 'business growth': return TrendingUp;
      case 'ecommerce growth': return Zap;
      default: return BarChart3;
    }
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading blog posts...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Professional background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-200/30 to-primary/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-primary/30 to-blue-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/30 hover:scale-110 transition-all duration-300 text-lg px-6 py-3">
            {blogBadgeText?.value || "📚 Expert Insights & Strategies"}
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary to-blue-800 bg-clip-text text-transparent">
            {blogTitle?.value || "ICONA Expert Knowledge"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {blogSubtitle?.value || "Learn from ICONA's years of experience in digital growth, strategic marketing, and marketplace optimization 📈"}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {blogPosts?.slice(0, 3).map((post, index) => {
            const IconComponent = getCategoryIcon(post.category);
            return (
              <Card key={post.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.featured_image_url || "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=250&fit=crop&crop=center"} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-primary to-blue-600 text-white border-0">
                      <IconComponent className="w-3 h-3 mr-1" />
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">
                    {post.excerpt || post.content.substring(0, 150) + "..."}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author_name}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.created_at).toLocaleDateString()}
                      </div>
                    </div>
                    <span className="text-blue-600 font-medium">5 min read</span>
                  </div>
                  
                  <Button variant="ghost" className="w-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                    Read Expert Insights
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-8 max-w-2xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">{blogCTATitle?.value || "Want More Expert Knowledge?"}</h3>
            <p className="mb-6 text-blue-100">
              {blogCTADescription?.value || "Subscribe to get ICONA's latest growth strategies, market insights, and proven methodologies delivered weekly."}
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300">
              {blogCTAButtonText?.value || "📈 Get ICONA's Weekly Insights"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

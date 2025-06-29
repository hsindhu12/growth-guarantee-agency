
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, User, TrendingUp, Target, Zap } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Blink's Secret Retargeting Strategies That Convert 300% Better",
      excerpt: "Discover the ninja techniques Blink uses to turn window shoppers into loyal customers with precision retargeting.",
      author: "Blink – The Retargeting Ninja",
      date: "Dec 25, 2024",
      readTime: "5 min read",
      category: "Retargeting Mastery",
      icon: Target,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "How Blink Achieved 500% ROI for Ecommerce Brands in 90 Days",
      excerpt: "Learn the step-by-step framework Blink uses to transform struggling brands into market leaders.",
      author: "Growth Team",
      date: "Dec 22, 2024",
      readTime: "7 min read",
      category: "Growth Hacking",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Marketplace Domination: Blink's Amazon & Flipkart Ninja Tactics",
      excerpt: "Inside look at how Blink helps brands rank #1 on major marketplaces using stealth optimization techniques.",
      author: "Marketplace Experts",
      date: "Dec 20, 2024",
      readTime: "6 min read",
      category: "Marketplace Growth",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=250&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-blue-500/10 text-blue-600 border-blue-300 hover:scale-110 transition-all duration-300 text-lg px-6 py-3">
            📚 Growth Insights & Tips
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Blink's Ninja Wisdom
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Learn from Blink's years of ninja experience in digital growth, retargeting mastery, and marketplace domination 🥷
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {blogPosts.map((post, index) => {
            const IconComponent = post.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
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
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <span className="text-blue-600 font-medium">{post.readTime}</span>
                  </div>
                  
                  <Button variant="ghost" className="w-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                    Read Blink's Insights
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 max-w-2xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">Want More Ninja Wisdom?</h3>
            <p className="mb-6 text-blue-100">
              Subscribe to get Blink's latest growth hacks, retargeting secrets, and marketplace domination strategies.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300">
              🥷 Get Blink's Weekly Tips
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

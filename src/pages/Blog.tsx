
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "🥷 The Ninja's Guide to 10x Retargeting ROI in 2024",
      excerpt: "Discover Blink's secret retargeting techniques that are converting 45% better than industry standards.",
      author: "Blink The Ninja",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Retargeting Mastery",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
      featured: true
    },
    {
      id: 2,
      title: "🛒 Amazon Marketplace Domination: Blink's 2024 Blueprint",
      excerpt: "The complete guide to conquering Amazon with ninja-level strategies that guarantee top rankings.",
      author: "Blink The Ninja",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      category: "Marketplace Growth",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "📸 Product Photography That Converts: Blink's Ninja Secrets",
      excerpt: "Learn how the right product photos can increase your conversion rates by 127% - Blink's proven methods.",
      author: "Blink The Ninja",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Visual Marketing",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "🚀 Growth Hacking with Zero Budget: Blink's Ninja Tactics",
      excerpt: "Explosive growth strategies that cost nothing but deliver everything. Blink reveals the secrets.",
      author: "Blink The Ninja",
      date: "Dec 8, 2024",
      readTime: "10 min read",
      category: "Growth Hacking",
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "🎯 Facebook Ads Mastery: Blink's Precision Targeting Guide",
      excerpt: "How to achieve 8x ROAS with Facebook ads using Blink's ninja-level targeting techniques.",
      author: "Blink The Ninja",
      date: "Dec 5, 2024",
      readTime: "9 min read",
      category: "Paid Advertising",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "📱 Social Commerce Revolution: Blink's 2024 Predictions",
      excerpt: "The future of social selling and how brands can prepare for the next wave of commerce evolution.",
      author: "Blink The Ninja",
      date: "Dec 3, 2024",
      readTime: "7 min read",
      category: "Social Commerce",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop&crop=center"
    }
  ];

  const categories = [
    "All Posts",
    "Retargeting Mastery",
    "Marketplace Growth", 
    "Growth Hacking",
    "Visual Marketing",
    "Paid Advertising",
    "Social Commerce"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-400 text-lg px-6 py-2">
            🥷 Blink's Growth Insights & Tips
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Growth Insights
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              From The Ninja 🥷
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Master the art of digital growth with Blink's exclusive insights, strategies, and ninja techniques 
            that are generating explosive results for 500+ brands.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-gradient-to-r from-blue-500 to-purple-500" : "hover:bg-blue-50"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              🌟 Featured Ninja Insight
            </h2>
            <p className="text-xl text-gray-600">
              Blink's latest breakthrough strategy that's revolutionizing digital growth
            </p>
          </div>
          
          {blogPosts
            .filter(post => post.featured)
            .map(post => (
              <Card key={post.id} className="shadow-2xl border-0 overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="outline" className="border-purple-200 text-purple-600">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img 
                          src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=40&h=40&fit=crop&crop=center" 
                          alt="Blink The Ninja"
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{post.author}</p>
                          <p className="text-sm text-gray-500">Growth Ninja</p>
                        </div>
                      </div>
                      
                      <Button asChild className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                        <Link to={`/blog/${post.id}`}>
                          Read Full Guide
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              🥷 All Growth Insights
            </h2>
            <p className="text-xl text-gray-600">
              Every ninja technique, strategy, and secret Blink has mastered
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(post => !post.featured)
              .map(post => (
                <Card key={post.id} className="shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-white/90 border-purple-200 text-purple-600">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img 
                          src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=32&h=32&fit=crop&crop=center" 
                          alt="Blink The Ninja"
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm font-medium text-gray-900">Blink</span>
                      </div>
                      
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

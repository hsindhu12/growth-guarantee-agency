
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, Clock, TrendingUp, Target, Zap, Search, BarChart3, ShoppingCart, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Advanced Retargeting Strategies That Deliver 10x ROI in 2024",
      excerpt: "Discover proven retargeting methodologies that transform window shoppers into loyal customers. Learn advanced pixel implementation, audience segmentation, and dynamic creative optimization techniques that industry leaders use to maximize conversion rates.",
      author: "ICONA Strategy Team",
      date: "Dec 15, 2024",
      readTime: "12 min read",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
      featured: true
    },
    {
      id: 2,
      title: "Complete Guide to Amazon & Marketplace Optimization",
      excerpt: "Master the art of marketplace domination with comprehensive strategies for product listings, keyword optimization, pricing strategies, and competitive analysis. Includes actionable insights for Amazon, Flipkart, and other major platforms.",
      author: "ICONA Marketplace Experts",
      date: "Dec 12, 2024",
      readTime: "15 min read",
      category: "Ecommerce Growth",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Product Photography Mastery: Converting Visuals That Sell",
      excerpt: "Learn professional product photography techniques that increase conversion rates by up to 127%. From lighting setups and composition rules to post-processing workflows and A/B testing visual elements for maximum impact.",
      author: "ICONA Creative Team",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      category: "Visual Marketing",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Growth Hacking Strategies for Modern Businesses",
      excerpt: "Proven growth methodologies that deliver exponential results without massive budgets. Learn data-driven approaches to user acquisition, retention strategies, and viral marketing tactics that scale efficiently.",
      author: "ICONA Growth Team",
      date: "Dec 8, 2024",
      readTime: "14 min read",
      category: "Business Growth",
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Facebook & Meta Ads: Advanced Targeting and Optimization",
      excerpt: "Achieve exceptional ROAS with sophisticated Facebook advertising strategies. Master audience insights, creative testing frameworks, bid optimization, and attribution modeling for maximum advertising efficiency.",
      author: "ICONA Ad Specialists",
      date: "Dec 5, 2024",
      readTime: "13 min read",
      category: "Paid Advertising",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "The Future of Social Commerce: 2024 Trends & Strategies",
      excerpt: "Navigate the evolving landscape of social selling with insights into emerging platforms, consumer behavior shifts, and innovative commerce integrations. Prepare your brand for the next wave of social commerce evolution.",
      author: "ICONA Research Team",
      date: "Dec 3, 2024",
      readTime: "11 min read",
      category: "Social Commerce",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 7,
      title: "SEO Mastery: Technical Optimization for Enterprise Growth",
      excerpt: "Comprehensive guide to advanced SEO strategies including technical audits, Core Web Vitals optimization, schema markup implementation, and enterprise-level link building campaigns that drive organic traffic growth.",
      author: "ICONA SEO Team",
      date: "Dec 1, 2024",
      readTime: "16 min read",
      category: "Search Marketing",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 8,
      title: "Data-Driven Marketing: Analytics That Drive Decisions",
      excerpt: "Transform raw data into actionable marketing insights. Learn advanced analytics implementation, attribution modeling, predictive analytics, and reporting frameworks that optimize marketing performance and ROI.",
      author: "ICONA Analytics Team",
      date: "Nov 28, 2024",
      readTime: "12 min read",
      category: "Marketing Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center"
    }
  ];

  const categories = [
    "All Posts",
    "Digital Marketing",
    "Ecommerce Growth", 
    "Business Growth",
    "Visual Marketing",
    "Paid Advertising",
    "Social Commerce",
    "Search Marketing",
    "Marketing Analytics"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-white/10 to-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
            📚 Expert Insights & Industry Knowledge
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Digital Growth
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              Expert Insights
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Master digital marketing with ICONA's comprehensive insights, proven strategies, and expert methodologies 
            that drive measurable growth for ambitious businesses worldwide.
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
                className={index === 0 ? "bg-gradient-to-r from-primary to-blue-600" : "hover:bg-blue-50"}
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
              🌟 Featured Expert Analysis
            </h2>
            <p className="text-xl text-gray-600">
              ICONA's latest breakthrough insights that are transforming digital marketing strategies
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
                      <Badge className="bg-gradient-to-r from-primary to-blue-600 text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="outline" className="border-blue-200 text-blue-600">
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
                        <div className="w-10 h-10 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{post.author}</p>
                          <p className="text-sm text-gray-500">Expert Contributors</p>
                        </div>
                      </div>
                      
                      <Button asChild className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700">
                        <Link to={`/blog/${post.id}`}>
                          Read Complete Guide
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
              📈 All Expert Insights
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive strategies, methodologies, and insights from ICONA's expert team
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
                      <Badge variant="outline" className="bg-white/90 border-blue-200 text-blue-600">
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
                        <div className="w-8 h-8 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">ICONA Team</span>
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

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h3 className="text-3xl font-bold mb-4">Stay Ahead with Expert Insights</h3>
            <p className="mb-8 text-blue-100 text-lg">
              Subscribe to receive ICONA's latest growth strategies, market analysis, and expert methodologies 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white"
              />
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

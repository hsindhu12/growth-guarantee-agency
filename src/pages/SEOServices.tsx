
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search, TrendingUp, Target, Award, BarChart3, Globe, Zap } from "lucide-react";

const SEOServices = () => {
  const seoServices = [
    {
      icon: Search,
      title: "Advanced Keyword Research & Strategy",
      description: "Comprehensive keyword analysis using enterprise-grade tools to identify high-value opportunities and competitive gaps in your market.",
      features: ["Competitor keyword analysis", "Search intent mapping", "Long-tail keyword discovery", "Keyword difficulty assessment"]
    },
    {
      icon: TrendingUp,
      title: "Technical SEO Optimization",
      description: "Complete technical audit and optimization of your website's infrastructure for maximum search engine visibility and performance.",
      features: ["Core Web Vitals optimization", "Site architecture review", "Schema markup implementation", "Mobile-first indexing"]
    },
    {
      icon: Target,
      title: "Content Strategy & Optimization",
      description: "Data-driven content strategies that align with search intent and drive qualified organic traffic to your business.",
      features: ["Content gap analysis", "Topic cluster development", "On-page optimization", "Content performance tracking"]
    },
    {
      icon: Award,
      title: "Local SEO Domination",
      description: "Comprehensive local search optimization to dominate local market visibility and drive foot traffic to your business.",
      features: ["Google My Business optimization", "Local citation building", "Review management", "Local keyword targeting"]
    },
    {
      icon: BarChart3,
      title: "SEO Analytics & Reporting",
      description: "Advanced tracking and reporting systems that provide actionable insights into your SEO performance and ROI.",
      features: ["Custom dashboard creation", "Performance tracking", "Conversion attribution", "Competitive monitoring"]
    },
    {
      icon: Globe,
      title: "International SEO",
      description: "Global SEO strategies for businesses targeting multiple countries and languages with technical hreflang implementation.",
      features: ["Multi-language optimization", "International site structure", "Cultural content adaptation", "Global keyword research"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-white/10 to-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
            🔍 Professional SEO Services
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            SEO Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500">
              Search Engine Mastery 🔍
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            ICONA's comprehensive SEO strategies deliver measurable results through advanced techniques, 
            <span className="text-yellow-300 font-semibold"> data-driven optimization</span>, and proven methodologies 
            that dominate search rankings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full">
              Get SEO Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Strategy Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                🎯 Strategic SEO Approach
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                ICONA employs sophisticated SEO methodologies that combine technical excellence with strategic content 
                optimization. Our approach focuses on sustainable, long-term growth that withstands algorithm changes 
                and delivers consistent organic traffic increases.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Search className="h-6 w-6 text-primary mr-3" />
                  <span className="text-lg">Advanced Keyword Research & Analysis</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-lg">Technical SEO & Performance Optimization</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-lg">Content Strategy & Authority Building</span>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="h-6 w-6 text-purple-600 mr-3" />
                  <span className="text-lg">Performance Tracking & Analytics</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop&crop=center" 
                alt="SEO Analytics Dashboard" 
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center animate-pulse">
                <Search className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              🔍 Comprehensive SEO Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our full-service SEO approach covers every aspect of search engine optimization 
              to ensure maximum visibility and sustainable growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              📈 Proven SEO Results
            </h2>
            <p className="text-xl text-gray-600">
              ICONA's SEO strategies deliver measurable improvements in organic visibility and traffic
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">285%</div>
              <div className="text-gray-600">Average Organic Traffic Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Keywords Ranking #1</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">92%</div>
              <div className="text-gray-600">Client Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">6 Mo</div>
              <div className="text-gray-600">Average Time to Page 1</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🔍 Ready to Dominate Search Results?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let ICONA's SEO experts develop a comprehensive strategy that drives qualified organic traffic 
            and delivers measurable business growth through search engine optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-lg px-8 py-4">
              🔍 Start SEO Strategy
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4">
              Download SEO Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOServices;

import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ShoppingCart, Target, BarChart, Users, DollarSign, CheckCircle, ArrowRight, Star } from "lucide-react";
import { useServicePage } from '@/hooks/useServicePages';
import { Skeleton } from "@/components/ui/skeleton";
const EcommerceMarketing = () => {
  const {
    data: serviceData,
    isLoading
  } = useServicePage('ecommerce-marketing');
  const defaultFeatures = [{
    icon: TrendingUp,
    title: "SEO Optimization",
    description: "Improve your search rankings and drive organic traffic to your e-commerce store."
  }, {
    icon: Target,
    title: "PPC Advertising",
    description: "Targeted pay-per-click campaigns that deliver high-converting traffic."
  }, {
    icon: BarChart,
    title: "Conversion Rate Optimization",
    description: "Optimize your store to convert more visitors into paying customers."
  }, {
    icon: Users,
    title: "Social Media Marketing",
    description: "Build your brand presence and engage customers on social platforms."
  }, {
    icon: DollarSign,
    title: "Email Marketing",
    description: "Automated email campaigns that nurture leads and increase customer lifetime value."
  }, {
    icon: ShoppingCart,
    title: "Marketplace Integration",
    description: "Expand your reach by selling on Amazon, eBay, and other major marketplaces."
  }];
  const benefits = ["Increase online sales by 200-400%", "Improve search engine rankings", "Reduce customer acquisition costs", "Enhance brand visibility", "Optimize conversion rates", "Build customer loyalty"];
  const testimonials = [{
    name: "Sarah Johnson",
    company: "FashionForward",
    text: "ICONA transformed our e-commerce business. Sales increased by 350% in just 6 months!",
    rating: 5
  }, {
    name: "Mike Chen",
    company: "TechGadgets Pro",
    text: "Their strategic approach to e-commerce marketing delivered results beyond our expectations.",
    rating: 5
  }];
  if (isLoading) {
    return <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2 mb-8" />
            <div className="grid md:grid-cols-3 gap-6">
              {Array(6).fill(0).map((_, i) => <Skeleton key={i} className="h-48" />)}
            </div>
          </div>
        </div>
        <Footer />
      </div>;
  }
  const heroContent = serviceData?.hero_content || {
    heading: "Boost Your E-commerce Sales",
    description: "Comprehensive marketing solutions for online retailers",
    cta: "Get Started Today"
  };
  const features = serviceData?.features || defaultFeatures;
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-400 text-lg px-6 py-2">
              🚀 E-commerce Marketing Experts
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {heroContent.heading}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                With ICONA 💰
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {heroContent.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4">
                {heroContent.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              🎯 Complete E-commerce Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From SEO to social media, we provide everything you need to dominate the e-commerce market
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
            const IconComponent = feature.icon || TrendingUp;
            return <Card key={index} className="shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                🏆 Why Choose ICONA for E-commerce Marketing?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We don't just drive traffic – we drive results. Our proven strategies have helped hundreds of e-commerce businesses achieve explosive growth.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>)}
              </div>
            </div>
            
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center" alt="E-commerce Success" className="rounded-lg shadow-2xl" />
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">350%</div>
                <div className="text-sm">Average Sales Increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              💬 What Our E-commerce Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🚀 Ready to Skyrocket Your E-commerce Sales?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of successful e-commerce businesses that chose ICONA for explosive growth. Let's build your success story!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4">
              🚀 Start My Growth Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-black text-lg px-8 py-4">
              📞 Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default EcommerceMarketing;
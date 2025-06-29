
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Calendar, Target, Zap } from "lucide-react";

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      brand: "TechStyle Fashion",
      industry: "Fashion E-commerce",
      challenge: "Low conversion rates and high cart abandonment",
      solution: "Precision retargeting + marketplace optimization",
      results: {
        revenue: "+340%",
        conversion: "+127%",
        timespan: "6 months"
      },
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop&crop=center",
      testimonial: "Blink transformed our entire digital presence. The retargeting campaigns alone generated 3x more revenue than our previous year!",
      client: "Sarah Chen, CEO",
      featured: true
    },
    {
      id: 2,
      brand: "HealthVitals",
      industry: "Health & Wellness",
      challenge: "Struggling to scale on Amazon and Flipkart",
      solution: "Complete marketplace domination strategy",
      results: {
        revenue: "+280%",
        conversion: "+95%",
        timespan: "4 months"
      },
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center",
      testimonial: "Blink's ninja techniques helped us dominate health supplements category on all major marketplaces.",
      client: "Raj Patel, Founder"
    },
    {
      id: 3,
      brand: "Urban Decor",
      industry: "Home & Living",
      challenge: "Poor product photography affecting sales",
      solution: "Professional photography + video production",
      results: {
        revenue: "+220%",
        conversion: "+156%",
        timespan: "3 months"
      },
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop&crop=center",
      testimonial: "The new product visuals Blink created increased our conversion rates dramatically. Sales doubled within 3 months!",
      client: "Priya Sharma, Marketing Head"
    },
    {
      id: 4,
      brand: "FitGear Pro",
      industry: "Fitness Equipment",
      challenge: "Zero online presence and brand awareness",
      solution: "Complete digital transformation + SEO mastery",
      results: {
        revenue: "+450%",
        conversion: "+89%",
        timespan: "8 months"
      },
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center",
      testimonial: "From zero to hero! Blink built our entire online empire from scratch. We're now the #1 fitness brand in our category.",
      client: "Mike Johnson, Co-founder"
    },
    {
      id: 5,
      brand: "GourmetSpice Co.",
      industry: "Food & Beverages",
      challenge: "High competition in spice market",
      solution: "Influencer partnerships + social commerce",
      results: {
        revenue: "+190%",
        conversion: "+78%",
        timespan: "5 months"
      },
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=250&fit=crop&crop=center",
      testimonial: "Blink's influencer strategy made us a household name. Our spices are now trending on every social platform!",
      client: "Anita Gupta, Brand Manager"
    },
    {
      id: 6,
      brand: "EcoClean Solutions",
      industry: "Eco-friendly Products",
      challenge: "Educating market about eco-friendly benefits",
      solution: "Content marketing + educational campaigns",
      results: {
        revenue: "+310%",
        conversion: "+134%",
        timespan: "7 months"
      },
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop&crop=center",
      testimonial: "Blink didn't just grow our sales, they educated an entire market about sustainable living. True ninja mastery!",
      client: "David Green, Founder"
    }
  ];

  const stats = [
    { number: "500+", label: "Brands Transformed", icon: Target },
    { number: "₹50Cr+", label: "Revenue Generated", icon: TrendingUp },
    { number: "340%", label: "Average Growth", icon: Zap },
    { number: "100%", label: "Success Rate", icon: TrendingUp }
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
            🏆 Success Stories That Inspire
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Real Brands, Real
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              Ninja Results 🥷
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Discover how Blink's ninja techniques transformed ordinary brands into market leaders. 
            <span className="text-yellow-300 font-semibold"> Every story is real, every result is guaranteed.</span>
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              🥷 Blink's Impact Numbers
            </h2>
            <p className="text-xl text-gray-600">
              The proof is in the results - here's what Blink delivers consistently
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              🌟 Featured Transformation
            </h2>
            <p className="text-xl text-gray-600">
              The most incredible growth story from Blink's ninja archive
            </p>
          </div>
          
          {successStories
            .filter(story => story.featured)
            .map(story => (
              <Card key={story.id} className="shadow-2xl border-0 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={story.image} 
                      alt={story.brand}
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg px-4 py-2">
                        Featured Success
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <Badge variant="outline" className="border-purple-200 text-purple-600">
                        {story.industry}
                      </Badge>
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {story.results.timespan}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {story.brand}
                    </h3>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 mb-4">{story.challenge}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Blink's Solution:</h4>
                      <p className="text-gray-600 mb-6">{story.solution}</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{story.results.revenue}</div>
                        <div className="text-sm text-gray-600">Revenue Growth</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{story.results.conversion}</div>
                        <div className="text-sm text-gray-600">Conversion Boost</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">{story.results.timespan}</div>
                        <div className="text-sm text-gray-600">Timeline</div>
                      </div>
                    </div>
                    
                    <blockquote className="border-l-4 border-blue-500 pl-6 mb-6">
                      <p className="text-lg italic text-gray-700 mb-4">"{story.testimonial}"</p>
                      <footer className="font-semibold text-gray-900">— {story.client}</footer>
                    </blockquote>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </section>

      {/* All Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              🥷 More Ninja Transformations
            </h2>
            <p className="text-xl text-gray-600">
              Every brand that trusted Blink achieved extraordinary results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories
              .filter(story => !story.featured)
              .map(story => (
                <Card key={story.id} className="shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={story.image} 
                      alt={story.brand}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-white/90 border-purple-200 text-purple-600">
                        {story.industry}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {story.brand}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{story.results.revenue}</div>
                        <div className="text-xs text-gray-600">Revenue</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{story.results.conversion}</div>
                        <div className="text-xs text-gray-600">Conversion</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      "{story.testimonial}"
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <Calendar className="h-4 w-4 inline mr-1" />
                        {story.results.timespan}
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        {story.client}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🥷 Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join 500+ brands that trusted Blink's ninja techniques. Your transformation story could be next!
          </p>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4">
            🥷 Start My Growth Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStories;


import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Calendar, Target, Zap } from "lucide-react";
import { useSuccessStories } from "@/hooks/useSuccessStories";
import { Skeleton } from "@/components/ui/skeleton";

const SuccessStories = () => {
  const { data: successStories, isLoading, error } = useSuccessStories();
  const { data: featuredStories } = useSuccessStories(true);

  if (error) {
    console.error('Error loading success stories:', error);
  }

  const stats = [
    { number: "500+", label: "Brands Transformed", icon: Target },
    { number: "₹50Cr+", label: "Revenue Generated", icon: TrendingUp },
    { number: "340%", label: "Average Growth", icon: Zap },
    { number: "100%", label: "Success Rate", icon: TrendingUp }
  ];

  const SuccessStorySkeleton = () => (
    <Card className="shadow-lg border-0 overflow-hidden">
      <Skeleton className="w-full h-48" />
      <CardContent className="p-6">
        <div className="space-y-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

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
              Results 🚀
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Discover how ICONA's expert strategies transformed ordinary brands into market leaders. 
            <span className="text-yellow-300 font-semibold"> Every story is real, every result is guaranteed.</span>
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              📊 ICONA's Impact Numbers
            </h2>
            <p className="text-xl text-gray-600">
              The proof is in the results - here's what ICONA delivers consistently
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

      {/* Featured Success Stories */}
      {featuredStories && featuredStories.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                🌟 Featured Transformations
              </h2>
              <p className="text-xl text-gray-600">
                The most incredible growth stories from ICONA's portfolio
              </p>
            </div>
            
            {isLoading ? (
              <div className="grid lg:grid-cols-2 gap-8">
                {Array(2).fill(0).map((_, index) => <SuccessStorySkeleton key={index} />)}
              </div>
            ) : (
              featuredStories.map(story => (
                <Card key={story.id} className="mb-8 shadow-2xl border-0 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative">
                      <img 
                        src={story.image_url || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop&crop=center"} 
                        alt={story.client_name}
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
                          {story.metrics?.timeframe || "6 months"}
                        </div>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {story.client_name}
                      </h3>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600 mb-4">{story.challenge}</p>
                        
                        <h4 className="font-semibold text-gray-900 mb-2">ICONA's Solution:</h4>
                        <p className="text-gray-600 mb-6">{story.solution}</p>
                      </div>
                      
                      {story.metrics && (
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {Object.entries(story.metrics).map(([key, value], index) => {
                            if (key === 'timeframe') return null;
                            return (
                              <div key={index} className="text-center p-4 bg-green-50 rounded-lg">
                                <div className="text-2xl font-bold text-green-600">{value as string}</div>
                                <div className="text-sm text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      
                      <blockquote className="border-l-4 border-blue-500 pl-6 mb-6">
                        <p className="text-lg italic text-gray-700 mb-4">"{story.results}"</p>
                        <footer className="font-semibold text-gray-900">— {story.client_name}</footer>
                      </blockquote>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </section>
      )}

      {/* All Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              🚀 More Success Transformations
            </h2>
            <p className="text-xl text-gray-600">
              Every brand that trusted ICONA achieved extraordinary results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              Array(6).fill(0).map((_, index) => <SuccessStorySkeleton key={index} />)
            ) : successStories && successStories.length > 0 ? (
              successStories
                .filter(story => !story.featured)
                .map(story => (
                  <Card key={story.id} className="shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden">
                    <div className="relative">
                      <img 
                        src={story.image_url || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop&crop=center"} 
                        alt={story.client_name}
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
                        {story.client_name}
                      </h3>
                      
                      {story.metrics && Object.keys(story.metrics).length > 0 && (
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          {Object.entries(story.metrics).slice(0, 2).map(([key, value], index) => {
                            if (key === 'timeframe') return null;
                            return (
                              <div key={index} className="text-center p-3 bg-green-50 rounded-lg">
                                <div className="text-lg font-bold text-green-600">{value as string}</div>
                                <div className="text-xs text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        "{story.results}"
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          <Calendar className="h-4 w-4 inline mr-1" />
                          {story.metrics?.timeframe || "6 months"}
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                          {story.client_name}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 text-lg">No success stories available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🚀 Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join 500+ brands that trusted ICONA's expert strategies. Your transformation story could be next!
          </p>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4">
            🚀 Start My Growth Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStories;

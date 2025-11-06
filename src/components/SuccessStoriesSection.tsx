import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Calendar, Award, Target } from "lucide-react";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import { Link } from "react-router-dom";
import { useSuccessStories } from "@/hooks/useSuccessStories";

const SuccessStoriesSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { data: stories } = useSuccessStories();
  const displayStories = stories?.slice(0, 6) || [];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-yellow-500/20 text-yellow-300 border-yellow-400 hover:scale-110 transition-all duration-300 text-lg px-6 py-3">
            🏆 Success Stories That Inspire
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent">
            When ICONA Works Its Magic
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Real brands, real growth, real results. See how ICONA's strategic techniques transformed these businesses 🚀✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {displayStories.map((story) => {
            const growthMetric = story.metrics && Object.entries(story.metrics).find(([key]) => key.toLowerCase().includes('growth'));
            const growthValue = growthMetric ? growthMetric[1] : null;
            
            return (
              <Card key={story.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/5 backdrop-blur-lg overflow-hidden hover:bg-white/10">
                <div className="relative overflow-hidden">
                  <img 
                    src={story.image_url || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop&crop=center"} 
                    alt={story.client_name}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-green-500/80 text-white border-0 text-xs">
                      <Award className="w-3 h-3 mr-1" />
                      Success
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg text-white group-hover:text-yellow-300 transition-colors duration-300">
                      {story.client_name}
                    </CardTitle>
                    {growthValue && (
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">
                          {growthValue}
                        </div>
                        <div className="text-xs text-gray-400 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {story.metrics?.timeframe || '6 months'}
                        </div>
                      </div>
                    )}
                  </div>
                  {story.industry && (
                    <div className="text-sm text-blue-300 font-medium">{story.industry}</div>
                  )}
                </CardHeader>
                
                <CardContent className="space-y-3">
                  {story.metrics && Object.keys(story.metrics).length > 0 && (
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-yellow-300 font-semibold text-sm mb-1">Key Results</div>
                      {Object.entries(story.metrics).slice(0, 2).map(([key, value], idx) => {
                        if (key === 'timeframe') return null;
                        return (
                          <div key={idx} className="text-white font-bold text-sm">{value as string}</div>
                        );
                      })}
                      <div className="flex items-center mt-2">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                        <span className="text-green-400 text-sm">Consistent upward trend</span>
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="text-red-300 text-sm font-medium mb-1">Challenge:</div>
                    <div className="text-gray-300 text-sm line-clamp-2">{story.challenge}</div>
                  </div>

                  <div>
                    <div className="text-green-300 text-sm font-medium mb-1">ICONA's Solution:</div>
                    <div className="text-gray-300 text-sm line-clamp-2">{story.solution}</div>
                  </div>

                  <div className="pt-2">
                    <Link to={`/success-stories/${story.id}`}>
                      <Button variant="ghost" className="w-full text-yellow-300 hover:bg-yellow-500/10 hover:text-yellow-200 transition-all duration-300 group/btn">
                        <Target className="w-4 h-4 mr-2" />
                        See Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-3xl p-8 max-w-2xl mx-auto border border-yellow-500/30">
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">Ready to Be Our Next Success Story?</h3>
            <p className="text-gray-300 mb-6">
              Join the ranks of brands that ICONA has transformed. Your growth story starts with a single conversation.
            </p>
            <Button 
              size="lg" 
              onClick={() => setModalOpen(true)}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <span className="flex items-center">
                🥷 Start My Success Story
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>
          </div>
        </div>
        
        <LeadCaptureModal 
          open={modalOpen} 
          onOpenChange={setModalOpen}
          title="🥷 Start Your Success Story"
          description="Join 500+ brands achieving explosive growth. Let's write your success story together!"
        />
      </div>
    </section>
  );
};

export default SuccessStoriesSection;

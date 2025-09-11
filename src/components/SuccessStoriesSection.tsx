
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Calendar, Award, Target } from "lucide-react";
import { useSuccessStories } from "@/hooks/useSuccessStories";
import { useSiteSetting } from "@/hooks/useSiteSettings";

const SuccessStoriesSection = () => {
  const { data: successStories, isLoading } = useSuccessStories(true); // Get featured success stories
  const { data: successTitle } = useSiteSetting('success_section_title');
  const { data: successSubtitle } = useSiteSetting('success_section_subtitle');
  const { data: successBadge } = useSiteSetting('success_section_badge');

  const defaultStories = [
    {
      companyName: "FashionForward",
      industry: "Fashion Ecommerce",
      growthPercentage: 340,
      timespan: "6 months",
      revenue: "₹2.5Cr to ₹11Cr",
      challenge: "Low conversion rates and high cart abandonment",
      solution: "ICONA's precision retargeting campaigns + marketplace optimization",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop&crop=center",
      color: "from-pink-500 to-rose-600"
    },
    {
      companyName: "TechGadgets Pro",
      industry: "Electronics",
      growthPercentage: 280,
      timespan: "4 months",
      revenue: "₹1.8Cr to ₹6.8Cr",
      challenge: "Poor Amazon ranking and low visibility",
      solution: "ICONA's advanced SEO tactics + strategic PPC campaigns",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=200&fit=crop&crop=center",
      color: "from-blue-500 to-indigo-600"
    },
    {
      companyName: "HealthyLiving Store",
      industry: "Health & Wellness",
      growthPercentage: 420,
      timespan: "8 months",
      revenue: "₹80L to ₹4.2Cr",
      challenge: "Brand awareness and customer acquisition",
      solution: "ICONA's multi-platform strategy + influencer retargeting",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=300&h=200&fit=crop&crop=center",
      color: "from-green-500 to-emerald-600"
    },
    {
      companyName: "HomeDecor Emporium",
      industry: "Home & Living",
      growthPercentage: 195,
      timespan: "5 months",
      revenue: "₹1.2Cr to ₹3.5Cr",
      challenge: "Seasonal sales fluctuations",
      solution: "ICONA's year-round engagement strategy + smart automation",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=300&h=200&fit=crop&crop=center",
      color: "from-orange-500 to-red-600"
    },
    {
      companyName: "SportsFit Gear",
      industry: "Sports & Fitness",
      growthPercentage: 310,
      timespan: "7 months",
      revenue: "₹1.5Cr to ₹6.2Cr",
      challenge: "High competition and low margins",
      solution: "ICONA's value optimization + premium positioning tactics",
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=300&h=200&fit=crop&crop=center",
      color: "from-purple-500 to-violet-600"
    },
    {
      companyName: "BeautyBliss Cosmetics",
      industry: "Beauty & Personal Care",
      growthPercentage: 265,
      timespan: "6 months",
      revenue: "₹90L to ₹3.3Cr",
      challenge: "Building trust with online customers",
      solution: "ICONA's social proof campaigns + review optimization",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop&crop=center",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  // Transform backend data to match display format
  const transformedStories = successStories?.map(story => ({
    companyName: story.client_name,
    industry: story.industry || 'Business',
    challenge: story.challenge,
    solution: story.solution,
    revenue: story.results,
    image: story.image_url || 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop&crop=center',
    color: 'from-blue-500 to-indigo-600',
    growthPercentage: story.metrics?.growthPercentage || 250,
    timespan: story.metrics?.timespan || '6 months'
  })) || [];

  const displayStories = transformedStories.length > 0 ? transformedStories : defaultStories;
  
  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading success stories...</div>
        </div>
      </section>
    );
  }

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
            {successBadge?.value || "🏆 Success Stories That Inspire"}
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent">
            {successTitle?.value || "When ICONA Works Its Magic"}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Real brands, real growth, real results. See how ICONA's strategic techniques transformed these businesses 🚀✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {displayStories.map((story, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/5 backdrop-blur-lg overflow-hidden hover:bg-white/10">
              <div className="relative overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.companyName}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${story.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
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
                    {story.companyName}
                  </CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">
                      +{story.growthPercentage}%
                    </div>
                    <div className="text-xs text-gray-400 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {story.timespan}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-blue-300 font-medium">{story.industry}</div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-yellow-300 font-semibold text-sm mb-1">Revenue Growth</div>
                  <div className="text-white font-bold">{story.revenue}</div>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                    <span className="text-green-400 text-sm">Consistent upward trend</span>
                  </div>
                </div>

                <div>
                  <div className="text-red-300 text-sm font-medium mb-1">Challenge:</div>
                  <div className="text-gray-300 text-sm">{story.challenge}</div>
                </div>

                <div>
                  <div className="text-green-300 text-sm font-medium mb-1">ICONA's Solution:</div>
                  <div className="text-gray-300 text-sm">{story.solution}</div>
                </div>

                <div className="pt-2">
                  <Button variant="ghost" className="w-full text-yellow-300 hover:bg-yellow-500/10 hover:text-yellow-200 transition-all duration-300 group/btn">
                    <Target className="w-4 h-4 mr-2" />
                    See Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-3xl p-8 max-w-2xl mx-auto border border-yellow-500/30">
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">Ready to Be Our Next Success Story?</h3>
            <p className="text-gray-300 mb-6">
              Join the ranks of brands that ICONA has transformed. Your growth story starts with a single conversation.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group">
              <span className="flex items-center">
                🥷 Start My Success Story
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;

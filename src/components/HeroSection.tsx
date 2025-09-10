import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, Award, Building2 } from "lucide-react";
import { useSiteSetting } from "@/hooks/useSiteSettings";

const HeroSection = () => {
  const { data: heroTitle } = useSiteSetting('hero_title');
  const { data: heroSubtitle } = useSiteSetting('hero_subtitle');
  const { data: heroDescription } = useSiteSetting('hero_description');
  const { data: heroBadgeText } = useSiteSetting('hero_badge_text');
  const { data: heroPrimaryButtonText } = useSiteSetting('hero_primary_button_text');
  const { data: heroSecondaryButtonText } = useSiteSetting('hero_secondary_button_text');
  const { data: heroStats } = useSiteSetting('hero_stats');

  const defaultStats = [{
    number: "500+",
    label: "Brands Grown",
    icon: Users
  }, {
    number: "99%",
    label: "Success Rate",
    icon: Award
  }, {
    number: "$50M+",
    label: "Revenue Generated",
    icon: TrendingUp
  }, {
    number: "10+",
    label: "Years Experience",
    icon: Building2
  }];

  const stats = heroStats?.value || defaultStats;
  return <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white overflow-hidden pt-16">
      {/* Professional background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-white/10 to-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        
        <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-lg px-6 py-2 animate-pulse hover:animate-none transition-all duration-300 hover:scale-110">
          {heroBadgeText?.value || "✨ Professional Digital Growth Solutions ✨"}
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="inline-block animate-fade-in">
            {heroTitle?.value?.split(' ').slice(0, 2).join(' ') || "Welcome to"}
          </span>{" "}
          <span className="inline-block animate-fade-in delay-200">
            {heroTitle?.value?.split(' ').slice(2, 3).join(' ') || "ICONA"}
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 animate-gradient-x">
            {heroSubtitle?.value || "Digital Excellence"}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 animate-fade-in delay-300">
          {heroDescription?.value || "ICONA delivers comprehensive digital solutions that drive measurable growth for your business. From ecommerce optimization to cutting-edge digital marketing, we're your strategic partner for success."}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-500">
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all group relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              {heroPrimaryButtonText?.value || "Start Your Growth Journey"}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button variant="outline" size="lg" className="border-white px-8 py-4 text-lg hover:scale-105 transition-all duration-300 hover:shadow-xl text-slate-50 bg-[#ff8402] rounded-full">
            {heroSecondaryButtonText?.value || "View Our Portfolio"}
          </Button>
        </div>
        
        {/* Professional Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return <div key={index} className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <IconComponent className="h-8 w-8 mx-auto mb-2 text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default HeroSection;
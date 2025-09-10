import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle, Calendar } from "lucide-react";
import { useSiteSetting } from "@/hooks/useSiteSettings";

const CTASection = () => {
  const { data: ctaTitle } = useSiteSetting('cta_section_title');
  const { data: ctaDescription } = useSiteSetting('cta_section_description');
  const { data: ctaPrimaryButton } = useSiteSetting('cta_primary_button_text');
  const { data: ctaSecondaryButton } = useSiteSetting('cta_secondary_button_text');
  return <section id="contact" className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 4}s`
      }} />)}
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-6xl animate-bounce inline-block">🚀</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            {ctaTitle?.value || "Ready to Guarantee Your Growth?"}
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {ctaDescription?.value || "Join 500+ brands that have achieved explosive growth with our proven strategies."}
            <span className="block mt-2 text-lg">
              💯 <span className="font-semibold">100% Growth Guaranteed</span> or We Work for FREE!
            </span>
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold mb-2">Free Strategy Call</h3>
              <p className="text-gray-400 text-sm">30-min consultation to discuss your growth goals</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-lg font-semibold mb-2">WhatsApp Support</h3>
              <p className="text-gray-400 text-sm">Instant responses to all your queries</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10">
              <Phone className="h-12 w-12 mx-auto mb-4 text-orange-400" />
              <h3 className="text-lg font-semibold mb-2">Direct Phone Line</h3>
              <p className="text-gray-400 text-sm">Speak directly with our growth experts</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                {ctaPrimaryButton?.value || "📞 Get Free Strategy Call"}
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-200" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button variant="outline" size="lg" className="border-2 border-white hover:bg-white px-12 py-6 text-xl font-bold rounded-full hover:scale-105 transition-all duration-300 group relative overflow-hidden text-slate-800">
              <span className="flex items-center">
                {ctaSecondaryButton?.value || "📱 WhatsApp: +91 XXXXX XXXXX"}
                <MessageCircle className="ml-3 h-6 w-6 group-hover:animate-bounce" />
              </span>
            </Button>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
              <span className="text-green-400 font-semibold">✅ No Risk</span>
              <span className="w-1 h-1 bg-white/50 rounded-full"></span>
              <span className="text-blue-400 font-semibold">✅ No Upfront Fees</span>
              <span className="w-1 h-1 bg-white/50 rounded-full"></span>
              <span className="text-yellow-400 font-semibold">✅ 100% Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const MarketplaceSection = () => {
  const marketplaces = [
    { 
      name: "Amazon India", 
      logoUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=80&h=80&fit=crop&crop=center",
      color: "from-orange-400 to-orange-600" 
    },
    { 
      name: "Flipkart", 
      logoUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=80&h=80&fit=crop&crop=center",
      color: "from-blue-400 to-blue-600" 
    },
    { 
      name: "Myntra", 
      logoUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=80&h=80&fit=crop&crop=center",
      color: "from-pink-400 to-pink-600" 
    },
    { 
      name: "Swiggy Instamart", 
      logoUrl: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=80&h=80&fit=crop&crop=center",
      color: "from-yellow-400 to-orange-500" 
    },
    { 
      name: "Zepto", 
      logoUrl: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=80&h=80&fit=crop&crop=center",
      color: "from-purple-400 to-purple-600" 
    },
    { 
      name: "Noon.com", 
      logoUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=80&h=80&fit=crop&crop=center",
      color: "from-indigo-400 to-blue-600" 
    },
    { 
      name: "Walmart", 
      logoUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=80&h=80&fit=crop&crop=center",
      color: "from-blue-400 to-cyan-600" 
    },
    { 
      name: "Meesho", 
      logoUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=80&h=80&fit=crop&crop=center",
      color: "from-green-400 to-green-600" 
    },
    { 
      name: "Nykaa", 
      logoUrl: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=80&h=80&fit=crop&crop=center",
      color: "from-rose-400 to-pink-600" 
    },
    { 
      name: "BigBasket", 
      logoUrl: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=80&h=80&fit=crop&crop=center",
      color: "from-emerald-400 to-green-600" 
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-yellow-500/20 text-yellow-300 border-yellow-400 hover:scale-110 transition-all duration-300 text-lg px-6 py-3">
            🚀 ICONA's Marketplace Mastery
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Where ICONA Dominates Every Platform
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Watch ICONA execute strategic excellence across all major Indian and global marketplaces 🌐
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
          {marketplaces.map((marketplace, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:-translate-y-2 group cursor-pointer border border-white/20 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${marketplace.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
              
              <div className="relative z-10">
                <div className="mb-3 flex justify-center">
                  <img 
                    src={marketplace.logoUrl} 
                    alt={marketplace.name}
                    className="w-16 h-16 object-contain group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="text-lg font-semibold group-hover:text-yellow-300 transition-colors duration-300">
                  {marketplace.name}
                </div>
                
                {/* Hidden success indicator */}
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-center">
                    <Badge className="bg-green-500/20 text-green-300 border-green-400 text-xs">
                      ⚡ Performance Optimized
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">Ready for ICONA's Strategic Excellence?</h3>
            <p className="text-blue-200 mb-6">
              Let ICONA handle your marketplace presence with strategic precision while you focus on growing your business.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group">
              <span className="flex items-center">
                🚀 Unleash ICONA's Power
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;

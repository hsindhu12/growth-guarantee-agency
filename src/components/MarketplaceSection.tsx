
import React from 'react';
import { Badge } from "@/components/ui/badge";

const MarketplaceSection = () => {
  const marketplaces = [
    "Amazon India", "Flipkart", "Myntra", "Blinkit", "Zepto", 
    "Noon.com", "Walmart", "Meesho", "Nykaa", "BigBasket"
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-500/20 text-yellow-300 border-yellow-400">Marketplace Expertise</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We Dominate Every Platform
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Expert management and optimization across all major Indian and global marketplaces
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {marketplaces.map((marketplace, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all hover:scale-105">
              <div className="text-lg font-semibold">{marketplace}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;

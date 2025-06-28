
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield } from "lucide-react";
import Mascot from './Mascot';

const USPSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Mascot size="lg" />
          </div>
          <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200 text-lg px-6 py-3">
            Why Choose Us?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Our Unique Promise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 hover:shadow-2xl transition-all">
              <Zap className="h-12 w-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">100% Growth Guarantee</h3>
              <p className="text-green-100">
                We're so confident in our strategies that we guarantee results. If we don't deliver the promised growth, we work for free until we do.
              </p>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0 hover:shadow-2xl transition-all">
              <Shield className="h-12 w-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">Zero Upfront Fees</h3>
              <p className="text-blue-100">
                Start your growth journey without any financial risk. Our 0 fees model means you only pay based on the results we deliver.
              </p>
            </Card>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Stress-Free Growth Model</h3>
            <p className="text-lg text-gray-600 mb-6">
              Focus on your business while we handle the growth. Our performance-based model aligns our success with yours.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full shadow-lg">
              Start Your Risk-Free Growth Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;


import React from 'react';
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import MarketplaceSection from "../components/MarketplaceSection";
import USPSection from "../components/USPSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <MarketplaceSection />
      <USPSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

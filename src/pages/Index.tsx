
import React from 'react';
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import MarketplaceSection from "../components/MarketplaceSection";
import SuccessStoriesSection from "../components/SuccessStoriesSection";
import BlogSection from "../components/BlogSection";
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
      <SuccessStoriesSection />
      <BlogSection />
      <USPSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

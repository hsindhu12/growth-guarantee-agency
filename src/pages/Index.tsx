
import { Button } from "@/components/ui/button";
import { Card, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star, Zap, TrendingUp, ShoppingCart, Camera, Video, Users, Globe, Rocket, Shield } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Ecommerce Marketing",
      description: "Complete digital marketing strategies tailored for ecommerce success",
      features: ["PPC Campaigns", "Social Media Marketing", "Email Marketing", "SEO Optimization"]
    },
    {
      icon: TrendingUp,
      title: "Ecommerce Sales Growth",
      description: "Data-driven strategies to boost your online sales and conversion rates",
      features: ["Conversion Optimization", "Sales Funnel Design", "A/B Testing", "Performance Analytics"]
    },
    {
      icon: Camera,
      title: "Brand Product Shoot",
      description: "Professional product photography that drives conversions",
      features: ["Studio Photography", "Lifestyle Shots", "360° Product Views", "Image Editing"]
    },
    {
      icon: Video,
      title: "Product Video Production",
      description: "Engaging video content that showcases your products effectively",
      features: ["Product Demos", "Unboxing Videos", "Brand Stories", "Social Media Videos"]
    },
    {
      icon: Globe,
      title: "Marketplace Management",
      description: "Expert management across all major ecommerce platforms",
      features: ["Amazon India", "Flipkart", "Myntra", "Blinkit", "Zepto", "Noon.com", "Walmart"]
    },
    {
      icon: Rocket,
      title: "Brand Growth & Launch",
      description: "End-to-end brand building and product launch strategies",
      features: ["Brand Strategy", "Product Launch", "Market Research", "Competitive Analysis"]
    },
    {
      icon: Users,
      title: "Influencer Management",
      description: "Strategic influencer partnerships that amplify your brand reach",
      features: ["Influencer Sourcing", "Campaign Management", "Content Strategy", "Performance Tracking"]
    },
    {
      icon: Shield,
      title: "Brand Partnerships",
      description: "Strategic collaborations that expand your market presence",
      features: ["Partnership Strategy", "Deal Negotiation", "Co-marketing", "Joint Ventures"]
    }
  ];

  const marketplaces = [
    "Amazon India", "Flipkart", "Myntra", "Blinkit", "Zepto", 
    "Noon.com", "Walmart", "Meesho", "Nykaa", "BigBasket"
  ];

  const stats = [
    { number: "500+", label: "Brands Grown" },
    { number: "100%", label: "Growth Guarantee" },
    { number: "₹50Cr+", label: "Revenue Generated" },
    { number: "0₹", label: "Upfront Fees" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-400 hover:bg-green-500/30 text-lg px-6 py-2">
            100% Growth Guarantee or Work for FREE
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Ecommerce Growth
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Specialists
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            We guarantee your brand's growth across all major marketplaces with our proven strategies. 
            <span className="font-semibold text-yellow-300"> Zero upfront fees, maximum results.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all">
              Get Free Growth Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-full">
              View Our Success Stories
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <ShoppingCart className="h-12 w-12 text-white animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <TrendingUp className="h-16 w-16 text-white animate-pulse" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Complete Ecommerce Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From product photography to marketplace management, we handle every aspect of your ecommerce success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2 group">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Expertise */}
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

      {/* USP Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Guarantee Your Growth?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of brands that have achieved explosive growth with our proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-4 text-lg rounded-full shadow-xl">
              Get Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg rounded-full">
              Contact: +91 XXXXX XXXXX
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                EcomGrowth Pro
              </h3>
              <p className="text-gray-400">
                Your trusted partner for guaranteed ecommerce growth across all major platforms.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Ecommerce Marketing</li>
                <li>Marketplace Management</li>
                <li>Brand Growth</li>
                <li>Influencer Management</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Platforms</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Amazon India</li>
                <li>Flipkart</li>
                <li>Myntra</li>
                <li>Blinkit & More</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: hello@ecomgrowthpro.com</li>
                <li>Phone: +91 XXXXX XXXXX</li>
                <li>100% Growth Guaranteed</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EcomGrowth Pro. All rights reserved. Growth guaranteed or work for free.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

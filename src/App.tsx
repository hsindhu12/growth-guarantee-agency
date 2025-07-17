
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import NotFound from "./pages/NotFound";
import SuccessStories from "./pages/SuccessStories";

// Service pages
import EcommerceMarketing from "./pages/EcommerceMarketing";
import MarketplaceManagement from "./pages/MarketplaceManagement";
import SEOServices from "./pages/SEOServices";
import DigitalMarketing from "./pages/DigitalMarketing";
import ProductPhotography from "./pages/ProductPhotography";
import VideoProduction from "./pages/VideoProduction";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import BrandDevelopment from "./pages/BrandDevelopment";
import AnalyticsReporting from "./pages/AnalyticsReporting";
import ProductLaunch from "./pages/ProductLaunch";
import Advertising from "./pages/Advertising";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/career" element={<Career />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            
            {/* Service Routes */}
            <Route path="/services/ecommerce-marketing" element={<EcommerceMarketing />} />
            <Route path="/services/marketplace-management" element={<MarketplaceManagement />} />
            <Route path="/services/seo-services" element={<SEOServices />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/product-photography" element={<ProductPhotography />} />
            <Route path="/services/video-production" element={<VideoProduction />} />
            <Route path="/services/website-development" element={<WebsiteDevelopment />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/brand-development" element={<BrandDevelopment />} />
            <Route path="/services/analytics-reporting" element={<AnalyticsReporting />} />
            <Route path="/services/product-launch" element={<ProductLaunch />} />
            <Route path="/services/advertising" element={<Advertising />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;


import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ChatbotWidget from '@/components/ChatbotWidget';
import TestimonialsSection from '@/components/TestimonialsSection';
import PortfolioSection from '@/components/PortfolioSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ChatbotWidget />
      <TestimonialsSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default Index;

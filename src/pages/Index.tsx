import React from 'react';
import HeroSection from '@/components/Home/HeroSection';
import AIModulesGrid from '@/components/Home/AIModulesGrid';
import DashboardPreview from '@/components/Home/DashboardPreview';
import InvestorSection from '@/components/Home/InvestorSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-home">
      <HeroSection />
      <AIModulesGrid />
      <DashboardPreview />
      <InvestorSection />
    </div>
  );
};

export default Index;

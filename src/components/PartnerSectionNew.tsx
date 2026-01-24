import React, { useRef } from 'react';
import { PartnerHero } from './PartnerHero';
import { PainAgitation } from './PainAgitation';
import { ROICalculator } from './ROICalculator';
import { HowItWorksPartner } from './HowItWorksPartner';
import { TrustAndLocal } from './TrustAndLocal';
import { FinalCTA } from './FinalCTA';
import { Language } from '../translations/translations';

interface PartnerSectionNewProps {
  language: Language;
}

export function PartnerSectionNew({ language }: PartnerSectionNewProps) {
  const calculatorRef = useRef<HTMLDivElement>(null);

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Section - Financial Hook */}
      <PartnerHero language={language} onCalculatorClick={scrollToCalculator} />
      
      {/* 2. Pain Agitation - Perishable Inventory */}
      <PainAgitation language={language} />
      
      {/* 3. ROI Calculator - The Interactive Proof */}
      <div ref={calculatorRef}>
        <ROICalculator language={language} />
      </div>
      
      {/* 4. How It Works - Control Without Chaos */}
      <HowItWorksPartner language={language} />
      
      {/* 5. Trust & Localization - Built for Vietnam */}
      <TrustAndLocal language={language} />
      
      {/* 6. Final CTA - Zero Upfront Cost */}
      <FinalCTA language={language} />
    </div>
  );
}

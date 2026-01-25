import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroDiner } from './components/HeroDiner';
import { SocialProof } from './components/SocialProof';
import { HowItWorksDiner } from './components/HowItWorksDiner';
import { DownloadCTA } from './components/DownloadCTA';
import { TourMerchFooter } from './components/TourMerchFooter';
import { PartnerSectionNew } from './components/PartnerSectionNew';
import { Language } from './translations/translations';
import { motion, useScroll, useTransform } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'diners' | 'partners'>('diners');
  const [language, setLanguage] = useState<Language>('en');
  const [scrollY, setScrollY] = useState(0);
  
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white scroll-container">
      <Header 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
        language={language}
        onLanguageChange={setLanguage}
      />
      
      {currentPage === 'diners' ? (
        <>
          <div className="scroll-section">
            <HeroDiner language={language} />
          </div>
          <div className="scroll-section">
            <SocialProof language={language} />
          </div>
          <div className="scroll-section">
            <HowItWorksDiner language={language} />
          </div>
          <div className="scroll-section">
            <DownloadCTA language={language} />
          </div>
          <div className="scroll-section">
            <TourMerchFooter language={language} />
          </div>
        </>
      ) : (
        <>
          <div className="scroll-section">
            <PartnerSectionNew language={language} />
          </div>
          <div className="scroll-section">
            <TourMerchFooter language={language} />
          </div>
        </>
      )}
    </div>
  );
}
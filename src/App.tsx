import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroDiner } from './components/HeroDiner';
import { SocialProof } from './components/SocialProof';
import { HowItWorksDiner } from './components/HowItWorksDiner';
import { FrictionlessPayment } from './components/FrictionlessPayment';
import { DownloadCTA } from './components/DownloadCTA';
import { TourMerchFooter } from './components/TourMerchFooter';
import { PartnerSectionNew } from './components/PartnerSectionNew';
import { Language } from './translations/translations';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'diners' | 'partners'>('diners');
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
        language={language}
        onLanguageChange={setLanguage}
      />
      
      {currentPage === 'diners' ? (
        <>
          <HeroDiner language={language} />
          <SocialProof language={language} />
          <HowItWorksDiner language={language} />
          <FrictionlessPayment language={language} />
          <DownloadCTA language={language} />
          <TourMerchFooter language={language} />
        </>
      ) : (
        <>
          <PartnerSectionNew language={language} />
          <TourMerchFooter language={language} />
        </>
      )}
    </div>
  );
}
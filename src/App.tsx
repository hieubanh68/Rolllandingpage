import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroNew } from './components/HeroNew';
import { DealTicker } from './components/DealTicker';
import { WinWinBlueprint } from './components/WinWinBlueprint';
import { NoAwkwardness } from './components/NoAwkwardness';
import { GroovyBitesNew } from './components/GroovyBitesNew';
import { TourMerchFooter } from './components/TourMerchFooter';
import { FloatingMascot } from './components/FloatingMascot';
import { PartnerSection } from './components/PartnerSection';
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
          <HeroNew language={language} />
          <DealTicker language={language} />
          <WinWinBlueprint language={language} />
          <FloatingMascot />
          <NoAwkwardness language={language} />
          <FloatingMascot />
          <GroovyBitesNew language={language} />
          <TourMerchFooter language={language} />
        </>
      ) : (
        <>
          <PartnerSection language={language} />
          <TourMerchFooter language={language} />
        </>
      )}
    </div>
  );
}
import React, { useState } from 'react';
import rollLogo from 'figma:asset/bf384b1e97dca58705189f22b0597293c555bdd9.png';
import { Globe, ChevronDown } from 'lucide-react';
import { Language, translations } from '../translations/translations';

interface HeaderProps {
  currentPage: 'diners' | 'partners';
  onPageChange: (page: 'diners' | 'partners') => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Header({ currentPage, onPageChange, language, onLanguageChange }: HeaderProps) {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const t = translations[language].header;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo - Clean, No Background */}
        <button 
          onClick={() => onPageChange('diners')}
          className="hover:scale-105 transition-transform"
        >
          <img 
            src={rollLogo} 
            alt="ROLL" 
            className="h-12 w-auto" 
          />
        </button>

        {/* Navigation - Rounded & Colorful */}
        <nav className="hidden md:flex items-center gap-6">
          {currentPage === 'diners' ? (
            <>
              <a 
                href="#how-it-works" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('how-it-works');
                }}
                className="text-sm font-black tracking-wide hover:text-[#EF8E4C] transition-colors px-4 py-2 rounded-full hover:bg-[#FFFEF6]"
                style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
              >
                {t.howItWorks}
              </a>
              <a 
                href="#locations" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('locations');
                }}
                className="text-sm font-black tracking-wide hover:text-[#EF8E4C] transition-colors px-4 py-2 rounded-full hover:bg-[#FFFEF6]"
                style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
              >
                {t.locations}
              </a>
              <button 
                onClick={() => onPageChange('partners')}
                className="text-sm font-black tracking-wide hover:text-[#EF8E4C] transition-colors px-4 py-2 rounded-full hover:bg-[#FFFEF6]"
                style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
              >
                {t.forPartners}
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => onPageChange('diners')}
                className="bg-gradient-to-r from-[#EF8E4C] to-[#FF6B35] text-white px-6 py-3 text-sm font-black rounded-full hover:shadow-lg hover:scale-105 transition-all"
                style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
              >
                {t.forDiners}
              </button>
            </>
          )}

          {/* Language Selector - Rounded Style */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#EF8E4C] hover:bg-[#FFFEF6] transition-all"
              style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
            >
              <Globe className="w-5 h-5 text-[#EF8E4C]" strokeWidth={2.5} />
              <span className="text-sm font-black text-[#EF8E4C]">{language.toUpperCase()}</span>
              <ChevronDown className="w-4 h-4 text-[#EF8E4C]" strokeWidth={2.5} />
            </button>

            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-2xl shadow-2xl border-2 border-[#FFFEF6] overflow-hidden">
                <button
                  onClick={() => {
                    onLanguageChange('en');
                    setIsLangDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left text-sm font-black transition-colors ${
                    language === 'en' ? 'bg-gradient-to-r from-[#EF8E4C] to-[#FF6B35] text-white' : 'hover:bg-[#FFFEF6] text-[#2D2D2D]'
                  }`}
                  style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                >
                  🇺🇸 ENGLISH
                </button>
                <button
                  onClick={() => {
                    onLanguageChange('vi');
                    setIsLangDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left text-sm font-black transition-colors border-t-2 border-[#FFFEF6] ${
                    language === 'vi' ? 'bg-gradient-to-r from-[#EF8E4C] to-[#FF6B35] text-white' : 'hover:bg-[#FFFEF6] text-[#2D2D2D]'
                  }`}
                  style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                >
                  🇻🇳 TIẾNG VIỆT
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            className="flex items-center gap-1 px-3 py-2 rounded-full border-2 border-[#EF8E4C]"
            style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
          >
            <Globe className="w-5 h-5 text-[#EF8E4C]" strokeWidth={2.5} />
            <span className="text-xs font-black text-[#EF8E4C]">{language.toUpperCase()}</span>
          </button>
          
          {isLangDropdownOpen && (
            <div className="absolute right-6 top-20 w-40 bg-white rounded-2xl shadow-2xl border-2 border-[#FFFEF6] overflow-hidden">
              <button
                onClick={() => {
                  onLanguageChange('en');
                  setIsLangDropdownOpen(false);
                }}
                className={`w-full px-4 py-3 text-left text-sm font-black transition-colors ${
                  language === 'en' ? 'bg-gradient-to-r from-[#EF8E4C] to-[#FF6B35] text-white' : 'hover:bg-[#FFFEF6]'
                }`}
                style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
              >
                🇺🇸 ENGLISH
              </button>
              <button
                onClick={() => {
                  onLanguageChange('vi');
                  setIsLangDropdownOpen(false);
                }}
                className={`w-full px-4 py-3 text-left text-sm font-black transition-colors border-t-2 border-[#FFFEF6] ${
                  language === 'vi' ? 'bg-gradient-to-r from-[#EF8E4C] to-[#FF6B35] text-white' : 'hover:bg-[#FFFEF6]'
                }`}
                style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
              >
                🇻🇳 TIẾNG VIỆT
              </button>
            </div>
          )}

          <button 
            className="text-sm font-black px-4 py-2 rounded-full bg-[#FFFEF6]"
            style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
            onClick={() => onPageChange(currentPage === 'diners' ? 'partners' : 'diners')}
          >
            {currentPage === 'diners' ? t.forPartners.replace('FOR ', '').replace('CHO ', '') : t.forDiners.replace('FOR ', '').replace('CHO ', '')}
          </button>
        </div>
      </div>
    </header>
  );
}
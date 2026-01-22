import React from 'react';
import phoneIllustration from 'figma:asset/fc9b36975be4619db62decd3e920b587a41fb6cd.png';
import { Apple } from 'lucide-react';
import { Language, translations } from '../translations/translations';

interface HeroNewProps {
  language: Language;
}

export function HeroNew({ language }: HeroNewProps) {
  const t = translations[language].hero;

  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      {/* Clean Vertical Split Background */}
      <div className="absolute inset-0 flex">
        {/* Left Side - Pure White */}
        <div className="w-1/2 bg-white"></div>
        {/* Right Side - Cream */}
        <div className="w-1/2 bg-[#F5F1E8]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center min-h-[600px]">
          {/* LEFT SIDE - All Text & CTAs on White Background */}
          <div className="space-y-8 max-w-xl">
            {/* Eyebrow Text - Small Tagline */}
            <div className="inline-block">
              <div 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FCE482]/30 to-[#FBDA60]/30 px-4 py-2 rounded-full border border-[#EF8E4C]/20"
              >
                <span className="text-2xl">👨‍🍳</span>
                <span 
                  className="text-sm font-bold text-[#2D2D2D]/80"
                  style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                >
                  {language === 'en' ? 'Discover Deals Near You' : 'Khám Phá Ưu Đãi Xung Quanh'}
                </span>
              </div>
            </div>

            {/* Main Heading - Orange Gradient */}
            <div>
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-left"
                style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF8E4C] to-[#FF8C5A]">
                  {t.mainHeading1}
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF8E4C] to-[#FF8C5A]">
                  {t.mainHeading2}
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF8E4C] to-[#FF8C5A]">
                  {t.mainHeading3}
                </span>
              </h1>
              <p 
                className="text-lg md:text-xl leading-relaxed text-[#2D2D2D] opacity-70 max-w-lg"
                style={{ 
                  fontFamily: 'Bahnschrift, Arial, sans-serif',
                  lineHeight: '1.7'
                }}
              >
                {t.description}
              </p>
            </div>

            {/* Official Download Badges - Side by Side */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* App Store Badge - Official Style */}
              <a 
                href="#download"
                className="block hover:opacity-80 transition-opacity group"
              >
                <div className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                  <Apple className="w-8 h-8" fill="white" strokeWidth={0} />
                  <div className="text-left">
                    <div className="text-[9px] leading-tight" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Download on the' : 'Tải xuống trên'}
                    </div>
                    <div className="text-xl font-semibold -mt-0.5" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      App Store
                    </div>
                  </div>
                </div>
              </a>

              {/* Google Play Badge - Official Style */}
              <a 
                href="#download"
                className="block hover:opacity-80 transition-opacity group"
              >
                <div className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] leading-tight" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'GET IT ON' : 'TẢI VỀ TẠI'}
                    </div>
                    <div className="text-xl font-semibold -mt-0.5" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      Google Play
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Trust Bar - Clean Horizontal Format with Better Design */}
            <div className="pt-6 border-t border-[#2D2D2D]/10">
              <div className="flex flex-wrap items-center gap-6 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#EF8E4C] to-[#FF8C5A] flex items-center justify-center text-white text-lg">
                    👥
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>50K+</span>
                    <span className="text-[#2D2D2D] opacity-60 text-xs leading-tight" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Active Users' : 'Người dùng'}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FCE482] to-[#FBDA60] flex items-center justify-center text-white text-lg">
                    🍽️
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>200+</span>
                    <span className="text-[#2D2D2D] opacity-60 text-xs leading-tight" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Restaurants' : 'Nhà hàng'}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B8D5A0] to-[#738C6B] flex items-center justify-center text-white text-lg">
                    💰
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>50%</span>
                    <span className="text-[#2D2D2D] opacity-60 text-xs leading-tight" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Avg. Savings' : 'TB Giảm giá'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Phone Illustration with Floating Animation */}
          <div className="relative flex items-center justify-center">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Subtle gradient blob behind phone */}
              <div className="absolute w-96 h-96 bg-gradient-to-br from-[#FCE482]/20 via-[#EF8E4C]/10 to-transparent rounded-full blur-3xl"></div>
            </div>

            {/* Phone Illustration */}
            <div 
              className="relative z-10"
              style={{
                animation: 'gentleFloat 6s ease-in-out infinite'
              }}
            >
              <img 
                src={phoneIllustration}
                alt="ROLL App"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto drop-shadow-2xl"
              />
            </div>

            {/* Floating Deal Badges for Extra Visual Interest */}
            <div 
              className="absolute top-12 right-8 bg-white px-4 py-2 rounded-2xl shadow-xl border-2 border-[#EF8E4C] z-20"
              style={{
                animation: 'floatBadge 4s ease-in-out infinite'
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                <div>
                  <div className="text-xs font-bold text-[#2D2D2D]/60" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Live Now' : 'Đang Diễn Ra'}
                  </div>
                  <div className="text-sm font-black text-[#EF8E4C]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? '50+ Deals' : '50+ Ưu Đãi'}
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="absolute bottom-16 left-8 bg-gradient-to-r from-[#FCE482] to-[#FBDA60] px-4 py-2 rounded-2xl shadow-xl z-20"
              style={{
                animation: 'floatBadge 5s ease-in-out infinite 1s'
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="text-xs font-bold text-[#2D2D2D]/60" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Save up to' : 'Tiết kiệm đến'}
                  </div>
                  <div className="text-lg font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    200K VNĐ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes gentleFloat {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-20px); 
          }
        }

        @keyframes floatBadge {
          0%, 100% { 
            transform: translateY(0px) rotate(-2deg); 
          }
          50% { 
            transform: translateY(-15px) rotate(2deg); 
          }
        }
      `}</style>
    </div>
  );
}
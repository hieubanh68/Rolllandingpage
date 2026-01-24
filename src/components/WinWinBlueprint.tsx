import React from 'react';
import { UtensilsCrossed, Users, DollarSign, Star } from 'lucide-react';
import { Language, translations } from '../translations/translations';

interface WinWinBlueprintProps {
  language: Language;
}

export function WinWinBlueprint({ language }: WinWinBlueprintProps) {
  const t = translations[language].winWin;

  const benefits = [
    {
      icon: UtensilsCrossed,
      emoji: '🍽️',
      title: t.benefit1Title,
      description: t.benefit1Desc,
      color: 'from-[#EF8E4C] to-[#FF6B35]'
    },
    {
      icon: Users,
      emoji: '💰',
      title: t.benefit2Title,
      description: t.benefit2Desc,
      color: 'from-[#FBDA60] to-[#F9DB5F]'
    },
    {
      icon: DollarSign,
      emoji: '🎉',
      title: t.benefit3Title,
      description: t.benefit3Desc,
      color: 'from-[#B8D5A0] to-[#738C6B]'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-[#FFFEF6] py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#FCE482] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#EF8E4C] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#B8D5A0] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title with Vietnamese-style decoration */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="text-3xl">💡</div>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#EF8E4C] via-[#FF8C5A] to-[#EF8E4C]"
              style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
            >
              {t.title}
            </h2>
            <div className="text-3xl">💡</div>
          </div>
          <p 
            className="text-xl md:text-2xl font-bold text-[#2D2D2D]/70 mt-4"
            style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
          >
            {language === 'en' ? 'Win-win economics' : 'Kinh tế đôi bên thắng'}
          </p>
        </div>

        {/* Benefits Grid - Enhanced Card Style */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-[3px] border-gray-100 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gradient-to-br from-[#FCE482] to-[#FBDA60] flex items-center justify-center">
                  <span className="text-lg font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {index + 1}
                  </span>
                </div>

                {/* Large Emoji Icon */}
                <div className="relative z-10 mb-6">
                  <div className="text-6xl md:text-7xl group-hover:scale-110 transition-transform duration-300">
                    {benefit.emoji}
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="relative z-10 text-2xl md:text-3xl font-black mb-4 text-[#2D2D2D] group-hover:text-[#EF8E4C] transition-colors"
                  style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                >
                  {benefit.title}
                </h3>

                {/* Description */}
                <p 
                  className="relative z-10 text-base md:text-lg leading-relaxed text-[#2D2D2D]/80"
                  style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                >
                  {benefit.description}
                </p>

                {/* Decorative corner element with animation */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                  <div className="text-2xl">✨</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom callout - Enhanced Vietnamese style */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-block relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FBDA60] to-[#F9DB5F] blur-xl opacity-50"></div>
            
            <div className="relative bg-gradient-to-r from-[#F9DB5F] to-[#FBDA60] text-[#2D2D2D] px-10 md:px-14 py-6 md:py-7 rounded-full shadow-2xl border-[3px] border-[#2D2D2D] hover:scale-105 transition-transform duration-300">
              <p className="text-lg md:text-xl font-black flex items-center gap-3" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                <span className="text-2xl">✨</span>
                <span>{language === 'en' ? 'Simple. Smart. Savings.' : 'Đơn Giản. Thông Minh. Tiết Kiệm.'}</span>
                <span className="text-2xl">✨</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
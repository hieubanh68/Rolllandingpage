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
      title: t.benefit1Title,
      description: t.benefit1Desc,
      color: 'from-[#EF8E4C] to-[#FF6B35]'
    },
    {
      icon: Users,
      title: t.benefit2Title,
      description: t.benefit2Desc,
      color: 'from-[#FBDA60] to-[#F9DB5F]'
    },
    {
      icon: DollarSign,
      title: t.benefit3Title,
      description: t.benefit3Desc,
      color: 'from-[#B8D5A0] to-[#738C6B]'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-[#FFFEF6] py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#FCE482] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#EF8E4C] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title with Vietnamese-style decoration */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Star className="w-6 h-6 text-[#EF8E4C]" fill="#EF8E4C" />
            <h2 
              className="text-4xl md:text-5xl font-black text-[#2D2D2D]"
              style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
            >
              {t.title}
            </h2>
            <Star className="w-6 h-6 text-[#EF8E4C]" fill="#EF8E4C" />
          </div>
        </div>

        {/* Benefits Grid - Card Style */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100"
              >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>

                {/* Title */}
                <h3 
                  className="text-2xl font-black mb-4 text-[#2D2D2D]"
                  style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                >
                  {benefit.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-base leading-relaxed opacity-75 text-[#2D2D2D]"
                  style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                >
                  {benefit.description}
                </p>

                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <div className="w-8 h-8 border-t-4 border-r-4 border-[#EF8E4C] rounded-tr-2xl"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom callout - Vietnamese style */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#F9DB5F] to-[#FBDA60] text-[#2D2D2D] px-10 py-5 rounded-full shadow-xl border-2 border-[#EF8E4C]/20 hover:scale-105 transition-transform duration-300">
            <p className="text-lg font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? '✨ Simple. Smart. Savings.' : '✨ Đơn Giản. Thông Minh. Tiết Kiệm.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
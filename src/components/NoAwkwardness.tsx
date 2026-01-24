import React from 'react';
import { X, Check } from 'lucide-react';
import chefMascot from 'figma:asset/368fb2dcac16a67e6b6b930208e59f27e7774d75.png';
import { Language, translations } from '../translations/translations';

interface NoAwkwardnessProps {
  language: Language;
}

export function NoAwkwardness({ language }: NoAwkwardnessProps) {
  const t = translations[language].noAwkward;

  const steps = [
    {
      emoji: '🔍',
      title: t.step1Title,
      desc: t.step1Desc,
      color: 'from-[#EF8E4C] to-[#FF8C5A]'
    },
    {
      emoji: '📱',
      title: t.step2Title,
      desc: t.step2Desc,
      color: 'from-[#FCE482] to-[#FBDA60]'
    },
    {
      emoji: '✅',
      title: t.step3Title,
      desc: t.step3Desc,
      color: 'from-[#B8D5A0] to-[#738C6B]'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#FFFEF6] to-white py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#FCE482] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#EF8E4C] opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="text-3xl">🚫</div>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#EF8E4C] via-[#FF8C5A] to-[#EF8E4C]"
              style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
            >
              {t.title}
            </h2>
            <div className="text-3xl">🚫</div>
          </div>
          <p 
            className="text-xl md:text-2xl font-bold text-[#2D2D2D]/70 mt-4"
            style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
          >
            {language === 'en' ? '3 steps. Done.' : '3 bước. Xong.'}
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#EF8E4C] via-[#FCE482] to-[#B8D5A0] opacity-20"></div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-[3px] border-gray-100 group">
                  {/* Step Number */}
                  <div className={`absolute -top-5 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl border-4 border-white z-10`}>
                    <span className="text-2xl font-black text-white" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {index + 1}
                    </span>
                  </div>

                  {/* Large Emoji */}
                  <div className="text-center mt-8 mb-6">
                    <div className="text-7xl md:text-8xl group-hover:scale-110 transition-transform duration-300">
                      {step.emoji}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-2xl md:text-3xl font-black text-center mb-4 text-[#2D2D2D] group-hover:text-[#EF8E4C] transition-colors"
                    style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-base md:text-lg text-center leading-relaxed text-[#2D2D2D]/80"
                    style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                  >
                    {step.desc}
                  </p>

                  {/* Decorative Arrow */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 text-4xl text-[#FCE482] opacity-50 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-[#EF8E4C] to-[#FF6B35] text-white px-10 md:px-14 py-6 md:py-7 rounded-full shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300">
            <p className="text-lg md:text-xl font-black flex items-center gap-3" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              <span className="text-2xl">👌</span>
              <span>{language === 'en' ? 'Easy. Seamless. Smart.' : 'Dễ. Mượt. Thông Minh.'}</span>
              <span className="text-2xl">👌</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
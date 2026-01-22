import React from 'react';
import { X, Check } from 'lucide-react';
import chefMascot from 'figma:asset/368fb2dcac16a67e6b6b930208e59f27e7774d75.png';
import { Language, translations } from '../translations/translations';

interface NoAwkwardnessProps {
  language: Language;
}

export function NoAwkwardness({ language }: NoAwkwardnessProps) {
  const t = translations[language].noAwkward;

  return (
    <section className="bg-gradient-to-b from-[#FFFEF6] to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - The Pain */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-gray-100 flex flex-col items-center justify-center relative">
            <div className="max-w-md text-center">
              {/* Simple Doodle/Sketch */}
              <div className="mb-8">
                <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto">
                  {/* Person holding coupon - simple stick figure style */}
                  <circle cx="100" cy="50" r="25" fill="none" stroke="black" strokeWidth="3" />
                  <line x1="100" y1="75" x2="100" y2="130" stroke="black" strokeWidth="3" />
                  <line x1="100" y1="90" x2="70" y2="110" stroke="black" strokeWidth="3" />
                  <line x1="100" y1="90" x2="130" y2="110" stroke="black" strokeWidth="3" />
                  <line x1="100" y1="130" x2="80" y2="170" stroke="black" strokeWidth="3" />
                  <line x1="100" y1="130" x2="120" y2="170" stroke="black" strokeWidth="3" />
                  
                  {/* Nervous sweat drops */}
                  <circle cx="85" cy="55" r="3" fill="black" />
                  <circle cx="82" cy="60" r="3" fill="black" />
                  
                  {/* Coupon in hand */}
                  <rect x="125" y="95" width="40" height="25" fill="#FCE482" stroke="black" strokeWidth="2" />
                  <line x1="130" y1="102" x2="160" y2="102" stroke="black" strokeWidth="1" />
                  <line x1="130" y1="107" x2="155" y2="107" stroke="black" strokeWidth="1" />
                  <line x1="130" y1="112" x2="150" y2="112" stroke="black" strokeWidth="1" />
                </svg>
              </div>

              {/* Text */}
              <div className="relative">
                <h3 
                  className="text-3xl md:text-4xl font-black mb-4 text-[#2D2D2D]"
                  style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                >
                  {language === 'en' ? 'The Old Way:' : 'Cách Cũ:'}
                </h3>
                <p className="text-xl md:text-2xl text-[#2D2D2D]/80" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Awkwardly asking for a discount.' : 'Ngượng ngùng xin giảm giá.'}
                </p>

                {/* Big Red X */}
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-xl">
                  <X className="w-14 h-14 text-white" strokeWidth={4} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - The Solution */}
          <div className="bg-gradient-to-br from-[#F9DB5F] to-[#FBDA60] rounded-3xl shadow-xl p-8 md:p-12 border-2 border-[#EF8E4C]/20 flex flex-col items-center justify-center relative">
            <div className="max-w-md">
              {/* Phone with QR Code */}
              <div className="mb-8 relative">
                <img 
                  src="https://images.unsplash.com/photo-1728896529940-878b91e9f41d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwaG9sZGluZyUyMHBob25lJTIwcXIlMjBjb2RlJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NjkwODYzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hand scanning QR code"
                  className="w-full max-w-sm mx-auto rounded-2xl border-4 border-white shadow-2xl"
                />

                {/* Success Notification Bubble */}
                <div className="absolute -top-4 -right-4 bg-[#4ADE80] border-4 border-white px-6 py-3 rounded-full shadow-2xl animate-bounce">
                  <div className="flex items-center gap-2">
                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                    <span className="font-black text-lg text-white" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      -50%!
                    </span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="text-center">
                <h3 
                  className="text-3xl md:text-4xl font-black mb-4 text-[#2D2D2D]"
                  style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                >
                  {language === 'en' ? 'The ROLL Way:' : 'Cách ROLL:'}
                </h3>
                <p className="text-xl md:text-2xl text-[#2D2D2D]/90 font-bold" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Scan. Pay. Vanish.' : 'Quét. Trả. Xong.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
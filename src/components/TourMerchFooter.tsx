import React from 'react';
import { MapPin } from 'lucide-react';
import { Language, translations } from '../translations/translations';

interface TourMerchFooterProps {
  language: Language;
}

export function TourMerchFooter({ language }: TourMerchFooterProps) {
  const t = translations[language].footer;

  const districts = [
    { name: "DISTRICT 1", emoji: "🍜", color: "from-[#EF8E4C] to-[#FF6B35]" },
    { name: "THAO DIEN", emoji: "🍕", color: "from-[#FCE482] to-[#FBDA60]" },
    { name: "BINH THANH", emoji: "🍔", color: "from-[#B8D5A0] to-[#738C6B]" },
    { name: "DISTRICT 3", emoji: "🍣", color: "from-[#EF8E4C] to-[#FF8C5A]" },
    { name: "PHU NHUAN", emoji: "🌮", color: "from-[#F9DB5F] to-[#F2DA75]" },
    { name: "BA DINH", emoji: "🍲", color: "from-[#EF8E4C] to-[#FF6B35]" },
    { name: "HOAN KIEM", emoji: "🥘", color: "from-[#FCE482] to-[#FFD93D]" },
    { name: "TAY HO", emoji: "🍱", color: "from-[#B8D5A0] to-[#738C6B]" }
  ];

  const districtsVi = [
    { name: "QUẬN 1", emoji: "🍜", color: "from-[#EF8E4C] to-[#FF6B35]" },
    { name: "THẢO ĐIỀN", emoji: "🍕", color: "from-[#FCE482] to-[#FBDA60]" },
    { name: "BÌNH THẠNH", emoji: "🍔", color: "from-[#B8D5A0] to-[#738C6B]" },
    { name: "QUẬN 3", emoji: "🍣", color: "from-[#EF8E4C] to-[#FF8C5A]" },
    { name: "PHÚ NHUẬN", emoji: "🌮", color: "from-[#F9DB5F] to-[#F2DA75]" },
    { name: "BA ĐÌNH", emoji: "🍲", color: "from-[#EF8E4C] to-[#FF6B35]" },
    { name: "HOÀN KIẾM", emoji: "🥘", color: "from-[#FCE482] to-[#FFD93D]" },
    { name: "TÂY HỒ", emoji: "🍱", color: "from-[#B8D5A0] to-[#738C6B]" }
  ];

  const displayDistricts = language === 'vi' ? districtsVi : districts;

  return (
    <footer className="bg-gradient-to-b from-[#FFFEF6] to-white">
      {/* Where to Roll - Vibrant Vietnamese Style */}
      <section className="py-20 md:py-32 px-6 relative overflow-hidden" id="locations">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#FCE482] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#EF8E4C] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#B8D5A0] opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Title with vibrant decoration */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="text-3xl animate-bounce">📍</div>
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#EF8E4C] via-[#FF8C5A] to-[#EF8E4C]"
                style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
              >
                {t.huntingGrounds}
              </h2>
              <div className="text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>🍴</div>
            </div>
            <p 
              className="text-xl md:text-2xl font-bold text-[#2D2D2D]/70 mt-4" 
              style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
            >
              {language === 'en' ? 'Delicious deals waiting in every neighborhood' : 'Ưu đãi ngon đang chờ bạn ở mọi khu vực'}
            </p>
          </div>

          {/* Districts Grid - Vibrant Card Style with Food Emojis */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {displayDistricts.map((district, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-[#FFFEF6] overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${district.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 flex flex-col items-center gap-4">
                  {/* Large Food Emoji */}
                  <div className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300">
                    {district.emoji}
                  </div>
                  
                  {/* District Name */}
                  <span 
                    className="text-base md:text-lg font-black text-[#2D2D2D] group-hover:text-[#EF8E4C] transition-colors"
                    style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                  >
                    {district.name}
                  </span>

                  {/* Live Deal Indicator */}
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#FCE482] to-[#FBDA60] px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-[#EF8E4C] rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Live Deals' : 'Đang có deal'}
                    </span>
                  </div>
                </div>

                {/* Decorative corner sparkle */}
                <div className="absolute top-3 right-3 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ✨
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section with vibrant design */}
          <div className="mt-16 md:mt-20">
            <div className="inline-block relative">
              {/* Glow effect behind button */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#EF8E4C] to-[#FF6B35] blur-xl opacity-50"></div>
              
              <button className="relative bg-gradient-to-r from-[#EF8E4C] to-[#FF6B35] text-white px-10 md:px-12 py-5 md:py-6 rounded-full text-lg md:text-xl font-black shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 border-2 border-white">
                <span className="flex items-center gap-3" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  <span className="text-2xl">🗺️</span>
                  <span>{language === 'en' ? 'Explore All Areas' : 'Khám Phá Tất Cả'}</span>
                  <span className="text-2xl">→</span>
                </span>
              </button>
            </div>

            {/* Quick Stats Below Button */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#EF8E4C] to-[#FF6B35] flex items-center justify-center text-lg">
                  🏪
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>200+</div>
                  <div className="text-xs text-[#2D2D2D]/60 font-bold" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Restaurants' : 'Nhà Hàng'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FCE482] to-[#FBDA60] flex items-center justify-center text-lg">
                  🎯
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>50+</div>
                  <div className="text-xs text-[#2D2D2D]/60 font-bold" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Live Deals' : 'Deal Đang Có'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B8D5A0] to-[#738C6B] flex items-center justify-center text-lg">
                  💝
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>50%</div>
                  <div className="text-xs text-[#2D2D2D]/60 font-bold" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Avg. Off' : 'TB Giảm Giá'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright - Simpler Vietnamese Style */}
      <div className="bg-gradient-to-r from-[#2D2D2D] to-[#1a1a1a] text-white py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p 
              className="text-sm opacity-70"
              style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
            >
              {t.copyright}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm font-black hover:text-[#EF8E4C] transition-colors" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'Privacy' : 'Bảo Mật'}
              </a>
              <a href="#" className="text-sm font-black hover:text-[#EF8E4C] transition-colors" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'Terms' : 'Điều Khoản'}
              </a>
              <a href="#" className="text-sm font-black hover:text-[#EF8E4C] transition-colors" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'Contact' : 'Liên Hệ'}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
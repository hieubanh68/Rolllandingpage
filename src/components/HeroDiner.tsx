import React from 'react';
import { ArrowRight, Clock, MapPin, Sparkles, Zap } from 'lucide-react';
import { Language } from '../translations/translations';

interface HeroDinerProps {
  language: Language;
}

export function HeroDiner({ language }: HeroDinerProps) {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-white via-[#FFFEF6] to-[#FCE482]/30">
      {/* Yellow gradient blobs - more prominent */}
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#FCE482] to-white opacity-40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FCE482] to-[#FFFEF6] opacity-30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            {/* Badge - Yellow gradient background */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F9DB4A] to-[#FCE482] px-6 py-3 rounded-full shadow-md mb-6">
              <Sparkles className="w-5 h-5 text-[#2D2D2D]" fill="#2D2D2D" />
              <span className="text-sm font-black text-[#2D2D2D] tracking-wide" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'TIME-LIMITED DEALS' : 'ƯU ĐÃI THEO GIỜ'}
              </span>
            </div>

            {/* Main Headline - Clean black with yellow highlights */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? (
                <>
                  Eat Like<br />
                  an <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Insider</span>.<br />
                  Pay Like<br />
                  a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Local</span>.
                </>
              ) : (
                <>
                  Ăn Như<br />
                  Người <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Trong Cuộc</span>.<br />
                  Trả Như<br />
                  Người <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Địa Phương</span>.
                </>
              )}
            </h1>
            
            {/* Subheadline - Grey text with yellow highlight */}
            <p className="text-xl md:text-2xl leading-relaxed text-gray-600 mb-8" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? (
                <>
                  Discover incredible food and access <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">exclusive, time-limited discounts up to 50%</span> during quieter hours.
                </>
              ) : (
                <>
                  Khám phá món ăn tuyệt vời và truy cập <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">giảm giá độc quyền theo giờ lên đến 50%</span> trong giờ vắng khách.
                </>
              )}
            </p>

            {/* Primary CTA - Yellow gradient Button */}
            <button className="w-full md:w-auto bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] hover:from-[#F9DB4A] hover:to-[#FCE482] text-[#2D2D2D] px-12 py-6 rounded-2xl text-xl md:text-2xl font-black shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group mb-4">
              <span className="flex items-center justify-center gap-3" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'Find Deals Near Me' : 'Tìm Ưu Đãi Gần Tôi'}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
              </span>
            </button>

            {/* Secondary link - subtle */}
            <p className="text-sm text-gray-500" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? (
                <>or <span className="underline cursor-pointer hover:text-[#FCE482] transition-colors">learn how ROLL works</span></>
              ) : (
                <>hoặc <span className="underline cursor-pointer hover:text-[#FCE482] transition-colors">tìm hiểu cách ROLL hoạt động</span></>
              )}
            </p>

            {/* Trust signal - simple text */}
            <div className="mt-12 text-sm text-gray-500" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? 'Launch Partners in District 1 & 3, HCMC' : 'Đối Tác Ra Mắt tại Quận 1 & 3, TPHCM'}
            </div>
          </div>

          {/* Right - "Golden Hour Feast" Visual - Floating on white */}
          <div className="relative">
            {/* Main food image - floating with shadow, no background container */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1701480253822-1842236c9a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcGhvJTIwYm93bCUyMGZvb2R8ZW58MXx8fHwxNzY5MjU4NDU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Delicious Vietnamese Food"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Glassmorphism AR-style discount card overlay */}
              <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-white transform hover:scale-105 transition-transform duration-300">
                {/* Discount percentage - Yellow gradient */}
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] text-center mb-3" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  40% OFF
                </div>
                
                {/* Time constraint */}
                <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#FAFAFA] to-white px-4 py-2 rounded-xl mb-3 border border-gray-100">
                  <Clock className="w-5 h-5 text-[#FCE482]" />
                  <span className="text-sm font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Entry by 14:30 Today' : 'Vào trước 14:30 hôm nay'}
                  </span>
                </div>

                {/* Restaurant info */}
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-600" />
                  <div>
                    <div className="text-sm font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Ăn Ăn Saigon' : 'Ăn Ăn Saigon'}
                    </div>
                    <div className="text-xs text-gray-500" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'District 1' : 'Quận 1'}
                    </div>
                  </div>
                </div>

                {/* Urgency indicator - yellow gradient badge */}
                <div className="mt-3 text-center">
                  <div className="inline-flex items-center gap-1 bg-gradient-to-r from-[#F9DB4A] to-[#FCE482] text-[#2D2D2D] px-3 py-1 rounded-full text-xs font-black">
                    <Zap className="w-3 h-3" fill="#2D2D2D" />
                    {language === 'en' ? '3 slots left' : 'Còn 3 chỗ'}
                  </div>
                </div>
              </div>

              {/* Floating "Live Now" badge - green accent */}
              <div className="absolute bottom-8 left-8 bg-gradient-to-r from-[#4ADE80] to-[#22C55E] text-white px-6 py-3 rounded-xl shadow-xl font-black text-lg">
                <span className="flex items-center gap-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                  {language === 'en' ? 'LIVE NOW' : 'ĐANG DIỄN RA'}
                </span>
              </div>
            </div>

            {/* Additional floating element - emphasizing the value */}
            <div className="absolute -bottom-6 -left-6 bg-white text-[#2D2D2D] px-8 py-4 rounded-2xl shadow-2xl border-2 border-[#F9DB4A] transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="text-sm font-black text-gray-600 mb-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'AVG. SAVINGS' : 'TIẾT KIỆM TB'}
                </div>
                <div className="text-3xl font-black text-[#4ADE80]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  150K VND
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
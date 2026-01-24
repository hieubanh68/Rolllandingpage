import React from 'react';
import { Download, Smartphone, Sparkles, Star, Zap } from 'lucide-react';
import { Language } from '../translations/translations';

interface DownloadCTAProps {
  language: Language;
}

export function DownloadCTA({ language }: DownloadCTAProps) {
  return (
    <div className="py-20 md:py-32 px-6 bg-gradient-to-br from-[#F9DB4A] via-[#FCE482] to-[#FFD93D] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <Star className="absolute top-20 left-[10%] w-20 h-20 text-[#EF8E4C] opacity-20 animate-pulse" fill="#EF8E4C" />
        <Star className="absolute bottom-20 right-[15%] w-16 h-16 text-[#EF8E4C] opacity-20 animate-pulse" fill="#EF8E4C" />
        <Sparkles className="absolute top-1/2 left-[20%] w-16 h-16 text-white opacity-20" />
        <Zap className="absolute top-[30%] right-[25%] w-14 h-14 text-[#EF8E4C] opacity-20 animate-pulse" fill="#EF8E4C" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EF8E4C] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Animated icon */}
        <div className="inline-flex items-center justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
              <Smartphone className="w-12 h-12 text-[#EF8E4C]" strokeWidth={3} />
            </div>
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-[#EF8E4C] to-[#FF6B35] rounded-full flex items-center justify-center shadow-xl">
              <Download className="w-6 h-6 text-white" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Main headline */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 text-[#2D2D2D] leading-tight" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
          {language === 'en' ? (
            <>
              Your Next Great Meal<br />
              is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF8E4C] to-[#FF6B35]">30% Off</span>
            </>
          ) : (
            <>
              Bữa Ăn Tuyệt Vời Tiếp Theo<br />
              Giảm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF8E4C] to-[#FF6B35]">30%</span>
            </>
          )}
        </h2>

        {/* Subheadline */}
        <p className="text-2xl md:text-3xl font-black mb-12 text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
          {language === 'en' ? 'What Are You Waiting For?' : 'Bạn Đang Chờ Gì?'}
        </p>

        {/* Value props */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-white hover:shadow-2xl transition-all">
            <div className="text-4xl mb-3">🍜</div>
            <div className="font-black text-lg text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? '200+ Restaurants' : '200+ Nhà Hàng'}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-white hover:shadow-2xl transition-all">
            <div className="text-4xl mb-3">⚡</div>
            <div className="font-black text-lg text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? 'Up to 50% Off' : 'Giảm Đến 50%'}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-white hover:shadow-2xl transition-all">
            <div className="text-4xl mb-3">📱</div>
            <div className="font-black text-lg text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? 'Book in Seconds' : 'Đặt Trong Giây'}
            </div>
          </div>
        </div>

        {/* Secondary headline */}
        <p className="text-xl md:text-2xl mb-8 text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
          {language === 'en' 
            ? 'Download ROLL and start exploring Saigon\'s hidden dining potential.'
            : 'Tải ROLL và bắt đầu khám phá tiềm năng ẩm thực ẩn của Sài Gòn.'}
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          {/* Apple App Store */}
          <button className="w-full sm:w-auto bg-[#2D2D2D] text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs opacity-80" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'Download on the' : 'Tải về trên'}
              </div>
              <div className="text-xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                App Store
              </div>
            </div>
          </button>

          {/* Google Play Store */}
          <button className="w-full sm:w-auto bg-[#2D2D2D] text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs opacity-80" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'GET IT ON' : 'Tải về trên'}
              </div>
              <div className="text-xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                Google Play
              </div>
            </div>
          </button>
        </div>

        {/* Trust micro-copy */}
        <p className="text-sm opacity-70 text-[#2D2D2D] mb-8" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
          {language === 'en' 
            ? '✓ Free to download  •  ✓ No signup fees  •  ✓ Instant access to deals'
            : '✓ Miễn phí tải  •  ✓ Không phí đăng ký  •  ✓ Truy cập deal ngay lập tức'}
        </p>

        {/* Social proof badges */}
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[#EF8E4C]" fill="#EF8E4C" />
            <Star className="w-5 h-5 text-[#EF8E4C]" fill="#EF8E4C" />
            <Star className="w-5 h-5 text-[#EF8E4C]" fill="#EF8E4C" />
            <Star className="w-5 h-5 text-[#EF8E4C]" fill="#EF8E4C" />
            <Star className="w-5 h-5 text-[#EF8E4C]" fill="#EF8E4C" />
            <span className="ml-2 font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              4.8/5
            </span>
          </div>
          <div className="font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            50K+ {language === 'en' ? 'Downloads' : 'Lượt Tải'}
          </div>
          <div className="font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            {language === 'en' ? 'Featured in District 1 & 3' : 'Nổi bật tại Quận 1 & 3'}
          </div>
        </div>

        {/* Bottom energy boost */}
        <div className="mt-16">
          <div className="inline-block bg-white text-[#2D2D2D] px-8 py-4 rounded-2xl shadow-2xl border-4 border-[#EF8E4C] transform -rotate-2 hover:rotate-0 transition-transform">
            <div className="text-3xl md:text-4xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              🎯 {language === 'en' ? 'Your First Deal Awaits' : 'Deal Đầu Tiên Đang Chờ Bạn'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

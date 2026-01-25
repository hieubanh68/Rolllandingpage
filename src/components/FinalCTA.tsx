import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Star, Building2 } from 'lucide-react';
import { Language } from '../translations/translations';

interface FinalCTAProps {
  language: Language;
}

export function FinalCTA({ language }: FinalCTAProps) {
  return (
    <div className="py-24 md:py-32 px-6 bg-gradient-to-br from-[#FFFEF6] to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #2D2D2D 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative elements - subtle and professional */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-[300px] h-[300px] bg-gradient-to-br from-[#FCE482] to-[#F9DB4A] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-gradient-to-br from-[#B8D5A0] to-[#738C6B] opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Content */}
          <div className="text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-white border-2 border-[#FCE482] rounded-full px-4 py-2 mb-6 shadow-sm">
              <Building2 className="w-4 h-4 text-[#2D2D2D]" />
              <span className="text-sm font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'For Restaurants' : 'Dành Cho Nhà Hàng'}
              </span>
            </div>

            {/* Main headline - refined and professional */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#2D2D2D] leading-tight" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? (
                <>
                  Fill Empty Tables.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Maximize Revenue.</span>
                </>
              ) : (
                <>
                  Lấp Đầy Bàn Trống.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Tối Đa Doanh Thu.</span>
                </>
              )}
            </h2>

            {/* Subheadline - professional tone */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' 
                ? 'Join 200+ restaurants turning off-peak hours into profitable opportunities with instant bank transfers.'
                : 'Tham gia 200+ nhà hàng biến giờ vắng thành cơ hội lợi nhuận với chuyển khoản ngay lập tức.'}
            </p>

            {/* Key benefits - clean and professional */}
            <div className="space-y-4 mb-10">
              {[
                { en: 'Zero upfront investment required', vi: 'Không cần đầu tư ban đầu' },
                { en: 'Instant bank transfer (A2A)', vi: 'Chuyển khoản tức thì (A2A)' },
                { en: 'Full control over offers and availability', vi: 'Kiểm soát hoàn toàn ưu đãi và lịch' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-base md:text-lg text-[#2D2D2D] font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? item.en : item.vi}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button - professional styling */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button className="bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] text-[#2D2D2D] px-8 py-4 rounded-xl font-black text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group flex items-center justify-center gap-3">
                <span style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'BECOME A PARTNER' : 'TRỞ THÀNH ĐỐI TÁC'}
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
              </button>
            </div>

            {/* Trust indicators - minimal and professional */}
            <div className="flex items-center gap-6 text-sm text-gray-500 flex-wrap">
              <div className="font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                ✓ {language === 'en' ? '5-min setup' : 'Thiết lập 5 phút'}
              </div>
              <div className="font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                ✓ {language === 'en' ? 'Cancel anytime' : 'Hủy bất cứ lúc nào'}
              </div>
              <div className="font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                ✓ {language === 'en' ? 'No hidden fees' : 'Không phí ẩn'}
              </div>
            </div>
          </div>

          {/* Right - Stats and Social Proof */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-gray-100">
              {/* Performance stats */}
              <div className="mb-8">
                <div className="text-sm font-black text-gray-500 mb-2 uppercase tracking-wide" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Platform Performance' : 'Hiệu Suất Nền Tảng'}
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] rounded-full mb-6"></div>
              </div>

              {/* Stats grid */}
              <div className="space-y-6">
                {[
                  { 
                    value: '200+', 
                    label: language === 'en' ? 'Partner Restaurants' : 'Nhà Hàng Đối Tác',
                    color: 'from-[#FCE482] to-[#F9DB4A]'
                  },
                  { 
                    value: '+23%', 
                    label: language === 'en' ? 'Average Revenue Increase' : 'Tăng Doanh Thu Trung Bình',
                    color: 'from-[#B8D5A0] to-[#738C6B]'
                  },
                  { 
                    value: '50K+', 
                    label: language === 'en' ? 'Active Diners' : 'Thực Khách Hoạt Động',
                    color: 'from-[#FCE482] to-[#F9DB4A]'
                  }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-4 pb-6 border-b border-gray-100 last:border-b-0 last:pb-0">
                    <div className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`} style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {stat.value}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm md:text-base text-[#2D2D2D] font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badge */}
              <div className="mt-8 pt-8 border-t-2 border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FCE482] to-[#F9DB4A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-7 h-7 text-[#2D2D2D]" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="font-black text-sm text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Instant Payout via A2A' : 'Thanh Toán Tức Thì qua A2A'}
                    </div>
                    <div className="text-xs text-gray-500 font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Direct to your bank account' : 'Trực tiếp vào tài khoản ngân hàng'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
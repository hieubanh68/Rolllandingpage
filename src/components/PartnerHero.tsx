import React from 'react';
import { ArrowRight, Clock, TrendingUp, Zap } from 'lucide-react';
import { Language } from '../translations/translations';

interface PartnerHeroProps {
  language: Language;
  onCalculatorClick: () => void;
}

export function PartnerHero({ language, onCalculatorClick }: PartnerHeroProps) {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-[#FFFEF6] via-white to-[#FFF5E1]">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#FCE482] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F9DB4A] opacity-10 rounded-full blur-3xl"></div>
        <Zap className="absolute top-32 right-[10%] w-12 h-12 text-[#FCE482] opacity-20 animate-pulse" fill="#FCE482" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] px-6 py-3 rounded-full shadow-lg mb-6">
              <TrendingUp className="w-5 h-5 text-[#2D2D2D]" strokeWidth={3} />
              <span className="text-sm font-black text-[#2D2D2D] tracking-wide" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'FOR RESTAURANT OWNERS' : 'DÀNH CHO CHỦ NHÀ HÀNG'}
              </span>
            </div>

            {/* Headline - Aggressive & Direct */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? (
                <>
                  Stop Paying Rent<br />
                  for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Empty Tables</span>
                </>
              ) : (
                <>
                  Đừng Trả Tiền Thuê<br />
                  Cho <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Bàn Trống</span>
                </>
              )}
            </h1>
            
            {/* Subheadline - The "How" and "Why" */}
            <p className="text-xl md:text-2xl leading-relaxed text-[#2D2D2D] mb-8" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? (
                <>
                  ROLL fills your restaurant during <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">off-peak times (2PM–5PM)</span>. 
                  Because your rent and staff are already paid for, this marginal revenue boosts your net profit 
                  <span className="font-black text-[#4ADE80]"> up to 23%</span>.
                </>
              ) : (
                <>
                  ROLL lấp đầy nhà hàng của bạn trong <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">giờ thấp điểm (2PM–5PM)</span>. 
                  Vì tiền thuê và nhân viên đã được trả, doanh thu này tăng lợi nhuận ròng 
                  <span className="font-black text-[#4ADE80]"> lên đến 23%</span>.
                </>
              )}
            </p>

            {/* Primary CTA - Interactive Hook */}
            <button 
              onClick={onCalculatorClick}
              className="w-full md:w-auto bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] text-[#2D2D2D] px-12 py-6 rounded-2xl text-xl md:text-2xl font-black shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group mb-6"
            >
              <span className="flex items-center justify-center gap-3" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'Calculate Your Potential Revenue' : 'Tính Doanh Thu Tiềm Năng'}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>

            {/* Trust Badge */}
            <p className="text-sm opacity-60" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' 
                ? '✓ Zero upfront cost  •  ✓ Simple commission only  •  ✓ Full control'
                : '✓ Không phí trả trước  •  ✓ Chỉ hoa hồng đơn giản  •  ✓ Kiểm soát hoàn toàn'}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-[#FFFEF6] hover:shadow-xl transition-shadow">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>200+</div>
                <div className="text-sm opacity-70 font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Partners' : 'Đối tác'}
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-[#FFFEF6] hover:shadow-xl transition-shadow">
                <div className="text-4xl font-black text-[#4ADE80] mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>+23%</div>
                <div className="text-sm opacity-70 font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Profit' : 'Lợi nhuận'}
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-[#FFFEF6] hover:shadow-xl transition-shadow">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>50K+</div>
                <div className="text-sm opacity-70 font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Diners' : 'Thực khách'}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual (Split Screen Graphic) */}
          <div className="relative">
            {/* Main card showing before/after */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-[#FCE482] relative">
              {/* Clock animation indicator */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-[#FCE482] to-[#F9DB4A] rounded-full flex items-center justify-center shadow-xl animate-pulse">
                <Clock className="w-10 h-10 text-[#2D2D2D]" strokeWidth={3} />
              </div>

              {/* Before/After comparison */}
              <div className="space-y-6">
                {/* Traditional Day - Peaks and Valleys */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Traditional Day' : 'Ngày Truyền Thống'}
                    </h3>
                    <span className="text-sm opacity-60 font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Revenue Lost' : 'Doanh Thu Mất'}
                    </span>
                  </div>
                  <div className="h-24 bg-gradient-to-r from-[#FFFEF6] to-white rounded-xl p-4 border-2 border-[#FFD93D] relative overflow-hidden">
                    {/* Revenue graph visualization */}
                    <svg width="100%" height="100%" viewBox="0 0 400 80" preserveAspectRatio="none">
                      {/* Lunch peak */}
                      <path d="M 0 60 L 80 60 L 120 20 L 160 60" stroke="#FCE482" strokeWidth="4" fill="none" />
                      {/* Dead valley (off-peak) */}
                      <path d="M 160 60 L 240 60" stroke="#CCCCCC" strokeWidth="4" fill="none" strokeDasharray="8,4" />
                      {/* Dinner peak */}
                      <path d="M 240 60 L 280 15 L 320 60 L 400 60" stroke="#FCE482" strokeWidth="4" fill="none" />
                    </svg>
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs font-black text-red-500 opacity-60">
                      2PM-5PM: Empty
                    </div>
                  </div>
                </div>

                {/* ROLL Day - Valleys Filled */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-black text-[#4ADE80]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'ROLL Day' : 'Ngày ROLL'}
                    </h3>
                    <span className="text-sm font-black text-[#4ADE80]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      +{language === 'en' ? 'Revenue Captured' : 'Doanh Thu Bắt'}
                    </span>
                  </div>
                  <div className="h-24 bg-gradient-to-r from-[#FFFEF6] to-white rounded-xl p-4 border-2 border-[#4ADE80] relative overflow-hidden">
                    {/* Revenue graph with filled valley */}
                    <svg width="100%" height="100%" viewBox="0 0 400 80" preserveAspectRatio="none">
                      {/* Lunch peak */}
                      <path d="M 0 60 L 80 60 L 120 20 L 160 60" stroke="#FCE482" strokeWidth="4" fill="none" />
                      {/* Filled valley (ROLL boost) */}
                      <path d="M 160 60 L 180 45 L 220 45 L 240 60" stroke="#4ADE80" strokeWidth="4" fill="none" />
                      {/* Dinner peak */}
                      <path d="M 240 60 L 280 15 L 320 60 L 400 60" stroke="#FCE482" strokeWidth="4" fill="none" />
                      {/* Fill area under ROLL boost */}
                      <path d="M 160 60 L 180 45 L 220 45 L 240 60 Z" fill="#4ADE80" opacity="0.2" />
                    </svg>
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs font-black text-[#4ADE80]">
                      2PM-5PM: ROLL Filled
                    </div>
                  </div>
                </div>

                {/* Key insight */}
                <div className="bg-gradient-to-r from-[#4ADE80] to-[#22C55E] text-white p-6 rounded-2xl text-center">
                  <div className="text-3xl md:text-4xl font-black mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Valleys Filled =' : 'Lấp Đầy ='}
                  </div>
                  <div className="text-xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Pure Profit' : 'Lợi Nhuận Thuần'}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge - emphasizing the key metric */}
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-[#FCE482] to-[#FFD93D] text-[#2D2D2D] px-8 py-4 rounded-2xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 border-4 border-white">
              <div className="text-center">
                <div className="text-sm font-black opacity-60 mb-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'YOUR FIXED COSTS' : 'CHI PHÍ CỐ ĐỊNH'}
                </div>
                <div className="text-2xl md:text-3xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Already Paid' : 'Đã Trả Rồi'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
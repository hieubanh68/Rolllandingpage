import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Star } from 'lucide-react';
import { Language } from '../translations/translations';

interface FinalCTAProps {
  language: Language;
}

export function FinalCTA({ language }: FinalCTAProps) {
  return (
    <div className="py-20 md:py-32 px-6 bg-gradient-to-r from-[#2D2D2D] to-[#1a1a1a] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <Star className="absolute top-20 left-20 w-16 h-16 text-[#FCE482] opacity-20 animate-pulse" fill="#FCE482" />
        <Star className="absolute bottom-20 right-20 w-12 h-12 text-[#EF8E4C] opacity-20 animate-pulse" fill="#EF8E4C" />
        <Sparkles className="absolute top-1/2 right-[10%] w-20 h-20 text-[#FCE482] opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EF8E4C] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FCE482] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Main headline */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
          {language === 'en' ? (
            <>
              READY TO FILL<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#FFD93D]">YOUR TABLES?</span>
            </>
          ) : (
            <>
              SẴN SÀNG LẤP ĐẦY<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#FFD93D]">BÀN CỦA BẠN?</span>
            </>
          )}
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
          {language === 'en' 
            ? 'Join hundreds of restaurants already maximizing their revenue with ROLL.'
            : 'Tham gia hàng trăm nhà hàng đang tối đa hóa doanh thu với ROLL.'}
        </p>

        {/* Zero cost emphasis */}
        <div className="inline-block bg-gradient-to-r from-[#4ADE80] to-[#22C55E] px-8 py-4 rounded-2xl mb-12 shadow-xl">
          <div className="text-2xl md:text-3xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            {language === 'en' ? '💰 Zero Upfront Cost' : '💰 Không Phí Trả Trước'}
          </div>
          <div className="text-base opacity-90 mt-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            {language === 'en' ? 'We Only Win When You Win' : 'Chúng Tôi Chỉ Thắng Khi Bạn Thắng'}
          </div>
        </div>

        {/* Benefits checklist */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <CheckCircle2 className="w-6 h-6 text-[#4ADE80] flex-shrink-0" strokeWidth={3} />
            <span className="font-black text-left" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? 'No hidden fees' : 'Không phí ẩn'}
            </span>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <CheckCircle2 className="w-6 h-6 text-[#4ADE80] flex-shrink-0" strokeWidth={3} />
            <span className="font-black text-left" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? 'Simple commission' : 'Hoa hồng đơn giản'}
            </span>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <CheckCircle2 className="w-6 h-6 text-[#4ADE80] flex-shrink-0" strokeWidth={3} />
            <span className="font-black text-left" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? 'Full control' : 'Kiểm soát hoàn toàn'}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-[#FCE482] to-[#FFD93D] text-[#2D2D2D] px-12 py-6 rounded-2xl text-xl md:text-2xl font-black shadow-2xl hover:scale-105 transition-all duration-300 group mb-6">
          <span className="flex items-center justify-center gap-3" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            {language === 'en' ? 'BECOME A LAUNCH PARTNER' : 'TRỞ THÀNH ĐỐI TÁC KHỞI ĐỘNG'}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
          </span>
        </button>

        {/* Trust micro-copy */}
        <p className="text-sm opacity-60" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
          {language === 'en' 
            ? '✓ 5-minute setup  •  ✓ Start earning in 24 hours  •  ✓ Cancel anytime'
            : '✓ Thiết lập 5 phút  •  ✓ Bắt đầu kiếm trong 24 giờ  •  ✓ Hủy bất cứ lúc nào'}
        </p>

        {/* Stats footer */}
        <div className="grid grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-[#FCE482] mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              200+
            </div>
            <div className="text-sm opacity-70 font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? 'Partner Restaurants' : 'Nhà Hàng Đối Tác'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-[#4ADE80] mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              +23%
            </div>
            <div className="text-sm opacity-70 font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? 'Average Profit Increase' : 'Tăng Lợi Nhuận TB'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-[#FCE482] mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              50K+
            </div>
            <div className="text-sm opacity-70 font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? 'Active Diners' : 'Thực Khách Hoạt Động'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

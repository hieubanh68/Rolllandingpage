import React, { useEffect, useRef, useState } from 'react';
import { Search, Lock, Utensils, MapPin, Clock, Percent, Sparkles, CreditCard, Shield, CheckCircle2 } from 'lucide-react';
import { Language } from '../translations/translations';
import { motion, useInView } from 'motion/react';

interface HowItWorksDinerProps {
  language: Language;
}

export function HowItWorksDiner({ language }: HowItWorksDinerProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress when section is in view
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const progress = Math.max(0, Math.min(1, visibleHeight / windowHeight));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate transform for each screen based on scroll
  const screen1Transform = `translateY(${(1 - scrollProgress) * 100}px)`;
  const screen2Transform = `translateY(${(1 - scrollProgress) * 120}px)`;
  const screen3Transform = `translateY(${(1 - scrollProgress) * 140}px)`;

  return (
    <div ref={sectionRef} className="py-20 md:py-32 px-6 bg-white relative overflow-hidden">
      {/* Subtle background decoration - minimal */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-[#FCE482] rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-[300px] h-[300px] bg-[#FCE482] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            {language === 'en' ? (
              <>How ROLL Works<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">3 Simple Steps</span></>
            ) : (
              <>Cách ROLL Hoạt Động<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">3 Bước Đơn Giản</span></>
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            {language === 'en' 
              ? 'Book premium dining experiences with instant discounts. Simple, seamless, and secure.'
              : 'Đặt chỗ nhà hàng cao cấp với giảm giá tức thì. Đơn giản, liền mạch, an toàn.'}
          </p>
        </div>

        {/* Three Screens Side by Side - Futuristic Layout */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Screen 1: Spot the Deal */}
          <div 
            className="transition-all duration-700 ease-out"
            style={{ transform: screen1Transform, opacity: scrollProgress }}
          >
            {/* Step Badge */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FCE482] to-[#F9DB4A] rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>1</span>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative bg-[#2D2D2D] rounded-[2.5rem] p-3 shadow-2xl mb-6">
              <div className="bg-white rounded-[2rem] p-4 aspect-[9/16] overflow-hidden">
                {/* Screen content - Map with deals */}
                <div className="h-full bg-gradient-to-br from-[#FFFEF6] to-white rounded-xl p-4 relative border border-gray-100">
                  {/* Mock map pins */}
                  <div className="absolute top-[20%] left-[30%]">
                    <div className="relative animate-bounce">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#FCE482] to-[#F9DB4A] rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-[#2D2D2D] font-black text-base" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>40%</span>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent border-t-[#FCE482]"></div>
                    </div>
                  </div>

                  <div className="absolute top-[45%] right-[25%]">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FCE482] to-[#FFD93D] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-[#2D2D2D] font-black text-sm" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>30%</span>
                    </div>
                  </div>

                  <div className="absolute bottom-[30%] left-[55%]">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#4ADE80] to-[#22C55E] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-black text-sm" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>50%</span>
                    </div>
                  </div>

                  {/* Search bar */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-3 shadow-lg flex items-center gap-2 border border-gray-200">
                    <Search className="w-5 h-5 text-[#FCE482]" />
                    <span className="text-xs text-gray-400" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Search for deals near you...' : 'Tìm deal gần bạn...'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-center">
              <h3 className="text-2xl font-black text-[#2D2D2D] mb-3" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'Discover Deals' : 'Khám Phá Ưu Đãi'}
              </h3>
              <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' 
                  ? 'Open the app to see live deals around you. Best discounts appear when restaurants are quietest (2-5 PM).'
                  : 'Mở app để xem ưu đãi theo thời gian thực xung quanh bạn. Giảm giá tốt nhất khi nhà hàng vắng khách (2-5 giờ chiều).'}
              </p>
              
              {/* Features */}
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2 bg-gradient-to-r from-[#FFFEF6] to-white px-4 py-2 rounded-full border border-gray-200">
                  <MapPin className="w-4 h-4 text-[#FCE482]" />
                  <span className="text-xs font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Near You' : 'Gần Bạn'}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-[#FFFEF6] to-white px-4 py-2 rounded-full border border-gray-200">
                  <Percent className="w-4 h-4 text-[#FCE482]" />
                  <span className="text-xs font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Up to 50% Off' : 'Giảm Tới 50%'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Screen 2: Secure Your Slot */}
          <div 
            className="transition-all duration-700 ease-out delay-100"
            style={{ transform: screen2Transform, opacity: scrollProgress }}
          >
            {/* Step Badge */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FCE482] to-[#FFD93D] rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>2</span>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative bg-[#2D2D2D] rounded-[2.5rem] p-3 shadow-2xl mb-6">
              <div className="bg-white rounded-[2rem] p-4 aspect-[9/16] overflow-hidden">
                {/* Screen content - Booking confirmation */}
                <div className="h-full flex flex-col justify-center p-4">
                  {/* Restaurant card */}
                  <div className="bg-gradient-to-br from-[#FFFEF6] to-white rounded-2xl p-6 shadow-lg border-2 border-[#FCE482] mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#FCE482] to-[#FFD93D] rounded-xl flex items-center justify-center">
                        <Utensils className="w-7 h-7 text-[#2D2D2D]" />
                      </div>
                      <div>
                        <div className="font-black text-base text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                          Bếp Mẹ Saigon
                        </div>
                        <div className="text-sm text-[#4ADE80] font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                          40% OFF
                        </div>
                      </div>
                    </div>

                    {/* Time selection */}
                    <div className="bg-white rounded-xl p-4 border-2 border-[#FCE482]">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-[#FCE482]" />
                        <span className="text-xs font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                          {language === 'en' ? 'Arrival Time' : 'Giờ Đến Hàng'}
                        </span>
                      </div>
                      <div className="text-2xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                        14:30
                      </div>
                    </div>
                  </div>

                  {/* Book button */}
                  <button className="w-full bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] text-[#2D2D2D] px-6 py-3 rounded-xl font-black text-base shadow-lg">
                    {language === 'en' ? 'CLAIM OFFER' : 'NHẬN ƯU ĐÃI'}
                  </button>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-center">
              <h3 className="text-2xl font-black text-[#2D2D2D] mb-3" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'Reserve Instantly' : 'Đặt Chỗ Tức Thì'}
              </h3>
              <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' 
                  ? 'Pick your arrival time and book instantly. No phone calls needed. The restaurant expects you.'
                  : 'Chọn giờ đến và đặt chỗ ngay lập tức. Không cần gọi điện. Nhà hàng sẽ đợi bạn.'}
              </p>
              
              {/* Benefits */}
              <div className="bg-gradient-to-r from-[#FFFEF6] to-white p-4 rounded-xl border border-gray-200">
                <div className="space-y-2 text-xs text-left" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FCE482]"></div>
                    <span>{language === 'en' ? 'No awkward discount questions' : 'Không cần hỏi về giảm giá'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FCE482]"></div>
                    <span>{language === 'en' ? 'Restaurant is ready for you' : 'Nhà hàng đã sẵn sàng đón bạn'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FCE482]"></div>
                    <span>{language === 'en' ? 'Guaranteed seating & discount' : 'Đảm bảo có chỗ và giảm giá'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screen 3: Show Up & Save */}
          <div 
            className="transition-all duration-700 ease-out delay-200"
            style={{ transform: screen3Transform, opacity: scrollProgress }}
          >
            {/* Step Badge */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4ADE80] to-[#22C55E] rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-black text-white" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>3</span>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative bg-[#2D2D2D] rounded-[2.5rem] p-3 shadow-2xl mb-6">
              <div className="bg-white rounded-[2rem] p-4 aspect-[9/16] overflow-hidden">
                {/* Screen content - Payment */}
                <div className="h-full flex flex-col justify-center p-4">
                  {/* Receipt mockup */}
                  <div className="bg-gradient-to-br from-[#FFFEF6] to-white rounded-2xl p-6 border border-gray-200 shadow-lg mb-4">
                    <div className="text-center mb-4">
                      <div className="font-black text-xl text-[#2D2D2D] mb-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                        Bếp Mẹ Saigon
                      </div>
                      <div className="text-xs text-gray-500" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                        {language === 'en' ? 'Your Bill' : 'Hóa Đơn Của Bạn'}
                      </div>
                    </div>

                    <div className="space-y-2 mb-4 pb-4 border-b-2 border-dashed border-gray-300">
                      <div className="flex justify-between text-sm">
                        <span style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                          {language === 'en' ? 'Subtotal' : 'Tạm tính'}
                        </span>
                        <span className="font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>500,000đ</span>
                      </div>
                      <div className="flex justify-between text-sm text-[#4ADE80]">
                        <span className="font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                          {language === 'en' ? 'ROLL Discount (40%)' : 'Giảm ROLL (40%)'}
                        </span>
                        <span className="font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>-200,000đ</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-base font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                        {language === 'en' ? 'Total' : 'Tổng cộng'}
                      </span>
                      <span className="text-2xl font-black text-[#4ADE80]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>300,000đ</span>
                    </div>
                  </div>

                  {/* Pay button */}
                  <button className="w-full bg-gradient-to-r from-[4ADE80] to-[#22C55E] text-white px-6 py-3 rounded-xl font-black text-base shadow-lg">
                    {language === 'en' ? 'PAY NOW' : 'THANH TOÁN NGAY'}
                  </button>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-center">
              <h3 className="text-2xl font-black text-[#2D2D2D] mb-3" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'Dine & Pay' : 'Ăn & Thanh Toán'}
              </h3>
              <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' 
                  ? 'Enjoy your meal and pay securely in-app. No awkward discount math at the counter—it\'s automatically applied.'
                  : 'Thưởng thức bữa ăn và thanh toán an toàn trong app. Không cần tính giảm giá ở quầy—tự động áp dụng.'}
              </p>
              
              {/* Payment Features */}
              <div className="bg-gradient-to-r from-[#FFFEF6] to-white p-4 rounded-xl border border-gray-200">
                <div className="space-y-2 text-xs text-left" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4ADE80] flex-shrink-0" strokeWidth={3} />
                    <span>{language === 'en' ? 'No awkward math—discount auto-applied' : 'Không tính toán—giảm giá tự động'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4ADE80] flex-shrink-0" strokeWidth={3} />
                    <span>{language === 'en' ? 'Secure & fast—encrypted payments' : 'An toàn & nhanh—mã hóa thanh toán'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4ADE80] flex-shrink-0" strokeWidth={3} />
                    <span>{language === 'en' ? 'ZaloPay, MoMo, Cards, Apple Pay' : 'ZaloPay, MoMo, Thẻ, Apple Pay'}</span>
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
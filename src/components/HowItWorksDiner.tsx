import React from 'react';
import { Search, Lock, Utensils, MapPin, Clock, Percent } from 'lucide-react';
import { Language } from '../translations/translations';

interface HowItWorksDinerProps {
  language: Language;
}

export function HowItWorksDiner({ language }: HowItWorksDinerProps) {
  return (
    <div className="py-20 md:py-32 px-6 bg-gradient-to-br from-white via-[#FFFEF6] to-[#FCE482]/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#FCE482] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#F9DB4A] to-[#FFFEF6] opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            {language === 'en' ? (
              <>How ROLL Works<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">The 3-Step Hook</span></>
            ) : (
              <>Cách ROLL Hoạt Động<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">3 Bước Đơn Giản</span></>
            )}
          </h2>
        </div>

        {/* Three Steps */}
        <div className="space-y-16">
          {/* Step 1: The Spark */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Icon and content */}
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FCE482] to-[#F9DB4A] rounded-2xl flex items-center justify-center shadow-xl">
                  <Search className="w-10 h-10 text-[#2D2D2D]" strokeWidth={3} />
                </div>
                <div>
                  <div className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] mb-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'STEP 1' : 'BƯỚC 1'}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Spot the Deal' : 'Phát Hiện Deal'}
                  </h3>
                </div>
              </div>

              <p className="text-xl mb-6 opacity-80 text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' 
                  ? 'Open the app and see real-time discounts nearby. The biggest deals happen when restaurants are quietest (like 2 PM or 5 PM).'
                  : 'Mở app và xem giảm giá thời gian thực gần bạn. Deal lớn nhất xảy ra khi nhà hàng vắng nhất (như 2 giờ chiều hoặc 5 giờ chiều).'}
              </p>

              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#FFFEF6] to-white rounded-xl shadow-md">
                  <MapPin className="w-6 h-6 text-[#FCE482]" />
                  <span className="text-sm font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Near You' : 'Gần Bạn'}
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#FFFEF6] to-white rounded-xl shadow-md">
                  <Percent className="w-6 h-6 text-[#FCE482]" />
                  <span className="text-sm font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Up to 50%' : 'Lên 50%'}
                  </span>
                </div>
              </div>
            </div>

            {/* Visual - App mockup showing map with deals */}
            <div className="order-1 md:order-2">
              <div className="relative bg-gradient-to-br from-[#2D2D2D] to-[#1a1a1a] rounded-3xl p-6 shadow-2xl">
                {/* Phone screen mockup */}
                <div className="bg-white rounded-2xl p-6 aspect-[9/16] shadow-xl">
                  {/* Map illustration */}
                  <div className="h-full bg-gradient-to-br from-[#FFFEF6] to-white rounded-xl p-4 relative overflow-hidden border-2 border-[#FFFEF6]">
                    {/* Mock map pins */}
                    <div className="absolute top-[20%] left-[30%] transform -translate-x-1/2">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#FCE482] to-[#F9DB4A] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                          <span className="text-[#2D2D2D] font-black text-sm" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>40%</span>
                        </div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#FCE482]"></div>
                      </div>
                    </div>

                    <div className="absolute top-[50%] right-[20%] transform -translate-x-1/2">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#FCE482] to-[#FFD93D] rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-[#2D2D2D] font-black text-sm" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>35%</span>
                        </div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#FFD93D]"></div>
                      </div>
                    </div>

                    <div className="absolute bottom-[25%] left-[50%] transform -translate-x-1/2">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#4ADE80] to-[#22C55E] rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-black text-sm" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>50%</span>
                        </div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#22C55E]"></div>
                      </div>
                    </div>

                    {/* Search bar at bottom */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-3 shadow-xl flex items-center gap-2">
                      <Search className="w-5 h-5 text-[#FCE482]" />
                      <span className="text-sm opacity-60" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                        {language === 'en' ? 'Search deals...' : 'Tìm kiếm deal...'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: The Lock */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual - Booking confirmation */}
            <div>
              <div className="relative bg-gradient-to-br from-[#2D2D2D] to-[#1a1a1a] rounded-3xl p-6 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 aspect-[9/16] shadow-xl">
                  <div className="h-full flex flex-col justify-center items-center p-6">
                    {/* Restaurant card */}
                    <div className="w-full bg-gradient-to-br from-[#FFFEF6] to-white rounded-2xl p-6 shadow-lg border-2 border-[#FCE482] mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#EF8E4C] to-[#FF6B35] rounded-xl"></div>
                        <div>
                          <div className="font-black text-lg text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                            Phở 79
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
                          <span className="text-sm font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                            {language === 'en' ? 'Entry Time' : 'Giờ Vào'}
                          </span>
                        </div>
                        <div className="text-3xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                          2:30 PM
                        </div>
                      </div>
                    </div>

                    {/* Book button */}
                    <button className="w-full bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] text-[#2D2D2D] px-8 py-4 rounded-xl font-black text-lg shadow-lg">
                      {language === 'en' ? 'SECURE SLOT' : 'ĐẶT CHỖ'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FCE482] to-[#FFD93D] rounded-2xl flex items-center justify-center shadow-xl">
                  <Lock className="w-10 h-10 text-[#2D2D2D]" strokeWidth={3} />
                </div>
                <div>
                  <div className="text-sm font-black text-[#FFD93D] mb-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'STEP 2' : 'BƯỚC 2'}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Secure Your Slot' : 'Đặt Chỗ Của Bạn'}
                  </h3>
                </div>
              </div>

              <p className="text-xl mb-6 opacity-80 text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' 
                  ? 'Select your "entry time" and book instantly. No phone calls needed. Restaurants know you\'re coming.'
                  : 'Chọn "giờ vào" của bạn và đặt ngay lập tức. Không cần gọi điện. Nhà hàng biết bạn sẽ đến.'}
              </p>

              <div className="bg-gradient-to-r from-[#FFFEF6] to-white p-6 rounded-2xl shadow-md">
                <div className="text-sm font-black text-[#2D2D2D] mb-3" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? '✓ WHY THIS MATTERS:' : '✓ TẠI SAO QUAN TRỌNG:'}
                </div>
                <ul className="space-y-2 text-sm opacity-80" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FCE482] font-black">•</span>
                    {language === 'en' ? 'No awkward "Do you have deals?" conversation' : 'Không có cuộc trò chuyện ngượng "Có ưu đãi không?"'}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FCE482] font-black">•</span>
                    {language === 'en' ? 'Restaurant is prepared for you' : 'Nhà hàng đã chuẩn bị cho bạn'}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FCE482] font-black">•</span>
                    {language === 'en' ? 'Guaranteed discount' : 'Đảm bảo giảm giá'}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3: The Feast */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4ADE80] to-[#22C55E] rounded-2xl flex items-center justify-center shadow-xl">
                  <Utensils className="w-10 h-10 text-white" strokeWidth={3} />
                </div>
                <div>
                  <div className="text-sm font-black text-[#4ADE80] mb-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'STEP 3' : 'BƯỚC 3'}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Show Up & Save' : 'Đến & Tiết Kiệm'}
                  </h3>
                </div>
              </div>

              <p className="text-xl mb-6 opacity-80 text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' 
                  ? 'Arrive on time, show your booking, and enjoy. The discount is automatically applied to your bill. Scan, pay, leave. No awkward conversations about discounts at the counter.'
                  : 'Đến đúng giờ, hiển thị đặt chỗ và thưởng thức. Giảm giá tự động áp dụng vào hóa đơn. Quét, trả tiền, ra về. Không có cuộc trò chuyện ngượng ngùng về giảm giá ở quầy.'}
              </p>

              <div className="bg-gradient-to-r from-[#4ADE80] to-[#22C55E] text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl md:text-3xl font-black mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'It\'s THAT Easy' : 'ĐƠN GIẢN VẬY THÔI'}
                </div>
                <div className="text-base opacity-90" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Book. Eat. Save. Repeat.' : 'Đặt. Ăn. Tiết Kiệm. Lặp Lại.'}
                </div>
              </div>
            </div>

            {/* Visual - Payment screen */}
            <div className="order-1 md:order-2">
              <div className="relative bg-gradient-to-br from-[#2D2D2D] to-[#1a1a1a] rounded-3xl p-6 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 aspect-[9/16] shadow-xl">
                  <div className="h-full flex flex-col justify-center p-6">
                    {/* Receipt mockup */}
                    <div className="bg-gradient-to-br from-[#FFFEF6] to-white rounded-2xl p-6 border-2 border-[#FFFEF6] shadow-lg mb-6">
                      <div className="text-center mb-4">
                        <div className="font-black text-2xl text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                          Phở 79
                        </div>
                        <div className="text-sm opacity-60" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                          {language === 'en' ? 'Your Bill' : 'Hóa Đơn'}
                        </div>
                      </div>

                      <div className="space-y-2 mb-4 pb-4 border-b-2 border-dashed border-gray-300">
                        <div className="flex justify-between text-sm">
                          <span style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                            {language === 'en' ? 'Subtotal' : 'Tạm tính'}
                          </span>
                          <span className="font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>300,000đ</span>
                        </div>
                        <div className="flex justify-between text-sm text-[#4ADE80]">
                          <span className="font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                            {language === 'en' ? 'ROLL Discount (40%)' : 'Giảm ROLL (40%)'}
                          </span>
                          <span className="font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>-120,000đ</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-lg font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                          {language === 'en' ? 'Total' : 'Tổng'}
                        </span>
                        <span className="text-3xl font-black text-[#4ADE80]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>180,000đ</span>
                      </div>
                    </div>

                    {/* Pay button */}
                    <button className="w-full bg-gradient-to-r from-[#4ADE80] to-[#22C55E] text-white px-8 py-4 rounded-xl font-black text-lg shadow-lg">
                      {language === 'en' ? 'PAY NOW' : 'THANH TOÁN'}
                    </button>
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
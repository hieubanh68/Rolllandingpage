import React from 'react';
import { Settings, UserCheck, CreditCard, BarChart3, CheckCircle2, Calendar, Clock, Percent, Users } from 'lucide-react';
import { Language } from '../translations/translations';

interface HowItWorksPartnerProps {
  language: Language;
}

export function HowItWorksPartner({ language }: HowItWorksPartnerProps) {
  return (
    <div className="py-20 md:py-32 px-6 bg-gradient-to-br from-[#FFFEF6] to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            {language === 'en' ? (
              <>How It Works:<br /><span className="text-[#EF8E4C]">Control Without Chaos</span></>
            ) : (
              <>Cách Hoạt Động:<br /><span className="text-[#EF8E4C]">Kiểm Soát Không Hỗn Loạn</span></>
            )}
          </h2>
          <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            {language === 'en' 
              ? "We won't disrupt your busy operations or cheapen your brand. You stay in full control."
              : 'Chúng tôi sẽ không làm gián đoạn hoạt động bận rộn hoặc làm giảm giá trị thương hiệu. Bạn giữ toàn quyền kiểm soát.'}
          </p>
        </div>

        {/* Three Steps */}
        <div className="space-y-12">
          {/* Step 1: You Set the Golden Hours */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-4 border-[#EF8E4C] relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            {/* Step number badge */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#EF8E4C] to-[#FF6B35] rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
              <span className="text-3xl font-black text-white" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>1</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Content */}
              <div className="md:pl-12">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-8 h-8 text-[#EF8E4C]" strokeWidth={3} />
                  <h3 className="text-2xl md:text-3xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'You Set the Golden Hours' : 'Bạn Đặt Giờ Vàng'}
                  </h3>
                </div>
                
                <p className="text-lg mb-6 opacity-80" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' 
                    ? 'Choose the exact times and discount levels that suit your kitchen capacity. You are in full control.'
                    : 'Chọn chính xác thời gian và mức giảm giá phù hợp với năng lực bếp. Bạn kiểm soát hoàn toàn.'}
                </p>

                {/* Control options */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#FFFEF6] to-white rounded-xl">
                    <Calendar className="w-5 h-5 text-[#EF8E4C]" />
                    <span className="text-sm font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Pick Days' : 'Chọn Ngày'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#FFFEF6] to-white rounded-xl">
                    <Clock className="w-5 h-5 text-[#EF8E4C]" />
                    <span className="text-sm font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Set Hours' : 'Đặt Giờ'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#FFFEF6] to-white rounded-xl">
                    <Percent className="w-5 h-5 text-[#EF8E4C]" />
                    <span className="text-sm font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Discount %' : 'Giảm Giá %'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#FFFEF6] to-white rounded-xl">
                    <Users className="w-5 h-5 text-[#EF8E4C]" />
                    <span className="text-sm font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Max Seats' : 'Số Chỗ'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right - Mock Dashboard Screenshot */}
              <div className="relative">
                <div className="bg-gradient-to-br from-[#2D2D2D] to-[#1a1a1a] rounded-2xl p-6 shadow-2xl">
                  {/* Mock header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-[#EF8E4C]">
                    <span className="text-white font-black text-lg" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Partner Dashboard' : 'Bảng Điều Khiển'}
                    </span>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>

                  {/* Mock scheduler */}
                  <div className="space-y-3">
                    <div className="bg-[#3D3D3D] rounded-lg p-4">
                      <div className="text-xs text-gray-400 mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                        {language === 'en' ? 'Time Slot' : 'Khung Giờ'}
                      </div>
                      <div className="text-white font-black text-lg" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                        2:00 PM - 5:00 PM
                      </div>
                    </div>
                    <div className="bg-[#3D3D3D] rounded-lg p-4">
                      <div className="text-xs text-gray-400 mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                        {language === 'en' ? 'Discount' : 'Giảm Giá'}
                      </div>
                      <div className="text-[#FCE482] font-black text-lg" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                        30% OFF
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#EF8E4C] to-[#FF6B35] rounded-lg p-4 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-white mr-2" />
                      <span className="text-white font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                        {language === 'en' ? 'ACTIVE' : 'ĐANG HOẠT ĐỘNG'}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Floating "Full Control" badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#4ADE80] to-[#22C55E] text-white px-6 py-3 rounded-xl shadow-xl font-black text-sm" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  ✓ {language === 'en' ? 'FULL CONTROL' : 'KIỂM SOÁT TOÀN PHẦN'}
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Diners Lock It In */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-4 border-[#FCE482] relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            {/* Step number badge */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#FCE482] to-[#FFD93D] rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
              <span className="text-3xl font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>2</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Right - Mock App Screenshot */}
              <div className="order-2 md:order-1 relative">
                <div className="bg-gradient-to-br from-[#FFFEF6] to-white rounded-3xl p-6 shadow-2xl border-4 border-[#FCE482]">
                  {/* Mock phone screen */}
                  <div className="space-y-4">
                    {/* Restaurant card */}
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#EF8E4C] to-[#FF6B35] rounded-xl"></div>
                        <div>
                          <div className="font-black text-lg" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                            {language === 'en' ? 'Your Restaurant' : 'Nhà Hàng Bạn'}
                          </div>
                          <div className="text-sm text-[#4ADE80] font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                            30% OFF
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-[#FCE482] to-[#FFD93D] rounded-xl p-3 text-center">
                        <div className="text-sm font-black text-[#2D2D2D] mb-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                          {language === 'en' ? 'Booked for' : 'Đã đặt lúc'}
                        </div>
                        <div className="text-2xl font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                          3:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Left - Content */}
              <div className="order-1 md:order-2 md:pr-12">
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="w-8 h-8 text-[#FFD93D]" strokeWidth={3} />
                  <h3 className="text-2xl md:text-3xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Diners Lock It In' : 'Thực Khách Cam Kết'}
                  </h3>
                </div>
                
                <p className="text-lg mb-6 opacity-80" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' 
                    ? 'Customers commit to specific entry times and prepay to secure the deal. No-shows are minimized.'
                    : 'Khách cam kết giờ đến cụ thể và trả trước để đảm bảo ưu đãi. Giảm thiểu việc bỏ bùng.'}
                </p>

                {/* Benefits list */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#4ADE80] flex-shrink-0 mt-1" />
                    <span className="font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Customers reserve specific time slots' : 'Khách đặt khung giờ cụ thể'}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#4ADE80] flex-shrink-0 mt-1" />
                    <span className="font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'You know exactly when they\'re coming' : 'Bạn biết chính xác khi nào họ đến'}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#4ADE80] flex-shrink-0 mt-1" />
                    <span className="font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Prepayment reduces no-shows' : 'Thanh toán trước giảm bỏ bùng'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Serve & Profit */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-4 border-[#4ADE80] relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            {/* Step number badge */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#4ADE80] to-[#22C55E] rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
              <span className="text-3xl font-black text-white" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>3</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Content */}
              <div className="md:pl-12">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-8 h-8 text-[#22C55E]" strokeWidth={3} />
                  <h3 className="text-2xl md:text-3xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Serve & Profit' : 'Phục Vụ & Lợi Nhuận'}
                  </h3>
                </div>
                
                <p className="text-lg mb-6 opacity-80" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' 
                    ? 'Smooth operations. Payments are integrated (ZaloPay, ApplePay), so you just focus on serving.'
                    : 'Vận hành mượt mà. Thanh toán được tích hợp (ZaloPay, ApplePay), bạn chỉ cần tập trung phục vụ.'}
                </p>

                {/* Payment methods */}
                <div className="bg-gradient-to-r from-[#FFFEF6] to-white p-6 rounded-2xl">
                  <div className="text-sm font-black opacity-60 mb-3" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'INTEGRATED PAYMENTS' : 'THANH TOÁN TÍCH HỢP'}
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {/* Payment logos placeholders */}
                    <div className="bg-white rounded-lg p-3 shadow-md flex items-center justify-center font-black text-xs text-[#0068FF]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      ZaloPay
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-md flex items-center justify-center font-black text-xs" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      MoMo
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-md flex items-center justify-center font-black text-xs text-[#000]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      Apple
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-md flex items-center justify-center font-black text-xs text-[#1A1F71]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      Visa
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-[#4ADE80] to-[#22C55E] rounded-3xl p-8 text-white text-center shadow-2xl">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4" strokeWidth={3} />
                  <div className="text-4xl font-black mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    +23%
                  </div>
                  <div className="text-xl font-black opacity-90 mb-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Average Profit Increase' : 'Tăng Lợi Nhuận TB'}
                  </div>
                  <div className="text-sm opacity-80" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' 
                      ? 'From filling previously empty tables'
                      : 'Từ việc lấp đầy bàn trống trước đây'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom emphasis */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#2D2D2D] to-[#1a1a1a] text-white px-8 py-6 rounded-2xl shadow-xl">
            <p className="text-xl md:text-2xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' 
                ? '🎯 Set it once. Automate revenue during quiet hours.'
                : '🎯 Đặt một lần. Tự động hóa doanh thu giờ vắng.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

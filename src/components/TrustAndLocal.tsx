import React from 'react';
import { MapPin, Shield, Zap, Quote, Star, TrendingUp } from 'lucide-react';
import { Language } from '../translations/translations';

interface TrustAndLocalProps {
  language: Language;
}

export function TrustAndLocal({ language }: TrustAndLocalProps) {
  return (
    <div className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Zap className="w-10 h-10 text-[#EF8E4C]" fill="#EF8E4C" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            {language === 'en' ? (
              <>Built for the Speed of<br /><span className="text-[#EF8E4C]">Vietnam's F&B</span></>
            ) : (
              <>Xây Dựng Cho Tốc Độ<br /><span className="text-[#EF8E4C]">F&B Việt Nam</span></>
            )}
          </h2>
        </div>

        {/* Trust Signals Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Payment Integration */}
          <div className="bg-gradient-to-br from-[#FFFEF6] to-white rounded-3xl p-8 shadow-lg border-2 border-[#FFFEF6] hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-[#EF8E4C] to-[#FF6B35] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Shield className="w-8 h-8 text-white" strokeWidth={3} />
            </div>
            <h3 className="text-xl font-black mb-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? 'Trusted Payment Methods' : 'Phương Thức Thanh Toán Tin Cậy'}
            </h3>
            <p className="text-sm opacity-70 mb-6" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' 
                ? 'Integrated with payment methods your customers love'
                : 'Tích hợp với các phương thức khách hàng yêu thích'}
            </p>
            
            {/* Payment logos */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 shadow-md border-2 border-[#0068FF] flex items-center justify-center">
                <span className="font-black text-sm text-[#0068FF]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>ZaloPay</span>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-md border-2 border-[#A50064] flex items-center justify-center">
                <span className="font-black text-sm text-[#A50064]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>MoMo</span>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-md border-2 border-[#1A1F71] flex items-center justify-center">
                <span className="font-black text-sm text-[#1A1F71]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>Visa</span>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-md border-2 border-black flex items-center justify-center">
                <span className="font-black text-sm" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>Apple Pay</span>
              </div>
            </div>
          </div>

          {/* Local Focus */}
          <div className="bg-gradient-to-br from-[#FFFEF6] to-white rounded-3xl p-8 shadow-lg border-2 border-[#FFFEF6] hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FCE482] to-[#FFD93D] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <MapPin className="w-8 h-8 text-[#2D2D2D]" strokeWidth={3} />
            </div>
            <h3 className="text-xl font-black mb-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? 'Hyper-Local Launch' : 'Khởi Động Siêu Địa Phương'}
            </h3>
            <p className="text-sm opacity-70 mb-6" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' 
                ? 'Starting where it matters most'
                : 'Bắt đầu từ nơi quan trọng nhất'}
            </p>
            
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-[#EF8E4C] to-[#FF6B35] text-white rounded-xl p-4 text-center">
                <div className="text-2xl font-black mb-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'District 1' : 'Quận 1'}
                </div>
                <div className="text-xs opacity-80" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>HCMC</div>
              </div>
              <div className="bg-gradient-to-r from-[#FCE482] to-[#FFD93D] text-[#2D2D2D] rounded-xl p-4 text-center">
                <div className="text-2xl font-black mb-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'District 3' : 'Quận 3'}
                </div>
                <div className="text-xs opacity-80" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>HCMC</div>
              </div>
            </div>
          </div>

          {/* Performance */}
          <div className="bg-gradient-to-br from-[#FFFEF6] to-white rounded-3xl p-8 shadow-lg border-2 border-[#FFFEF6] hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-[#4ADE80] to-[#22C55E] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" strokeWidth={3} />
            </div>
            <h3 className="text-xl font-black mb-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? 'Proven Results' : 'Kết Quả Đã Chứng Minh'}
            </h3>
            <p className="text-sm opacity-70 mb-6" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' 
                ? 'Real data from early partners'
                : 'Dữ liệu thực từ đối tác đầu tiên'}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-md">
                <span className="text-sm font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Avg Profit' : 'LN TB'}
                </span>
                <span className="text-xl font-black text-[#4ADE80]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  +23%
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-md">
                <span className="text-sm font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Active Users' : 'Người Dùng'}
                </span>
                <span className="text-xl font-black text-[#EF8E4C]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  50K+
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-md">
                <span className="text-sm font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Partners' : 'Đối Tác'}
                </span>
                <span className="text-xl font-black text-[#EF8E4C]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  200+
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Early Adopter Testimonial */}
        <div className="bg-gradient-to-br from-[#2D2D2D] to-[#1a1a1a] rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#EF8E4C] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FCE482] opacity-10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            {/* Quote icon */}
            <Quote className="w-12 h-12 md:w-16 md:h-16 text-[#FCE482] mb-6 opacity-50" fill="#FCE482" />
            
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Testimonial content */}
              <div className="md:col-span-2">
                <p className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-6" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? (
                    <>
                      "Weekday afternoons used to be <span className="text-[#FCE482]">dead</span> for us. 
                      Now, ROLL brings in <span className="text-[#4ADE80]">5-10 extra tables</span> every day between 2 and 4 PM. 
                      It covers our staffing costs for the whole shift."
                    </>
                  ) : (
                    <>
                      "Chiều các ngày trong tuần từng <span className="text-[#FCE482]">chết</span> với chúng tôi. 
                      Giờ đây, ROLL mang lại <span className="text-[#4ADE80]">5-10 bàn thêm</span> mỗi ngày từ 2-4 giờ chiều. 
                      Nó trang trải chi phí nhân viên cho cả ca."
                    </>
                  )}
                </p>
                
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#EF8E4C] to-[#FF6B35] rounded-full flex items-center justify-center text-white text-2xl font-black">
                    A
                  </div>
                  <div>
                    <div className="text-white font-black text-xl mb-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      Anh Tuấn
                    </div>
                    <div className="text-[#FCE482] text-sm font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Owner, Phở 79 • District 1' : 'Chủ Nhà Hàng, Phở 79 • Quận 1'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats card */}
              <div className="bg-gradient-to-br from-white to-[#FFFEF6] rounded-2xl p-6 shadow-xl">
                <div className="text-center mb-4">
                  <Star className="w-10 h-10 mx-auto text-[#FFD93D] mb-2" fill="#FFD93D" />
                  <div className="text-sm font-black opacity-60 mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'EARLY ADOPTER' : 'ĐỐI TÁC ĐẦU TIÊN'}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 text-center shadow-md">
                    <div className="text-2xl font-black text-[#4ADE80]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      5-10
                    </div>
                    <div className="text-xs opacity-60" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Tables/Day' : 'Bàn/Ngày'}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center shadow-md">
                    <div className="text-2xl font-black text-[#EF8E4C]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      2-4 PM
                    </div>
                    <div className="text-xs opacity-60" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Peak ROLL Hours' : 'Giờ ROLL Cao'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional testimonial cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Testimonial 2 */}
          <div className="bg-gradient-to-br from-[#FFFEF6] to-white rounded-2xl p-6 shadow-lg border-2 border-[#FFFEF6]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FCE482] to-[#FFD93D] rounded-full flex items-center justify-center text-[#2D2D2D] text-xl font-black">
                L
              </div>
              <div>
                <div className="font-black text-lg" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  Linh Chi
                </div>
                <div className="text-sm opacity-60 font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Manager, Cơm Tấm 24 • District 3' : 'Quản Lý, Cơm Tấm 24 • Quận 3'}
                </div>
              </div>
            </div>
            <p className="text-base italic opacity-80" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' 
                ? '"The dashboard is so simple. I set it Monday morning and don\'t touch it again all week. Revenue just comes in during our slow hours."'
                : '"Bảng điều khiển rất đơn giản. Tôi đặt sáng thứ Hai và không cần động vào nữa cả tuần. Doanh thu tự động vào trong giờ vắng."'}
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gradient-to-br from-[#FFFEF6] to-white rounded-2xl p-6 shadow-lg border-2 border-[#FFFEF6]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4ADE80] to-[#22C55E] rounded-full flex items-center justify-center text-white text-xl font-black">
                M
              </div>
              <div>
                <div className="font-black text-lg" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  Minh Đức
                </div>
                <div className="text-sm opacity-60 font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Owner, BBQ House • District 1' : 'Chủ Nhà Hàng, BBQ House • Quận 1'}
                </div>
              </div>
            </div>
            <p className="text-base italic opacity-80" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' 
                ? '"We\'re capturing revenue we used to lose. The customers are real, they show up on time, and they often order more than the discounted amount."'
                : '"Chúng tôi đang nắm bắt doanh thu mà trước đây mất đi. Khách hàng thực, đến đúng giờ, và thường gọi nhiều hơn số tiền giảm giá."'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

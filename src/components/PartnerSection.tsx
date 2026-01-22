import React from 'react';
import chefMascot from 'figma:asset/368fb2dcac16a67e6b6b930208e59f27e7774d75.png';
import { TrendingUp, Users, BarChart3, Star, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language, translations } from '../translations/translations';

interface PartnerSectionProps {
  language: Language;
}

export function PartnerSection({ language }: PartnerSectionProps) {
  const t = translations[language].partner;

  return (
    <div className="bg-gradient-to-br from-[#FFFEF6] via-white to-[#FFF5E1]">
      {/* Hero Section - Vietnamese Style */}
      <div className="relative min-h-screen pt-20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <Star className="absolute top-32 left-[10%] w-8 h-8 text-[#FCE482] opacity-40 animate-pulse" fill="#FCE482" />
          <Star className="absolute top-[45%] right-[15%] w-6 h-6 text-[#EF8E4C] opacity-30 animate-pulse" fill="#EF8E4C" />
          <Sparkles className="absolute bottom-[30%] left-[20%] w-10 h-10 text-[#FCE482] opacity-25" />
          <div className="absolute top-20 right-0 w-64 h-64 bg-[#FCE482] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EF8E4C] opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EF8E4C] to-[#FCE482] px-6 py-2 rounded-full shadow-lg mb-6">
                <TrendingUp className="w-5 h-5 text-white" strokeWidth={3} />
                <span className="text-sm font-black text-white tracking-wide" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {t.badge}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {t.hero1}<br />
                {t.hero2}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF8E4C] to-[#FF6B35]">{t.hero3}</span>
              </h1>
              
              <p className="text-xl md:text-2xl leading-relaxed text-[#2D2D2D] opacity-90 mb-8" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {t.heroDesc}
              </p>

              <button className="w-full md:w-auto bg-gradient-to-r from-[#EF8E4C] to-[#FF6B35] text-white px-12 py-5 rounded-2xl text-xl font-black shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                <span className="flex items-center justify-center gap-3" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {t.cta}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-white rounded-2xl shadow-md">
                  <div className="text-3xl font-black text-[#EF8E4C]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>200+</div>
                  <div className="text-sm opacity-70" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Partners' : 'Đối tác'}
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-md">
                  <div className="text-3xl font-black text-[#EF8E4C]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>+23%</div>
                  <div className="text-sm opacity-70" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Revenue' : 'Doanh thu'}
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-md">
                  <div className="text-3xl font-black text-[#EF8E4C]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>50K+</div>
                  <div className="text-sm opacity-70" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Diners' : 'Thực khách'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl p-12 border-4 border-[#EF8E4C]">
                <div className="absolute -top-16 -right-8">
                  <img 
                    src={chefMascot}
                    alt="Partner Dashboard"
                    className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl"
                    style={{ 
                      animation: 'bounce 3s ease-in-out infinite',
                      transform: 'rotate(-10deg)'
                    }}
                  />
                  <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-[#FCE482] animate-pulse" fill="#FCE482" />
                </div>

                <div className="space-y-4 pt-8">
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#FFFEF6] to-white rounded-2xl">
                    <CheckCircle2 className="w-6 h-6 text-[#4ADE80]" strokeWidth={3} />
                    <span className="font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Fill Empty Tables' : 'Lấp đầy bàn trống'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#FFFEF6] to-white rounded-2xl">
                    <CheckCircle2 className="w-6 h-6 text-[#4ADE80]" strokeWidth={3} />
                    <span className="font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Boost Off-Peak Revenue' : 'Tăng doanh thu giờ thấp điểm'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#FFFEF6] to-white rounded-2xl">
                    <CheckCircle2 className="w-6 h-6 text-[#4ADE80]" strokeWidth={3} />
                    <span className="font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Full Control Over Deals' : 'Kiểm soát hoàn toàn ưu đãi'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#4ADE80] to-[#22C55E] text-white px-8 py-4 rounded-2xl shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-4xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>+23%</div>
                  <div className="text-sm font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'PROFIT' : 'LỢI NHUẬN'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Problems - Card Style */}
      <div className="py-20 md:py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {t.problemsTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem 1 */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-[#FFFEF6]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#EF8E4C] to-[#FF6B35] flex items-center justify-center text-white text-2xl font-black mb-6 group-hover:scale-110 transition-transform" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                01
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {t.problem1Title}
              </h3>
              <ul className="space-y-3 text-lg opacity-80" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {t.problem1Items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#EF8E4C] font-black">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Problem 2 */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-[#FFFEF6]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FCE482] to-[#FFD93D] flex items-center justify-center text-[#2D2D2D] text-2xl font-black mb-6 group-hover:scale-110 transition-transform" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                02
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {t.problem2Title}
              </h3>
              <ul className="space-y-3 text-lg opacity-80" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {t.problem2Items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#EF8E4C] font-black">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Impact - Modern Vietnamese Style */}
      <div className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Star className="inline-block w-12 h-12 text-[#FCE482] mb-4" fill="#FCE482" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? 'Restaurant Revenue Impact' : 'Tác Động Doanh Thu Nhà Hàng'}
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#EF8E4C]">
            {/* Header */}
            <div className="grid grid-cols-2 bg-gradient-to-r from-[#EF8E4C] to-[#FF6B35] text-white">
              <div className="p-6 border-r-4 border-white">
                <h3 className="text-2xl md:text-3xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Restaurant' : 'Nhà Hàng'}
                </h3>
              </div>
              <div className="p-6">
                <h3 className="text-2xl md:text-3xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>ROLL</h3>
              </div>
            </div>

            {/* Monthly Revenue */}
            <div className="grid grid-cols-2 border-t-4 border-[#EF8E4C]">
              <div className="p-6 border-r-4 border-[#FFFEF6] bg-white">
                <div className="text-sm opacity-60 mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Monthly Revenue' : 'Doanh Thu Tháng'}
                </div>
                <div className="space-y-1">
                  <div className="text-sm" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Direct Sales & Takeaway' : 'Bán trực tiếp & Mang về'}
                  </div>
                  <div className="text-2xl md:text-3xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>1,000,000,000đ</div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#FFFEF6] to-white">
                <div className="text-sm opacity-60 mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Revenue Increase' : 'Tăng Doanh Thu'}
                </div>
                <div className="space-y-1">
                  <div className="text-sm" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Direct Sales & Takeaway (~10%)' : 'Bán trực tiếp & Mang về (~10%)'}
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-[#4ADE80]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>+100,000,000đ</div>
                </div>
              </div>
            </div>

            {/* Monthly Costs */}
            <div className="grid grid-cols-2 border-t-4 border-[#FFFEF6]">
              <div className="p-6 border-r-4 border-[#FFFEF6] bg-white">
                <div className="text-sm opacity-60 mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Monthly Costs' : 'Chi Phí Tháng'}
                </div>
                <div className="space-y-1">
                  <div className="text-sm" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Fixed (Staff, Rent, Materials...)' : 'Cố định (Nhân viên, Thuê...)'}
                  </div>
                  <div className="text-2xl md:text-3xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>850,000,000đ</div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#FFFEF6] to-white">
                <div className="text-sm opacity-60 mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Additional Costs' : 'Chi Phí Thêm'}
                </div>
                <div className="space-y-2">
                  <div className="text-sm" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    • {language === 'en' ? 'Avg. platform discount 25%' : 'Giảm giá TB 25%'}
                  </div>
                  <div className="text-sm" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    • {language === 'en' ? 'Materials cost 30%' : 'Chi phí nguyên liệu 30%'}
                  </div>
                  <div className="text-sm" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    • {language === 'en' ? 'Service fee 10%' : 'Phí dịch vụ 10%'}
                  </div>
                  <div className="text-2xl font-black text-[#EF8E4C]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>65,000,000đ</div>
                </div>
              </div>
            </div>

            {/* Profit */}
            <div className="grid grid-cols-2 border-t-4 border-[#FFFEF6]">
              <div className="p-6 border-r-4 border-[#FFFEF6] bg-white">
                <div className="text-sm opacity-60 mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Profit' : 'Lợi Nhuận'}
                </div>
                <div className="text-2xl md:text-3xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>150,000,000đ</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#FFFEF6] to-white">
                <div className="text-sm opacity-60 mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Profit' : 'Lợi Nhuận'}
                </div>
                <div className="text-2xl md:text-3xl font-black text-[#4ADE80]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>35,000,000đ</div>
              </div>
            </div>

            {/* Total Footer */}
            <div className="bg-gradient-to-r from-[#4ADE80] to-[#22C55E] p-8 border-t-4 border-white text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <span className="text-xl md:text-2xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'TOTAL PROFIT INCREASE' : 'TỔNG TĂNG LỢI NHUẬN'}
                </span>
                <span className="text-3xl md:text-5xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  185,000,000đ ~ +23%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Competitive Advantages - Vietnamese Card Style */}
      <div className="py-20 md:py-32 px-6 bg-gradient-to-br from-[#FFFEF6] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? 'Competitive Advantages Using ROLL' : 'Lợi Thế Cạnh Tranh Với ROLL'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-[#FFFEF6]">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#EF8E4C] to-[#FF6B35] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <TrendingUp className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black mb-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'Increase Revenue During Off-Peak' : 'Tăng Doanh Thu Giờ Thấp Điểm'}
              </h3>
            </div>

            <div className="group bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-[#FFFEF6]">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#FCE482] to-[#FFD93D] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <Users className="w-12 h-12 text-[#2D2D2D]" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black mb-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'Increase Customers From App Users' : 'Tăng Khách Hàng Từ App'}
              </h3>
            </div>

            <div className="group bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-[#FFFEF6]">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#4ADE80] to-[#22C55E] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <BarChart3 className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black mb-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'Active Performance Tracking & Control' : 'Theo Dõi & Kiểm Soát Hiệu Quả'}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* How ROLL Works - 4 Steps with Modern Design */}
      <div className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? 'How ROLL Works' : 'ROLL Hoạt Động Như Thế Nào'}
            </h2>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="group flex gap-6 items-start">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#EF8E4C] to-[#FF6B35] flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                <span className="text-3xl font-black text-white" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>1</span>
              </div>
              <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border-2 border-[#FFFEF6]">
                <h3 className="text-2xl font-black mb-4 text-[#EF8E4C]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Restaurant Creates Deal via Partner App' : 'Nhà Hàng Tạo Ưu Đãi Qua App Đối Tác'}
                </h3>
                <p className="mb-4 text-lg" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' 
                    ? 'Restaurants proactively set up deals that align with their business reality and kitchen capacity.'
                    : 'Nhà hàng chủ động thiết lập ưu đãi phù hợp với thực tế kinh doanh và năng lực bếp.'}
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#4ADE80]" />
                    <span style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Application date' : 'Ngày áp dụng'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#4ADE80]" />
                    <span style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Time slots' : 'Khung giờ'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#4ADE80]" />
                    <span style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Deal quantity' : 'Số lượng deal'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#4ADE80]" />
                    <span style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Discount level' : 'Mức giảm giá'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group flex gap-6 items-start">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FCE482] to-[#FFD93D] flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                <span className="text-3xl font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>2</span>
              </div>
              <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border-2 border-[#FFFEF6]">
                <h3 className="text-2xl font-black mb-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif', color: '#FFD93D' }}>
                  {language === 'en' ? 'Customer Receives Deal on ROLL App' : 'Khách Hàng Nhận Ưu Đãi Trên App ROLL'}
                </h3>
                <p className="text-lg" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en'
                    ? 'Your restaurant\'s deals are displayed on the ROLL app to customers who need them. Customers explore, receive deals, and come at the right time.'
                    : 'Ưu đãi nhà hàng được hiển thị trên app ROLL cho khách hàng cần. Khách khám phá, nhận ưu đãi và đến đúng giờ.'}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group flex gap-6 items-start">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4ADE80] to-[#22C55E] flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                <span className="text-3xl font-black text-white" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>3</span>
              </div>
              <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border-2 border-[#FFFEF6]">
                <h3 className="text-2xl font-black mb-4 text-[#22C55E]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Customer Pays via ROLL App' : 'Khách Hàng Thanh Toán Qua App ROLL'}
                </h3>
                <p className="text-lg" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en'
                    ? 'Customers scan QR code, enter bill amount, and confirm discounted payment. Simple and seamless.'
                    : 'Khách quét mã QR, nhập số tiền hóa đơn và xác nhận thanh toán giảm giá. Đơn giản và liền mạch.'}
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group flex gap-6 items-start">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#9333EA] to-[#C084FC] flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                <span className="text-3xl font-black text-white" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>4</span>
              </div>
              <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border-2 border-[#FFFEF6]">
                <h3 className="text-2xl font-black mb-4 text-[#9333EA]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Track Revenue & Performance' : 'Theo Dõi Doanh Thu & Hiệu Quả'}
                </h3>
                <p className="text-lg mb-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en'
                    ? 'Track customers, revenue, time slot performance, and customer feedback through the ROLL dashboard.'
                    : 'Theo dõi khách hàng, doanh thu, hiệu quả khung giờ và phản hồi khách qua bảng điều khiển ROLL.'}
                </p>
                <div className="inline-block bg-gradient-to-r from-[#FFFEF6] to-white px-4 py-2 rounded-full text-sm font-black border-2 border-[#9333EA]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  📊 {language === 'en' ? 'Weekly Reports Sent' : 'Báo Cáo Hàng Tuần'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner CTA - Vietnamese Style */}
      <div className="py-20 md:py-32 px-6 bg-gradient-to-r from-[#2D2D2D] to-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Star className="absolute top-20 left-20 w-16 h-16 text-[#FCE482] opacity-20" fill="#FCE482" />
          <Star className="absolute bottom-20 right-20 w-12 h-12 text-[#EF8E4C] opacity-20" fill="#EF8E4C" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            {language === 'en' ? 'READY TO FILL YOUR TABLES?' : 'SẴN SÀNG LẤP ĐẦY BÀN?'}
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            {language === 'en' 
              ? 'Join hundreds of restaurants already maximizing their revenue with ROLL.'
              : 'Tham gia hàng trăm nhà hàng đang tối đa hóa doanh thu với ROLL.'}
          </p>
          <button className="bg-gradient-to-r from-[#FCE482] to-[#FFD93D] text-[#2D2D2D] px-12 py-6 rounded-2xl text-xl md:text-2xl font-black shadow-2xl hover:scale-105 transition-all duration-300 group">
            <span className="flex items-center justify-center gap-3" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? 'BECOME A PARTNER TODAY' : 'ĐĂNG KÝ ĐỐI TÁC NGAY'}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

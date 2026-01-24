import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';
import { Language } from '../translations/translations';

interface ROICalculatorProps {
  language: Language;
}

export function ROICalculator({ language }: ROICalculatorProps) {
  const [emptyTables, setEmptyTables] = useState(5);
  const [avgSpend, setAvgSpend] = useState(200000);
  const [daysOpen, setDaysOpen] = useState(26);

  // Calculate potential monthly revenue
  // Assuming 3-hour off-peak period daily
  const potentialRevenue = emptyTables * avgSpend * daysOpen;
  
  // ROLL captures ~70% of this (accounting for discount and commission)
  const capturedRevenue = potentialRevenue * 0.35; // Net profit after costs

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="py-20 md:py-32 px-6 bg-gradient-to-br from-[#FFFEF6] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#FCE482] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FCE482] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] px-6 py-3 rounded-full mb-6 shadow-lg">
            <Calculator className="w-5 h-5 text-[#2D2D2D]" />
            <span className="text-sm font-black text-[#2D2D2D] tracking-wide" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? 'REVENUE CALCULATOR' : 'TÍNH TOÁN DOANH THU'}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            {language === 'en' ? (
              <>See What 3 Empty Tables<br />Are Costing You</>
            ) : (
              <>Xem 3 Bàn Trống<br />Đang Khiến Bạn Mất Bao Nhiêu</>
            )}
          </h2>

          <p className="text-xl md:text-2xl text-[#2D2D2D] opacity-80 max-w-3xl mx-auto" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            {language === 'en' 
              ? 'Your tables are perishable. Like fresh fish. Every hour they sit empty, that revenue is gone forever.'
              : 'Bàn của bạn có hạn sử dụng. Giống như cá tươi. Mỗi giờ để trống, doanh thu đó mất mãi mãi.'}
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-[#FCE482]">
          {/* Sliders Section */}
          <div className="space-y-8 mb-8">
            {/* Slider 1: Empty Tables */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg md:text-xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' 
                    ? 'Average empty tables (2PM-5PM)?'
                    : 'Trung bình bàn trống (2PM-5PM)?'}
                </label>
                <span className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {emptyTables}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={emptyTables}
                onChange={(e) => setEmptyTables(Number(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-[#FFFEF6] to-[#FCE482] rounded-full appearance-none cursor-pointer"
                style={{
                  WebkitAppearance: 'none',
                }}
              />
              <style>{`
                input[type="range"]::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  appearance: none;
                  width: 28px;
                  height: 28px;
                  border-radius: 50%;
                  background: linear-gradient(135deg, #FCE482, #F9DB4A);
                  cursor: pointer;
                  border: 3px solid white;
                  box-shadow: 0 4px 12px rgba(252, 228, 130, 0.4);
                }
                input[type="range"]::-moz-range-thumb {
                  width: 28px;
                  height: 28px;
                  border-radius: 50%;
                  background: linear-gradient(135deg, #FCE482, #F9DB4A);
                  cursor: pointer;
                  border: 3px solid white;
                  box-shadow: 0 4px 12px rgba(252, 228, 130, 0.4);
                }
              `}</style>
              <div className="flex justify-between text-sm opacity-60 mt-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                <span>1</span>
                <span>20</span>
              </div>
            </div>

            {/* Slider 2: Average Spend */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg md:text-xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' 
                    ? 'Average spend per head (VND)?'
                    : 'Chi tiêu trung bình/người (VND)?'}
                </label>
                <span className="text-2xl md:text-3xl font-black text-[#EF8E4C]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {formatCurrency(avgSpend)}đ
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="500000"
                step="10000"
                value={avgSpend}
                onChange={(e) => setAvgSpend(Number(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-[#FFFEF6] to-[#FCE482] rounded-full appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm opacity-60 mt-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                <span>50K</span>
                <span>500K</span>
              </div>
            </div>

            {/* Slider 3: Days Open */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg md:text-xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' 
                    ? 'Days open per month?'
                    : 'Số ngày mở cửa/tháng?'}
                </label>
                <span className="text-2xl md:text-3xl font-black text-[#EF8E4C]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {daysOpen}
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="30"
                value={daysOpen}
                onChange={(e) => setDaysOpen(Number(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-[#FFFEF6] to-[#FCE482] rounded-full appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm opacity-60 mt-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                <span>20</span>
                <span>30</span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="border-t-4 border-[#FFFEF6] pt-8">
            <div className="bg-gradient-to-br from-[#EF8E4C] to-[#FF6B35] rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 md:w-10 md:h-10" strokeWidth={3} />
                  <p className="text-lg md:text-xl font-black opacity-90" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' 
                      ? 'YOU ARE MISSING AN ESTIMATED'
                      : 'BẠN ĐANG MẤT ƯỚC TÍNH'}
                  </p>
                </div>
                
                <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 drop-shadow-lg" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {formatCurrency(capturedRevenue)}đ
                </div>
                
                <p className="text-lg md:text-xl font-black mb-6 opacity-90" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' 
                    ? 'in pure profit per month'
                    : 'lợi nhuận thuần mỗi tháng'}
                </p>

                <div className="inline-block bg-white text-[#EF8E4C] px-8 py-4 rounded-2xl shadow-xl">
                  <div className="text-sm font-black opacity-60 mb-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'POTENTIAL REVENUE' : 'DOANH THU TIỀM NĂNG'}
                  </div>
                  <div className="text-2xl md:text-3xl font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {formatCurrency(potentialRevenue)}đ
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center">
              <button className="w-full md:w-auto bg-gradient-to-r from-[#2D2D2D] to-[#1a1a1a] text-white px-12 py-6 rounded-2xl text-xl md:text-2xl font-black shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                <span className="flex items-center justify-center gap-3" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  <DollarSign className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  {language === 'en' 
                    ? 'Capture This Revenue Now'
                    : 'Nắm Bắt Doanh Thu Ngay'}
                </span>
              </button>
              
              <p className="text-sm opacity-60 mt-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' 
                  ? 'Zero upfront cost. We only win when you win.'
                  : 'Không phí trả trước. Chúng tôi chỉ thắng khi bạn thắng.'}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom explanation */}
        <div className="mt-8 text-center">
          <p className="text-base md:text-lg opacity-70 max-w-2xl mx-auto" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            {language === 'en' 
              ? '* Calculation based on off-peak hours (2PM-5PM). Actual results may vary. Your rent and staff are already paid for—this marginal revenue boosts your net profit significantly.'
              : '* Tính toán dựa trên giờ thấp điểm (2PM-5PM). Kết quả thực tế có thể khác nhau. Tiền thuê và nhân viên đã được trả—doanh thu này tăng lợi nhuận ròng đáng kể.'}
          </p>
        </div>
      </div>
    </div>
  );
}
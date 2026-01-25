import React from 'react';
import { AlertTriangle, X, TrendingDown, Fish } from 'lucide-react';
import { Language } from '../translations/translations';
import { motion, useInView } from 'motion/react';

interface PainAgitationProps {
  language: Language;
}

export function PainAgitation({ language }: PainAgitationProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const timeSlotVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <div ref={ref} className="py-20 md:py-32 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main headline */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Fish className="w-10 h-10 text-[#FCE482]" />
            <AlertTriangle className="w-10 h-10 text-red-500 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            {language === 'en' ? (
              <>Empty Tables Are Lost Revenue.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Time-Sensitive Inventory</span>.</>
            ) : (
              <>Bàn Trống Là Mất Doanh Thu.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Tài Sản Có Thời Hạn</span>.</>
            )}
          </h2>

          <p className="text-xl md:text-2xl text-[#2D2D2D] opacity-80 max-w-3xl mx-auto" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            {language === 'en' 
              ? 'Every hour a table sits empty, that potential revenue is gone forever. Yet, you still pay the rent, electricity, and staff for that hour.'
              : 'Mỗi giờ một bàn để trống, doanh thu tiềm năng đó mất mãi mãi. Nhưng bạn vẫn phải trả tiền thuê, điện và nhân viên cho giờ đó.'}
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Traditional Restaurant Day */}
          <motion.div 
            className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 border-4 border-red-200 relative overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="absolute top-4 right-4">
              <X className="w-12 h-12 text-red-500" strokeWidth={4} />
            </div>

            <h3 className="text-2xl md:text-3xl font-black mb-6 text-red-600" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? 'Traditional Day' : 'Ngày Truyền Thống'}
            </h3>

            {/* Timeline visualization */}
            <div className="space-y-4">
              {/* 12PM - Peak */}
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm font-black opacity-60" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>12PM</div>
                <div className="flex-1 h-12 bg-gradient-to-r from-[#4ADE80] to-[#22C55E] rounded-lg flex items-center justify-center text-white font-black shadow-lg">
                  {language === 'en' ? 'BUSY' : 'ĐÔ'}
                </div>
              </div>

              {/* 2PM - Dead valley */}
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm font-black opacity-60" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>2PM</div>
                <div className="flex-1 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-black border-2 border-dashed border-gray-400 relative">
                  {language === 'en' ? 'EMPTY' : 'TRỐNG'}
                  <TrendingDown className="absolute -right-3 -top-3 w-8 h-8 text-red-500" />
                </div>
              </div>

              {/* 3PM - Still empty */}
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm font-black opacity-60" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>3PM</div>
                <div className="flex-1 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-black border-2 border-dashed border-gray-400">
                  {language === 'en' ? 'EMPTY' : 'TRỐNG'}
                </div>
              </div>

              {/* 4PM - Still empty */}
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm font-black opacity-60" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>4PM</div>
                <div className="flex-1 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-black border-2 border-dashed border-gray-400">
                  {language === 'en' ? 'EMPTY' : 'TRỐNG'}
                </div>
              </div>

              {/* 6PM - Peak again */}
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm font-black opacity-60" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>6PM</div>
                <div className="flex-1 h-12 bg-gradient-to-r from-[#4ADE80] to-[#22C55E] rounded-lg flex items-center justify-center text-white font-black shadow-lg">
                  {language === 'en' ? 'BUSY' : 'ĐÔ'}
                </div>
              </div>
            </div>

            {/* Loss calculation */}
            <div className="mt-6 p-4 bg-red-100 rounded-xl border-2 border-red-300">
              <div className="text-sm font-black text-red-600 mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'REVENUE LOST (2PM-5PM)' : 'DOANH THU MẤT (2PM-5PM)'}
              </div>
              <div className="text-3xl font-black text-red-600" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                -5,000,000đ
              </div>
              <div className="text-xs opacity-60 mt-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'per day' : 'mỗi ngày'}
              </div>
            </div>

            {/* Payout timing */}
            <div className="mt-4 p-3 bg-yellow-50 rounded-xl border-2 border-yellow-300 flex items-center justify-between">
              <span className="text-sm font-black text-yellow-700" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'Payout:' : 'Thanh Toán:'}
              </span>
              <span className="text-sm font-black text-yellow-700" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'Weekly/Monthly' : 'Hàng Tuần/Tháng'}
              </span>
            </div>
          </motion.div>

          {/* ROLL Day */}
          <motion.div 
            className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 border-4 border-[#4ADE80] relative overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="absolute top-4 right-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4ADE80] to-[#22C55E] rounded-full flex items-center justify-center text-white font-black text-2xl">
                ✓
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-black mb-6 text-[#22C55E]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? 'ROLL Day' : 'Ngày ROLL'}
            </h3>

            {/* Timeline visualization */}
            <div className="space-y-4">
              {/* 12PM - Peak */}
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm font-black opacity-60" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>12PM</div>
                <div className="flex-1 h-12 bg-gradient-to-r from-[#4ADE80] to-[#22C55E] rounded-lg flex items-center justify-center text-white font-black shadow-lg">
                  {language === 'en' ? 'BUSY' : 'ĐÔ'}
                </div>
              </div>

              {/* 2PM - ROLL fills it */}
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm font-black opacity-60" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>2PM</div>
                <div className="flex-1 h-12 bg-gradient-to-r from-[#FCE482] to-[#FFD93D] rounded-lg flex items-center justify-center text-[#2D2D2D] font-black shadow-lg animate-pulse">
                  ROLL 🎯
                </div>
              </div>

              {/* 3PM - ROLL continues */}
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm font-black opacity-60" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>3PM</div>
                <div className="flex-1 h-12 bg-gradient-to-r from-[#FCE482] to-[#FFD93D] rounded-lg flex items-center justify-center text-[#2D2D2D] font-black shadow-lg">
                  ROLL 🎯
                </div>
              </div>

              {/* 4PM - ROLL continues */}
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm font-black opacity-60" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>4PM</div>
                <div className="flex-1 h-12 bg-gradient-to-r from-[#FCE482] to-[#FFD93D] rounded-lg flex items-center justify-center text-[#2D2D2D] font-black shadow-lg">
                  ROLL 🎯
                </div>
              </div>

              {/* 6PM - Peak again */}
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm font-black opacity-60" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>6PM</div>
                <div className="flex-1 h-12 bg-gradient-to-r from-[#4ADE80] to-[#22C55E] rounded-lg flex items-center justify-center text-white font-black shadow-lg">
                  {language === 'en' ? 'BUSY' : 'ĐÔ'}
                </div>
              </div>
            </div>

            {/* Revenue gain */}
            <div className="mt-6 p-4 bg-green-100 rounded-xl border-2 border-[#4ADE80]">
              <div className="text-sm font-black text-[#22C55E] mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'REVENUE CAPTURED (2PM-5PM)' : 'DOANH THU BẮT (2PM-5PM)'}
              </div>
              <div className="text-3xl font-black text-[#22C55E]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                +1,750,000đ
              </div>
              <div className="text-xs opacity-60 mt-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'net profit per day' : 'lợi nhuận ròng/ngày'}
              </div>
            </div>

            {/* Payout timing - Instant */}
            <div className="mt-4 p-3 bg-green-100 rounded-xl border-2 border-[#4ADE80] flex items-center justify-between">
              <span className="text-sm font-black text-[#22C55E]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'Payout:' : 'Thanh Toán:'}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-base">⚡</span>
                <span className="text-sm font-black text-[#22C55E]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Instant (A2A)' : 'Ngay Lập Tức (A2A)'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA box */}
        <motion.div 
          className="bg-gradient-to-r from-[#2D2D2D] to-[#1a1a1a] text-white rounded-3xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            {language === 'en' 
              ? 'ROLL Turns Dead Time Into Active Revenue'
              : 'ROLL Biến Giờ Chết Thành Doanh Thu Tích Cực'}
          </h3>
          <p className="text-lg md:text-xl opacity-90" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
            {language === 'en' 
              ? 'Your rent, electricity, and staff costs are fixed. Every table filled during off-peak hours goes straight to your bottom line.'
              : 'Chi phí thuê, điện và nhân viên của bạn là cố định. Mỗi bàn lấp đầy trong giờ thấp điểm đều đi thẳng vào lợi nhuận ròng.'}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
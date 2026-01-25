import React from 'react';
import { ArrowRight, Clock, MapPin, Sparkles, Zap, CheckCircle } from 'lucide-react';
import { Language } from '../translations/translations';
import { motion } from 'motion/react';

interface HeroDinerProps {
  language: Language;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3
    }
  }
};

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function HeroDiner({ language }: HeroDinerProps) {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden bg-white">
      {/* Yellow gradient blobs - subtle and lighter */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FCE482] to-white opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#FCE482] to-[#FFFEF6] opacity-15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge - Yellow gradient background */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F9DB4A] to-[#FCE482] px-6 py-3 rounded-full shadow-md mb-6">
              <Sparkles className="w-5 h-5 text-[#2D2D2D]" fill="#2D2D2D" />
              <span className="text-sm font-black text-[#2D2D2D] tracking-wide" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'TIME-LIMITED DEALS' : 'ƯU ĐÃI THEO GIỜ'}
              </span>
            </motion.div>

            {/* Main Headline - Clean black with yellow highlights */}
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? (
                <>
                  Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Deals</span>.<br />
                  Dine <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Better</span>.
                </>
              ) : (
                <>
                  Khám Phá <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Deal</span>.<br />
                  Ăn <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Ngon Hơn</span>.
                </>
              )}
            </motion.h1>
            
            {/* Subheadline - professional */}
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' 
                ? 'Access exclusive dining offers across Saigon. Book instantly, save consistently.'
                : 'Truy cập ưu đãi ẩm thực độc quyền khắp Sài Gòn. Đặt ngay, tiết kiệm luôn.'}
            </motion.p>

            {/* Key features - clean list */}
            <motion.div variants={itemVariants} className="space-y-4 mb-10">
              {[
                { en: 'Live deals updated daily', vi: 'Deal mới mỗi ngày' },
                { en: 'Instant booking confirmation', vi: 'Xác nhận đặt bàn tức thì' },
                { en: 'Save up to 50% at 200+ restaurants', vi: 'Tiết kiệm đến 50% tại 200+ nhà hàng' }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <CheckCircle className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-base md:text-lg text-[#2D2D2D] font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? item.en : item.vi}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* App Store Buttons - refined */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* Apple App Store */}
              <motion.button 
                className="bg-[#2D2D2D] text-white px-6 py-3.5 rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-70" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Download on the' : 'Tải về trên'}
                  </div>
                  <div className="text-lg font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    App Store
                  </div>
                </div>
              </motion.button>

              {/* Google Play Store */}
              <motion.button 
                className="bg-[#2D2D2D] text-white px-6 py-3.5 rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-70" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'GET IT ON' : 'Tải về trên'}
                  </div>
                  <div className="text-lg font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    Google Play
                  </div>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right - "Golden Hour Feast" Visual - Floating on white */}
          <motion.div 
            className="relative"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main food image - floating with shadow, no background container */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1701480253822-1842236c9a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcGhvJTIwYm93bCUyMGZvb2R8ZW58MXx8fHwxNzY5MjU4NDU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Delicious Vietnamese Food"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Glassmorphism AR-style discount card overlay */}
              <motion.div 
                className="absolute top-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-white transform hover:scale-105 transition-transform duration-300"
                variants={floatingVariants}
                animate="animate"
                whileHover={{ scale: 1.08, rotate: 2 }}
              >
                {/* Discount percentage - Yellow gradient */}
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] text-center mb-3" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  40% OFF
                </div>
                
                {/* Time constraint */}
                <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#FAFAFA] to-white px-4 py-2 rounded-xl mb-3 border border-gray-100">
                  <Clock className="w-5 h-5 text-[#FCE482]" />
                  <span className="text-sm font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Entry by 14:30 Today' : 'Vào trước 14:30 hôm nay'}
                  </span>
                </div>

                {/* Restaurant info */}
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-600" />
                  <div>
                    <div className="text-sm font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Ăn Ăn Saigon' : 'Ăn Ăn Saigon'}
                    </div>
                    <div className="text-xs text-gray-500" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'District 1' : 'Quận 1'}
                    </div>
                  </div>
                </div>

                {/* Urgency indicator - yellow gradient badge */}
                <div className="mt-3 text-center">
                  <div className="inline-flex items-center gap-1 bg-gradient-to-r from-[#F9DB4A] to-[#FCE482] text-[#2D2D2D] px-3 py-1 rounded-full text-xs font-black">
                    <Zap className="w-3 h-3" fill="#2D2D2D" />
                    {language === 'en' ? '3 slots left' : 'Còn 3 chỗ'}
                  </div>
                </div>
              </motion.div>

              {/* Floating "Live Now" badge - green accent */}
              <motion.div 
                className="absolute bottom-8 left-8 bg-gradient-to-r from-[#4ADE80] to-[#22C55E] text-white px-6 py-3 rounded-xl shadow-xl font-black text-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
              >
                <span className="flex items-center gap-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                  {language === 'en' ? 'LIVE NOW' : 'ĐANG DIỄN RA'}
                </span>
              </motion.div>
            </div>

            {/* Additional floating element - emphasizing the value */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white text-[#2D2D2D] px-8 py-4 rounded-2xl shadow-2xl border-2 border-[#F9DB4A] transform -rotate-6 hover:rotate-0 transition-transform duration-300"
              initial={{ opacity: 0, rotate: -20, y: 20 }}
              animate={{ opacity: 1, rotate: -6, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6, type: "spring" }}
              whileHover={{ rotate: 0, scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-sm font-black text-gray-600 mb-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'AVG. SAVINGS' : 'TIẾT KIỆM TB'}
                </div>
                <div className="text-3xl font-black text-[#4ADE80]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  150K VND
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
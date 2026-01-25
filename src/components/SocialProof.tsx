import React, { useState, useEffect } from 'react';
import { Star, TrendingUp, MapPin, Clock, ChevronRight, Utensils, Coffee, Pizza, ChevronDown } from 'lucide-react';
import { Language } from '../translations/translations';
import { Marquee } from './Marquee';
import { motion, useInView } from 'framer-motion';

interface SocialProofProps {
  language: Language;
}

export function SocialProof({ language }: SocialProofProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'vietnamese' | 'western' | 'asian'>('all');
  const [liveDealsCount, setLiveDealsCount] = useState(48);
  const [selectedDeal, setSelectedDeal] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animate live deals counter
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveDealsCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newCount = prev + change;
        return Math.max(45, Math.min(52, newCount));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Mock restaurant deal cards with images and discount badges
  const allRestaurantDeals = [
    {
      id: 1,
      name: 'Phở Lệ',
      district: language === 'en' ? 'District 1' : 'Quận 1',
      discount: '40%',
      time: '14:30',
      category: 'vietnamese',
      cuisine: language === 'en' ? 'Vietnamese' : 'Việt Nam',
      image: 'https://images.unsplash.com/photo-1701480253822-1842236c9a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcGhvJTIwYm93bCUyMGZvb2R8ZW58MXx8fHwxNzY5MjU4NDU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      name: 'Pizza 4P\'s',
      district: language === 'en' ? 'District 1' : 'Quận 1',
      discount: '35%',
      time: '15:00',
      category: 'western',
      cuisine: language === 'en' ? 'Italian' : 'Ý',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YXxlbnwwfHx8fDE3MzcwNTU3NDl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 3,
      name: 'Sushi Master',
      district: language === 'en' ? 'District 2' : 'Quận 2',
      discount: '50%',
      time: '14:00',
      category: 'asian',
      cuisine: language === 'en' ? 'Japanese' : 'Nhật Bản',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaXxlbnwwfHx8fDE3MzcwNTU3NjR8MA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 4,
      name: 'Bún Chả Hương Liên',
      district: language === 'en' ? 'District 3' : 'Quận 3',
      discount: '30%',
      time: '14:45',
      category: 'vietnamese',
      cuisine: language === 'en' ? 'Vietnamese' : 'Việt Nam',
      image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx2aWV0bmFtZXNlJTIwZm9vZHxlbnwwfHx8fDE3MzcwNTU3ODd8MA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 5,
      name: 'Steakhouse 79',
      district: language === 'en' ? 'Thao Dien' : 'Thảo Điền',
      discount: '45%',
      time: '15:30',
      category: 'western',
      cuisine: language === 'en' ? 'Steakhouse' : 'Bít Tết',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwc3RlYWt8ZW58MHx8fHwxNzM3MDU1ODAzfDA&ixlib=rb-4.0.3&q=80&w=1080',
    },
  ];

  const filteredDeals = activeCategory === 'all' 
    ? allRestaurantDeals 
    : allRestaurantDeals.filter(deal => deal.category === activeCategory);

  const categories = [
    { id: 'all', label: language === 'en' ? 'All Cuisines' : 'Tất Cả Món', icon: Utensils },
    { id: 'vietnamese', label: language === 'en' ? 'Vietnamese' : 'Việt Nam', icon: Coffee },
    { id: 'western', label: language === 'en' ? 'Western' : 'Phương Tây', icon: Pizza },
    { id: 'asian', label: language === 'en' ? 'Asian' : 'Châu Á', icon: Utensils },
  ];

  const activeItem = categories.find(cat => cat.id === activeCategory) || categories[0];

  return (
    <div ref={ref} className="py-20 md:py-32 px-6 bg-white relative overflow-hidden">
      {/* Background decoration - very subtle */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FCE482] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FCE482] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Live Counter and Categories */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-12 relative">
          {/* Left: Heading with Live Badges */}
          <motion.div 
            className="w-full lg:w-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Live Deals and Average Discount Badges */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-4 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {/* Live Deals Badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4ADE80] to-[#22C55E] text-white px-6 py-3 rounded-full shadow-lg">
                <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                <span className="text-sm font-black tracking-wide" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {liveDealsCount} {language === 'en' ? 'LIVE DEALS' : 'ƯU ĐÃI'}
                </span>
              </div>

              {/* Average Discount Badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] text-[#2D2D2D] px-6 py-3 rounded-full shadow-lg">
                <Star className="w-5 h-5" fill="#2D2D2D" />
                <span className="text-sm font-black tracking-wide" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  40% {language === 'en' ? 'AVG OFF' : 'GIẢM TB'}
                </span>
              </div>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#2D2D2D] text-center lg:text-left" 
              style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {language === 'en' ? (
                <>Premium Tables.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Perfect Timing</span>.</>
              ) : (
                <>Bàn Cao Cấp.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Thời Điểm Hoàn Hảo</span>.</>
              )}
            </motion.h2>

            {/* Description only */}
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl text-center lg:text-left" 
              style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {language === 'en' 
                ? 'Join thousands discovering premium restaurants at unbeatable prices across HCMC.'
                : 'Tham gia hàng ngàn người khám phá nhà hàng cao cấp với giá không thể tốt hơn khắp TPHCM.'}
            </motion.p>
          </motion.div>

          {/* Category Dropdown - positioned at right edge, aligned with description */}
          <div className="absolute right-0 bottom-0 z-20 hidden lg:block">
            <div className="relative">
              {/* Dropdown Button */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between gap-4 bg-white border-2 border-gray-200 hover:border-[#FCE482] px-8 py-4 rounded-2xl font-black text-base transition-all duration-300 shadow-md hover:shadow-lg min-w-[280px]"
                style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
              >
                <div className="flex items-center gap-3">
                  {React.createElement(activeItem.icon, { className: 'w-5 h-5 text-[#FCE482]', strokeWidth: 2.5 })}
                  <span className="text-[#2D2D2D]">{activeItem.label}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-2xl shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    const isActive = activeCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => {
                          setActiveCategory(category.id as any);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-8 py-4 font-black text-base transition-all duration-200 ${
                          isActive
                            ? 'bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] text-[#2D2D2D]'
                            : 'text-gray-600 hover:bg-[#FFFEF6]'
                        }`}
                        style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? 'text-[#2D2D2D]' : 'text-[#FCE482]'}`} strokeWidth={2.5} />
                        <span>{category.label}</span>
                        {isActive && (
                          <ChevronRight className="w-5 h-5 ml-auto" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Restaurant Deal Cards Marquee with Dropdown */}
        <div className="mb-16 relative">
          {/* Mobile Dropdown - below description */}
          <div className="relative mb-6 lg:hidden">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between gap-4 bg-white border-2 border-gray-200 hover:border-[#FCE482] px-8 py-4 rounded-2xl font-black text-base transition-all duration-300 shadow-md hover:shadow-lg"
              style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
            >
              <div className="flex items-center gap-3">
                {React.createElement(activeItem.icon, { className: 'w-5 h-5 text-[#FCE482]', strokeWidth: 2.5 })}
                <span className="text-[#2D2D2D]">{activeItem.label}</span>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-2xl shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id as any);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-8 py-4 font-black text-base transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] text-[#2D2D2D]'
                          : 'text-gray-600 hover:bg-[#FFFEF6]'
                      }`}
                      style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? 'text-[#2D2D2D]' : 'text-[#FCE482]'}`} strokeWidth={2.5} />
                      <span>{category.label}</span>
                      {isActive && (
                        <ChevronRight className="w-5 h-5 ml-auto" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Marquee */}
          <div className="overflow-hidden">
            <Marquee speed={50}>
              {filteredDeals.map((deal) => (
                <div 
                  key={deal.id}
                  onClick={() => setSelectedDeal(deal.id === selectedDeal ? null : deal.id)}
                  className={`inline-block bg-white rounded-2xl shadow-lg border overflow-hidden mx-4 transition-all duration-300 w-[320px] cursor-pointer ${
                    selectedDeal === deal.id 
                      ? 'border-[#FCE482] shadow-2xl scale-105' 
                      : 'border-gray-100 hover:shadow-xl hover:scale-105'
                  }`}
                >
                  {/* Food Image */}
                  <div className="relative h-[200px] overflow-hidden">
                    <img 
                      src={deal.image}
                      alt={deal.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    
                    {/* Discount Badge - Top Right */}
                    <div className="absolute top-3 right-3 bg-[#FCE482] text-[#2D2D2D] rounded-lg shadow-xl border-2 border-[#2D2D2D] px-4 py-2">
                      <div className="text-2xl font-black leading-none mb-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                        {deal.discount}
                      </div>
                      <div className="text-[10px] font-black leading-none" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                        OFF
                      </div>
                    </div>

                    {/* Live Badge - Top Left */}
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-[#4ADE80] to-[#22C55E] text-white px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      <span className="text-xs font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                        {language === 'en' ? 'LIVE' : 'ĐANG'}
                      </span>
                    </div>

                    {/* Time Badge - Bottom */}
                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                        {language === 'en' ? `Entry by ${deal.time}` : `Vào trước ${deal.time}`}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    {/* Restaurant Name */}
                    <h3 className="font-black text-xl text-[#2D2D2D] mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {deal.name}
                    </h3>

                    {/* Cuisine Type */}
                    <div className="inline-block bg-gradient-to-r from-[#FFFEF6] to-white px-3 py-1 rounded-full mb-3 border border-gray-200">
                      <span className="text-xs font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                        {deal.cuisine}
                      </span>
                    </div>

                    {/* Location & Action */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                          {deal.district}
                        </span>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform ${selectedDeal === deal.id ? 'text-[#FCE482] rotate-90' : 'text-gray-400'}`} />
                    </div>

                    {/* Expanded Info */}
                    {selectedDeal === deal.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-300">
                        <button className="w-full bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] text-[#2D2D2D] px-6 py-3 rounded-xl font-black text-sm shadow-lg hover:shadow-xl transition-all">
                          {language === 'en' ? 'BOOK NOW' : 'ĐẶT NGAY'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Bottom testimonial quote */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Star className="w-6 h-6 text-[#FFD93D]" fill="#FFD93D" />
              <Star className="w-6 h-6 text-[#FFD93D]" fill="#FFD93D" />
              <Star className="w-6 h-6 text-[#FFD93D]" fill="#FFD93D" />
              <Star className="w-6 h-6 text-[#FFD93D]" fill="#FFD93D" />
              <Star className="w-6 h-6 text-[#FFD93D]" fill="#FFD93D" />
            </div>
            <div className="text-2xl md:text-3xl font-black text-[#2D2D2D] mb-4 leading-tight" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? (
                <>\"Not just for budget meals. I've explored <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">fine dining spots</span> I'd never try at full price.\"</>
              ) : (
                <>\"Không chỉ cho bữa ăn bình dân. Tôi đã thử <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">nhà hàng cao cấp</span> mà giá thường không thể tới được.\"</>
              )}
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FCE482] to-[#F9DB4A] rounded-full flex items-center justify-center text-[#2D2D2D] text-xl font-black">
                L
              </div>
              <div className="text-left">
                <div className="font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'Linh Nguyen' : 'Linh Nguyễn'}
                </div>
                <div className="text-sm text-gray-500" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'District 1, HCMC' : 'Quận 1, TPHCM'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
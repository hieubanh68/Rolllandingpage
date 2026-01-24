import React from 'react';
import { Star, TrendingUp, Users, Clock, MapPin, Zap } from 'lucide-react';
import { Language } from '../translations/translations';
import { Marquee } from './Marquee';

interface SocialProofProps {
  language: Language;
}

export function SocialProof({ language }: SocialProofProps) {
  // Mock restaurant deal cards with images and discount badges
  const restaurantDeals = [
    {
      name: 'Pizza 4P\'s',
      district: 'District 1',
      discount: '40%',
      time: '14:30',
      image: 'https://images.unsplash.com/photo-1701480253822-1842236c9a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcGhvJTIwYm93bCUyMGZvb2R8ZW58MXx8fHwxNzY5MjU4NDU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Phở Hòa Pasteur',
      district: 'District 3',
      discount: '35%',
      time: '15:00',
      image: 'https://images.unsplash.com/photo-1701480253822-1842236c9a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcGhvJTIwYm93bCUyMGZvb2R8ZW58MXx8fHwxNzY5MjU4NDU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Banh Mi Huynh Hoa',
      district: 'District 1',
      discount: '50%',
      time: '14:00',
      image: 'https://images.unsplash.com/photo-1715924298872-9a86b729eb96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5oJTIwbWklMjB2aWV0bmFtZXNlJTIwZm9vZHxlbnwxfHx8fDE3NjkyNTkyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Quán Bụi',
      district: 'District 1',
      discount: '30%',
      time: '16:00',
      image: 'https://images.unsplash.com/photo-1656945843375-207bb6e47750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwc3ByaW5nJTIwcm9sbHN8ZW58MXx8fHwxNzY5MjU5MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'L\'Usine',
      district: 'District 1',
      discount: '45%',
      time: '14:30',
      image: 'https://images.unsplash.com/photo-1671014594641-262cc4b9a16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwY29mZmVlfGVufDF8fHx8MTc2OTI1OTIyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Secret Garden',
      district: 'District 1',
      discount: '40%',
      time: '15:30',
      image: 'https://images.unsplash.com/photo-1701480253822-1842236c9a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcGhvJTIwYm93bCUyMGZvb2R8ZW58MXx8fHwxNzY5MjU4NDU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="py-20 md:py-32 px-6 bg-gradient-to-br from-[#FCE482]/20 via-white to-[#FCE482]/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#FCE482] to-white opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#F9DB4A] to-[#FFFEF6] opacity-25 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Stats Side by Side */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-12">
          {/* Left: Heading */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6">
              <Star className="w-8 h-8 text-[#FFD93D]" fill="#FFD93D" />
              <Star className="w-10 h-10 text-[#EF8E4C]" fill="#EF8E4C" />
              <Star className="w-8 h-8 text-[#FFD93D]" fill="#FFD93D" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? (
                <>Top Tables.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Smart Timing</span>.</>
              ) : (
                <>Bàn Hàng Đầu.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Thời Gian Thông Minh</span>.</>
              )}
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl lg:max-w-md" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' 
                ? 'Join thousands of savvy diners unlocking hidden value every day in HCMC.'
                : 'Tham gia hàng ngàn thực khách thông minh mở khóa giá trị ẩn mỗi ngày tại TPHCM.'}
            </p>
          </div>

          {/* Right: Two Stats */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Stat 1: Partner Restaurants */}
            <div className="text-center p-8 bg-white rounded-3xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F9DB4A] to-[#FCE482] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="w-8 h-8 text-[#2D2D2D]" strokeWidth={3} />
              </div>
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                200+
              </div>
              <div className="text-sm font-black text-gray-600" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'Partner Restaurants' : 'Nhà Hàng Đối Tác'}
              </div>
            </div>

            {/* Stat 2: Avg. Discount */}
            <div className="text-center p-8 bg-white rounded-3xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4ADE80] to-[#22C55E] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="w-8 h-8 text-white" strokeWidth={3} fill="white" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                40%
              </div>
              <div className="text-sm font-black text-gray-600" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'Avg. Discount' : 'Giảm Giá TB'}
              </div>
            </div>
          </div>
        </div>

        {/* Restaurant Deal Cards Marquee */}
        <div className="mb-16 overflow-hidden">
          <Marquee speed={50}>
            {restaurantDeals.map((deal, index) => (
              <div 
                key={index}
                className="inline-block bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mx-4 hover:shadow-xl hover:scale-105 transition-all duration-300 w-[300px]"
              >
                {/* Food Image */}
                <div className="relative h-[180px] overflow-hidden">
                  <img 
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Discount Badge - Top Right - New Format */}
                  <div className="absolute top-3 right-3 bg-[#FCE482] text-[#2D2D2D] rounded-md shadow-lg border-2 border-[#2D2D2D] flex flex-col items-center justify-center py-1.5 px-2" style={{ width: '177.6px', height: '60px' }}>
                    <span className="text-[14px] font-black tracking-tight whitespace-nowrap leading-tight mb-0.5" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {deal.discount} OFF - {language === 'en' ? 'Dine In' : 'Tại Chỗ'}
                    </span>
                    <span className="text-[10px] font-black tracking-tight whitespace-nowrap leading-tight" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? `Entry by ${deal.time}` : `Vào trước ${deal.time}`}
                    </span>
                  </div>

                  {/* Live Badge - Top Left */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-[#4ADE80] to-[#22C55E] text-white px-3 py-1 rounded-lg shadow-lg flex items-center gap-1">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    <span className="text-xs font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'LIVE' : 'ĐANG'}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  {/* Restaurant Name */}
                  <h3 className="font-black text-lg text-[#2D2D2D] mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {deal.name}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {deal.district}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Bottom testimonial quote */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-lg border border-gray-100">
            <div className="text-2xl md:text-3xl font-black text-[#2D2D2D] mb-4 leading-tight" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? (
                <>"This isn't just for cheap eats. I've discovered <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">premium restaurants</span> I wouldn't normally try.\"</>
              ) : (
                <>"Đây không chỉ là ăn rẻ. Tôi đã khám phá <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">nhà hàng cao cấp</span> mà bình thường tôi không thử.\"</>
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
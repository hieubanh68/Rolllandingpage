import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Language } from '../translations/translations';

interface DealTickerProps {
  language: Language;
}

export function DealTicker({ language }: DealTickerProps) {
  const restaurants = [
    {
      name: 'Cục Gạch Quán',
      cuisine: language === 'en' ? 'Vietnamese' : 'Món Việt',
      image: 'https://images.unsplash.com/photo-1762015669851-4098e655ec87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2ODk4NjgxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      deals: [
        { percent: '22%', type: language === 'en' ? 'Dine in' : 'Ăn tại chỗ', time: language === 'en' ? 'Anytime Today' : 'Mọi lúc hôm nay' },
        { percent: '15%', type: language === 'en' ? 'Dine in' : 'Ăn tại chỗ', time: '17:00 - 19:00' }
      ]
    },
    {
      name: 'Highlands Coffee',
      cuisine: language === 'en' ? 'Café, Drinks' : 'Cà Phê, Đồ Uống',
      image: 'https://images.unsplash.com/photo-1684006997322-6a5128f44816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4OTk0MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      deals: [
        { percent: '30%', type: language === 'en' ? 'Dine in' : 'Ăn tại chỗ', time: '14:00 - 17:00' }
      ]
    },
    {
      name: 'Secret Garden',
      cuisine: language === 'en' ? 'Vietnamese, Garden' : 'Món Việt, Vườn',
      image: 'https://images.unsplash.com/photo-1583338917496-7ea264c374ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHJlc3RhdXJhbnQlMjBmb29kfGVufDF8fHx8MTc2OTA5MTk0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      deals: [
        { percent: '25%', type: language === 'en' ? 'Dine in' : 'Ăn tại chỗ', time: language === 'en' ? 'Until 19:00' : 'Đến 19:00' },
        { percent: '18%', type: language === 'en' ? 'Dine in' : 'Ăn tại chỗ', time: '18:00 - 22:00' }
      ]
    },
    {
      name: 'The Burger House',
      cuisine: language === 'en' ? 'American, Burgers' : 'Mỹ, Burger',
      image: 'https://images.unsplash.com/photo-1762922425552-286e2de063db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjByZXN0YXVyYW50JTIwZGluaW5nfGVufDF8fHx8MTc2OTA5MTk1MHww&ixlib=rb-4.1.0&q=80&w=1080',
      deals: [
        { percent: '35%', type: language === 'en' ? 'Dine in' : 'Ăn tại chỗ', time: '15:00 - 18:00' }
      ]
    },
    {
      name: 'Pizza 4P\'s',
      cuisine: language === 'en' ? 'Italian, Pizza' : 'Ý, Pizza',
      image: 'https://images.unsplash.com/photo-1672636401339-88d7b84cb1df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnQlMjB0YWJsZXxlbnwxfHx8fDE3NjkwOTE5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      deals: [
        { percent: '20%', type: language === 'en' ? 'Dine in' : 'Ăn tại chỗ', time: '17:00 - 20:00' },
        { percent: '28%', type: language === 'en' ? 'Takeaway' : 'Mang đi', time: language === 'en' ? 'All day' : 'Cả ngày' }
      ]
    },
    {
      name: 'Sushi World',
      cuisine: language === 'en' ? 'Japanese, Sushi' : 'Nhật, Sushi',
      image: 'https://images.unsplash.com/photo-1629712257540-e03dfbd96b0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHN1c2hpJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NjkwODMyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      deals: [
        { percent: '28%', type: language === 'en' ? 'Dine in' : 'Ăn tại chỗ', time: '18:00 - 21:00' }
      ]
    }
  ];

  // Duplicate restaurants for seamless scrolling
  const allRestaurants = [...restaurants, ...restaurants, ...restaurants];

  return (
    <section className="bg-gradient-to-b from-[#FFFEF6] to-white py-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <h2 
            className="text-3xl md:text-4xl font-black text-[#2D2D2D] text-center"
            style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
          >
            {language === 'en' ? 'HOT DEALS TODAY' : 'ƯU ĐÃI HOT HÔM NAY'}
          </h2>
        </div>
        <p 
          className="text-center text-[#2D2D2D]/70 text-sm md:text-base"
          style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
        >
          {language === 'en' ? 'Roll in and save on your favorite spots' : 'Lướt ngay, tiết kiệm liền'}
        </p>
      </div>

      {/* Animated scroll container */}
      <div 
        className="flex gap-6"
        style={{ 
          animation: 'scroll 60s linear infinite',
          width: 'fit-content'
        }}
      >
        {allRestaurants.map((restaurant, index) => (
          <div 
            key={index}
            className="relative flex-shrink-0 w-72 h-72 rounded-3xl overflow-hidden shadow-xl group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 bg-white border-2 border-gray-100"
          >
            {/* Restaurant Image */}
            <ImageWithFallback
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Deal Badges - Top Left - New Style with Lightning Bolt */}
            <div className="absolute top-4 left-4 space-y-2.5 z-10">
              {restaurant.deals.slice(0, 2).map((deal, dealIndex) => (
                <div 
                  key={dealIndex}
                  className={`${
                    dealIndex === 0 
                      ? 'bg-[#FCE482]' 
                      : 'bg-[#FFFEF6]'
                  } border-[3px] border-[#2D2D2D] rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105`}
                  style={{
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }}
                >
                  <div className="px-4 py-3 flex items-center gap-3">
                    {/* Lightning Bolt Icon */}
                    <div className="text-2xl flex-shrink-0">
                      ⚡
                    </div>
                    
                    {/* Deal Info - Stacked Vertically */}
                    <div className="flex flex-col gap-0.5">
                      {/* Discount Amount */}
                      <div 
                        className="font-black text-[#2D2D2D] text-base leading-tight"
                        style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                      >
                        {deal.percent} {language === 'en' ? 'OFF' : 'GIẢM'}
                      </div>
                      
                      {/* Time Range */}
                      <div 
                        className="text-sm font-bold text-[#2D2D2D]/80 leading-tight"
                        style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                      >
                        {deal.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Restaurant Info - Bottom with improved contrast */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
              <h3 
                className="text-xl font-black text-white mb-1 drop-shadow-lg"
                style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
              >
                {restaurant.name}
              </h3>
              <p 
                className="text-xs text-white/95 font-semibold drop-shadow-md"
                style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
              >
                {restaurant.cuisine}
              </p>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-[#EF8E4C]/0 group-hover:bg-[#EF8E4C]/5 transition-colors duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
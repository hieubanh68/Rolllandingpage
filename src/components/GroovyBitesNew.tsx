import React from 'react';
import { MessageCircle, Star, Quote } from 'lucide-react';
import { Language, translations } from '../translations/translations';

interface GroovyBitesNewProps {
  language: Language;
}

export function GroovyBitesNew({ language }: GroovyBitesNewProps) {
  const t = translations[language].testimonials;

  const testimonials = [
    {
      name: t.testimonial1.name,
      location: t.testimonial1.location,
      message: t.testimonial1.message,
      deal: "40%",
      restaurant: t.testimonial1.restaurant,
      color: 'from-[#EF8E4C] to-[#FF6B35]'
    },
    {
      name: t.testimonial2.name,
      location: t.testimonial2.location,
      message: t.testimonial2.message,
      deal: "50%",
      restaurant: t.testimonial2.restaurant,
      color: 'from-[#FBDA60] to-[#F9DB5F]'
    },
    {
      name: t.testimonial3.name,
      location: t.testimonial3.location,
      message: t.testimonial3.message,
      deal: "35%",
      restaurant: t.testimonial3.restaurant,
      color: 'from-[#B8D5A0] to-[#738C6B]'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-[#FFFEF6] py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#EF8E4C] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FCE482] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <MessageCircle className="w-6 h-6 text-[#EF8E4C]" fill="#EF8E4C" />
            <h2 
              className="text-4xl md:text-5xl font-black text-[#2D2D2D]"
              style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
            >
              {t.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF8E4C] to-[#FF6B35]">{t.title2}</span>
            </h2>
            <MessageCircle className="w-6 h-6 text-[#EF8E4C]" fill="#EF8E4C" />
          </div>
          <p 
            className="text-lg md:text-xl opacity-70 max-w-3xl mx-auto text-[#2D2D2D]"
            style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Testimonials Grid - Vietnamese Card Style */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100"
            >
              {/* Discount Badge - Top Right */}
              <div className={`absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-300`}>
                <div className="text-center">
                  <div className="text-2xl font-black text-white" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {testimonial.deal}
                  </div>
                  <div className="text-xs font-black text-white" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'OFF' : 'GIẢM'}
                  </div>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-10 h-10 text-[#EF8E4C] opacity-30" fill="#EF8E4C" />
              </div>

              {/* Message */}
              <p 
                className="text-lg leading-relaxed mb-6 text-[#2D2D2D]"
                style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
              >
                &ldquo;{testimonial.message}&rdquo;
              </p>

              {/* Stars Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FCE482]" fill="#FCE482" />
                ))}
              </div>

              {/* Author Info */}
              <div className="border-t-2 border-[#FFFEF6] pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div 
                      className="font-black text-[#2D2D2D] text-lg"
                      style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                    >
                      {testimonial.name}
                    </div>
                    <div 
                      className="text-sm opacity-60"
                      style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                    >
                      {testimonial.location}
                    </div>
                  </div>
                  <MessageCircle className="w-6 h-6 text-[#EF8E4C] opacity-40" />
                </div>
                
                {/* Restaurant Tag */}
                <div className="mt-3">
                  <span 
                    className="inline-block bg-gradient-to-r from-[#FFFEF6] to-[#FFF5E1] px-3 py-1 rounded-full text-xs font-black border border-[#EF8E4C]"
                    style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                  >
                    📍 {testimonial.restaurant}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-[#EF8E4C] to-[#FF6B35] text-white px-10 py-5 rounded-full text-xl font-black shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <span style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? '🎉 Join Thousands of Happy Diners!' : '🎉 Tham Gia Hàng Ngàn Thực Khách!'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
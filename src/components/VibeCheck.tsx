import React from 'react';
import { MessageCircle, Star } from 'lucide-react';

export function VibeCheck() {
  const testimonials = [
    {
      text: "Found this place on ROLL. 10/10. 🔥",
      author: "@foodiehcmc",
      image: "https://images.unsplash.com/photo-1641440615059-42c8ed3af8c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwZm9vZCUyMGJvd2x8ZW58MXx8fHwxNzY4OTg0MjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      position: 'top-8 left-8'
    },
    {
      text: "Saved 40% on lunch today thanks to this app 😭",
      author: "Minh N.",
      image: "https://images.unsplash.com/photo-1599719455360-ff0be7c4dd06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5oJTIwbWklMjBzYW5kd2ljaHxlbnwxfHx8fDE3NjkwODUwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      position: 'top-8 right-8'
    },
    {
      text: "Best app for foodies in Vietnam. Period.",
      author: "Linh T.",
      image: "https://images.unsplash.com/photo-1730900807088-8b5b4fcbd482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG8lMjBub29kbGVzJTIwYm93bHxlbnwxfHx8fDE3NjkwODUwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      position: 'bottom-8 left-8'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 border-b-8 border-[#2D2D2D]">
      {/* Left - Title */}
      <div className="bg-white flex items-center justify-center p-8 md:p-16 border-b-8 md:border-b-0 md:border-r-8 border-[#2D2D2D]">
        <div className="text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-none text-[#2D2D2D]">
            VIBE<br />CHECK
          </h2>
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-[#EF8E4C] text-[#EF8E4C]" />
            ))}
          </div>
          <p className="text-xl md:text-2xl font-mono text-[#2D2D2D]">Real users. Real deals.</p>
        </div>
      </div>

      {/* Right - Social Proof Overlays */}
      <div className="bg-[#FFFEF6] relative min-h-[500px] md:min-h-[600px] p-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute ${testimonial.position} max-w-xs z-${10 + index}`}
          >
            {/* Message Bubble */}
            <div className="bg-white border-4 border-[#2D2D2D] p-4 shadow-xl transform hover:scale-105 transition-transform">
              <div className="flex items-start gap-3 mb-3">
                <MessageCircle className="w-5 h-5 flex-shrink-0 mt-1 text-[#EF8E4C]" />
                <p className="font-medium text-sm md:text-base leading-snug">
                  {testimonial.text}
                </p>
              </div>
              <div className="font-mono text-xs text-gray-600">
                — {testimonial.author}
              </div>
              
              {/* Triangle pointer */}
              <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-[#2D2D2D]"></div>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
            </div>
          </div>
        ))}

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="text-9xl font-black transform rotate-12 text-[#EF8E4C]">
            ROLL
          </div>
        </div>
      </div>
    </div>
  );
}
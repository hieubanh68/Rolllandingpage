import React from 'react';

interface MarqueeProps {
  reverse?: boolean;
}

export function Marquee({ reverse = false }: MarqueeProps) {
  const text = "SĂN DEAL • VIETNAM • TASTY";
  const repeatedText = Array(20).fill(text).join(' • ');

  return (
    <div className="bg-[#FCE482] border-y-8 border-[#2D2D2D] overflow-hidden py-6">
      <div 
        className="whitespace-nowrap font-black text-4xl md:text-5xl tracking-tight text-[#2D2D2D]"
        style={{
          animation: reverse 
            ? 'marquee-reverse 30s linear infinite' 
            : 'marquee 30s linear infinite'
        }}
      >
        {repeatedText}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
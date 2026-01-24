import React from 'react';

interface MarqueeProps {
  children?: React.ReactNode;
  reverse?: boolean;
  speed?: number;
}

export function Marquee({ children, reverse = false, speed = 30 }: MarqueeProps) {
  // If no children provided, use the default text marquee
  if (!children) {
    const text = "SĂN DEAL • VIETNAM • TASTY";
    const repeatedText = Array(20).fill(text).join(' • ');
    
    return (
      <div className="bg-[#FCE482] border-y-8 border-[#2D2D2D] overflow-hidden py-6">
        <div 
          className="whitespace-nowrap font-black text-4xl md:text-5xl tracking-tight text-[#2D2D2D]"
          style={{
            animation: reverse 
              ? `marquee-reverse ${speed}s linear infinite` 
              : `marquee ${speed}s linear infinite`
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

  // For children (deal cards), duplicate them to create seamless loop
  const childrenArray = React.Children.toArray(children);
  const duplicatedChildren = [
    ...childrenArray.map((child, index) => 
      React.isValidElement(child) ? React.cloneElement(child, { key: `first-${index}` }) : child
    ),
    ...childrenArray.map((child, index) => 
      React.isValidElement(child) ? React.cloneElement(child, { key: `second-${index}` }) : child
    )
  ];

  return (
    <div className="overflow-hidden py-4">
      <div 
        className="flex gap-0"
        style={{
          animation: reverse 
            ? `marquee-reverse ${speed}s linear infinite` 
            : `marquee ${speed}s linear infinite`,
          width: 'max-content'
        }}
      >
        {duplicatedChildren}
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
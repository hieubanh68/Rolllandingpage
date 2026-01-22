import React from 'react';
import { MapPin, Bike, QrCode } from 'lucide-react';

export function FeatureGrid() {
  const features = [
    {
      icon: MapPin,
      title: 'DISCOVER',
      subtitle: 'Find the Vibe',
      description: 'BROWSE NEARBY SPOTS\nFILTER BY CUISINE\nSEE REAL-TIME DEALS',
      bg: '#FFFEF6'
    },
    {
      icon: Bike,
      title: 'VISIT',
      subtitle: 'Unlock the Perk',
      description: 'HEAD TO RESTAURANT\nSHOW YOUR APP\nGET 20% - 50% OFF',
      bg: '#FCE482'
    },
    {
      icon: QrCode,
      title: 'SCAN QR',
      subtitle: 'Scan & Go',
      description: 'SCAN CODE AT TABLE\nDEAL AUTO-APPLIES\nPAY LESS, EAT MORE',
      bg: '#FFFEF6'
    }
  ];

  return (
    <div className="grid md:grid-cols-3 border-b-8 border-[#2D2D2D]">
      {features.map((feature, index) => (
        <div 
          key={feature.title}
          className={`p-8 md:p-12 lg:p-16 ${index < 2 ? 'border-b-8 md:border-b-0 md:border-r-8 border-[#2D2D2D]' : 'border-b-0'}`}
          style={{ backgroundColor: feature.bg }}
        >
          {/* Icon */}
          <div className="mb-8 inline-block p-6 bg-[#EF8E4C] border-4 border-[#2D2D2D]">
            <feature.icon className="w-16 h-16 text-[#2D2D2D]" strokeWidth={3} />
          </div>

          {/* Title */}
          <h3 className="text-5xl md:text-6xl font-black mb-2 tracking-tight">
            {feature.title}
          </h3>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-bold mb-6 italic">
            {feature.subtitle}
          </p>

          {/* Receipt-style description */}
          <div className="bg-white border-4 border-[#2D2D2D] p-4 mt-8">
            <pre className="font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap">
{feature.description}
            </pre>
            {/* Receipt tear line */}
            <div className="mt-4 pt-4 border-t-2 border-dashed border-[#2D2D2D] text-center font-mono text-xs">
              STEP {index + 1}/3
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
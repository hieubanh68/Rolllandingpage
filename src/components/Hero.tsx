import React from 'react';
import chefMascot from 'figma:asset/d2e2f083bc530a6cbf1d71d7abb31a9a9a9a1c24.png';

export function Hero() {
  return (
    <div className="grid md:grid-cols-2 border-b-8 border-[#2D2D2D] min-h-[90vh]">
      {/* Left Side - Image with Sticker */}
      <div className="relative border-r-0 md:border-r-8 border-[#2D2D2D] overflow-hidden bg-[#FFFEF6]">
        <img 
          src="https://images.unsplash.com/photo-1552846573-47e482355fa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBlYXRpbmclMjByZXN0YXVyYW50JTIwaGFwcHl8ZW58MXx8fHwxNzY5MDg1MDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="People enjoying food"
          className="w-full h-full object-cover"
        />
        {/* Chef Mascot Sticker */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 animate-bounce">
          <img 
            src={chefMascot} 
            alt="ROLL Chef Mascot"
            className="w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl"
            style={{ transform: 'rotate(-12deg)' }}
          />
        </div>
      </div>

      {/* Right Side - Text & CTA */}
      <div className="flex flex-col justify-center items-start p-8 md:p-16 lg:p-24 bg-[#FFFEF6]">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 leading-none">
            DON'T<br />JUST EAT.<br />
            <span className="text-[#EF8E4C] [-webkit-text-stroke:3px_#2D2D2D]">HUNT.</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mt-6 max-w-md font-medium">
            The only app that drops exclusive deals when you're actually hungry.
          </p>
        </div>

        {/* Retro Ticket CTA Button */}
        <button className="relative group mt-4">
          <div className="bg-[#EF8E4C] border-4 border-[#2D2D2D] px-8 py-4 transform transition-transform group-hover:translate-x-1 group-hover:translate-y-1">
            <div className="flex items-center gap-4">
              <div className="text-left">
                <div className="text-xs font-mono tracking-wider mb-1 text-[#2D2D2D]">FREE DOWNLOAD</div>
                <div className="text-2xl font-black tracking-tight text-[#2D2D2D]">GET THE APP</div>
              </div>
              <div className="text-3xl text-[#2D2D2D]">→</div>
            </div>
            {/* Ticket perforations */}
            <div className="absolute left-0 top-0 bottom-0 w-1 flex flex-col justify-around py-2">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-[#2D2D2D] rounded-full"></div>
              ))}
            </div>
          </div>
          {/* Shadow */}
          <div className="absolute inset-0 bg-[#2D2D2D] -z-10 translate-x-2 translate-y-2"></div>
        </button>

        <div className="mt-12 flex gap-4 text-sm font-mono">
          <span className="bg-[#2D2D2D] text-[#FCE482] px-3 py-1">iOS</span>
          <span className="bg-[#2D2D2D] text-[#FCE482] px-3 py-1">ANDROID</span>
        </div>
      </div>
    </div>
  );
}
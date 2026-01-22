import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white text-[#2D2D2D]">
      {/* Huge Typography */}
      <div className="border-b-8 border-[#2D2D2D] py-16 md:py-24 overflow-hidden">
        <h2 className="text-center text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black tracking-tighter leading-none px-4">
          ROLL WITH US
        </h2>
      </div>

      {/* Download Section with QR Code */}
      <div className="grid md:grid-cols-2 border-b-8 border-[#2D2D2D]">
        {/* QR Code */}
        <div className="flex items-center justify-center p-12 md:p-16 border-b-8 md:border-b-0 md:border-r-8 border-[#2D2D2D] bg-[#FFFEF6]">
          <div className="text-center">
            <div className="bg-[#FCE482] p-8 inline-block border-8 border-[#2D2D2D]">
              {/* Pixelated QR Code */}
              <div className="w-48 h-48 md:w-64 md:h-64 grid grid-cols-8 gap-1">
                {[
                  1,1,1,1,1,0,1,0,
                  1,0,0,0,1,0,0,1,
                  1,0,1,0,1,0,1,1,
                  1,0,1,0,1,0,0,0,
                  1,1,1,1,1,1,1,1,
                  0,0,1,0,1,0,1,0,
                  1,1,0,1,0,1,0,1,
                  0,1,1,1,1,0,1,1
                ].map((pixel, i) => (
                  <div 
                    key={i} 
                    className={`${pixel ? 'bg-[#2D2D2D]' : 'bg-[#FCE482]'}`}
                  ></div>
                ))}
              </div>
            </div>
            <p className="mt-6 text-2xl md:text-3xl font-black">
              SCAN TO<br />DOWNLOAD
            </p>
          </div>
        </div>

        {/* Download Info */}
        <div className="flex flex-col justify-center p-8 md:p-16 bg-white">
          <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            GET THE APP
          </h3>
          <p className="text-lg md:text-xl mb-8 max-w-md text-gray-700">
            Available on iOS and Android. Start hunting for deals in Hanoi, Ho Chi Minh, and Da Nang.
          </p>
          
          <div className="space-y-4">
            <button className="w-full bg-[#EF8E4C] text-white border-4 border-[#2D2D2D] py-4 px-6 font-black text-lg md:text-xl hover:bg-[#2D2D2D] hover:text-white transition-colors text-left">
              → Download for iOS
            </button>
            <button className="w-full bg-[#EF8E4C] text-white border-4 border-[#2D2D2D] py-4 px-6 font-black text-lg md:text-xl hover:bg-[#2D2D2D] hover:text-white transition-colors text-left">
              → Download for Android
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="p-8 md:p-12 grid md:grid-cols-3 gap-8 bg-[#FFFEF6]">
        {/* Brand */}
        <div>
          <h4 className="text-4xl md:text-5xl font-black mb-4">ROLL</h4>
          <p className="font-mono text-sm text-gray-600">
            Discover. Visit. Save.<br />
            Your pocket guide to Vietnam's best eats.
          </p>
        </div>

        {/* Links */}
        <div>
          <h5 className="font-black text-xl mb-4">QUICK LINKS</h5>
          <ul className="space-y-2 font-mono text-sm">
            <li><a href="#" className="hover:text-[#EF8E4C] transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-[#EF8E4C] transition-colors">Partner Restaurants</a></li>
            <li><a href="#" className="hover:text-[#EF8E4C] transition-colors">How It Works</a></li>
            <li><a href="#" className="hover:text-[#EF8E4C] transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h5 className="font-black text-xl mb-4">FOLLOW US</h5>
          <ul className="space-y-2 font-mono text-sm">
            <li><a href="#" className="hover:text-[#EF8E4C] transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-[#EF8E4C] transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-[#EF8E4C] transition-colors">TikTok</a></li>
            <li><a href="#" className="hover:text-[#EF8E4C] transition-colors">Twitter</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t-4 border-[#2D2D2D] py-6 text-center font-mono text-sm text-gray-600 bg-[#FFFEF6]">
        © 2026 ROLL. All rights reserved. Made with ❤️ in Vietnam.
      </div>
    </footer>
  );
}
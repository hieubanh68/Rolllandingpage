import React from 'react';

export function GroovyBites() {
  const foodPhotos = [
    {
      url: 'https://images.unsplash.com/photo-1641440615059-42c8ed3af8c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwZm9vZCUyMGJvd2x8ZW58MXx8fHwxNzY4OTg0MjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rotation: -6,
      caption: 'Bún Chả'
    },
    {
      url: 'https://images.unsplash.com/photo-1599719455360-ff0be7c4dd06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5oJTIwbWklMjBzYW5kd2ljaHxlbnwxfHx8fDE3NjkwODUwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rotation: 4,
      caption: 'Bánh Mì'
    },
    {
      url: 'https://images.unsplash.com/photo-1730900807088-8b5b4fcbd482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG8lMjBub29kbGVzJTIwYm93bHxlbnwxfHx8fDE3NjkwODUwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rotation: -3,
      caption: 'Phở'
    },
    {
      url: 'https://images.unsplash.com/photo-1768701544400-dfa8ca509d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjByb2xscyUyMGZvb2R8ZW58MXx8fHwxNzY5MDE1NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rotation: 5,
      caption: 'Gỏi Cuốn'
    }
  ];

  return (
    <div className="bg-[#FFFEF6] border-b-8 border-[#2D2D2D] p-8 md:p-16 lg:p-24">
      {/* Title */}
      <h2 className="text-7xl md:text-8xl lg:text-9xl font-black mb-16 text-center tracking-tighter">
        GROOVY BITES
      </h2>

      {/* Polaroid Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto">
        {foodPhotos.map((photo, index) => (
          <div
            key={index}
            className="group cursor-pointer"
            style={{
              transform: `rotate(${photo.rotation}deg)`,
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `rotate(${photo.rotation}deg) scale(1)`;
            }}
          >
            {/* Polaroid Frame */}
            <div className="bg-white p-3 pb-12 shadow-2xl border-4 border-[#2D2D2D]">
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img 
                  src={photo.url} 
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Caption */}
              <div className="mt-3 text-center font-mono text-sm md:text-base font-medium">
                {photo.caption}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tagline */}
      <div className="text-center mt-16 text-2xl md:text-3xl font-black italic text-[#EF8E4C]">
        "Every meal tells a story"
      </div>
    </div>
  );
}
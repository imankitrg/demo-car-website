"use client";

import { useState } from "react";
import Image from "next/image";

export default function CarGallery({ car }) {
  const fallbackImage = "/home/officai_hero.Webp";
  let allImages = [car.thumbnail, ...(car.images || [])].filter(Boolean);
  
  if (allImages.length === 0) {
    allImages = [fallbackImage];
  }
  
  const [activeImage, setActiveImage] = useState(allImages[0]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden group shadow-2xl border border-gray-100 bg-gray-100">
        <Image
          src={activeImage}
          alt={car.title || "Car image"}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {allImages.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide py-2">
          {allImages.map((img, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveImage(img)}
              className={`relative w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden border-[3px] transition-all duration-300 ${
                activeImage === img 
                  ? 'border-blue-600 scale-105 shadow-xl shadow-blue-200' 
                  : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105'
              }`}
            >
              <Image src={img} alt={`${car.title || 'Car'} thumbnail ${idx}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
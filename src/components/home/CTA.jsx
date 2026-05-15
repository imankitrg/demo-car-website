"use client";

import Image from "next/image";

export default function CTA() {
  return (
    <section className="bg-white pb-24">
      
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="relative overflow-hidden rounded-[40px] bg-black px-8 py-16 md:px-16">
          
          {/* BACKGROUND GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-95" />

          {/* CONTENT */}
          <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">
            
            {/* LEFT */}
            <div>
              
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
                Start Your Journey
              </p>

              <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
                Find The Car That Matches Your Lifestyle
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-400">
                Explore luxury, electric, and performance cars with a premium buying experience crafted for modern drivers.
              </p>

              {/* BUTTONS */}
              <div className="mt-8 flex flex-wrap gap-4">
                
                <button className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-gray-200">
                  Explore Cars
                </button>

                <button className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-white">
                  Sell Your Car
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                
                <Image
                  src="/cars/hero.webp"
                  alt="Luxury Car"
                  width={900}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
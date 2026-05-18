"use client";

import { dealers } from "@/data/DealerAction";
import DealersGrid from "@/components/Dealers/DealersGrid";
import { Handshake, Sparkles } from "lucide-react";

export default function DealersPage() {
  return (
    <section className="relative min-h-screen bg-[#020205] pt-32 pb-24 text-white overflow-hidden">
      
      {/* GLOWING AMBIENT NEON BACKGROUNDS */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[160px] pointer-events-none animate-pulse" 
          style={{ animationDuration: '8s' }} 
        />
        <div 
          className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none animate-pulse" 
          style={{ animationDuration: '10s' }} 
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full space-y-16">
        
        {/* HEADER SECTION (CENTERED) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
          
          {/* Pill Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md shadow-lg transition-transform hover:scale-105 cursor-default">
            <Handshake className="h-3.5 w-3.5 text-indigo-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300">
              Premium Certified Partners
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
            India&apos;s Elite Car <br className="sm:hidden" />
            <span className="font-serif italic font-normal tracking-wide bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Dealerships
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base leading-relaxed text-white/50">
            Connect with the country&apos;s most trusted certified pre-owned luxury car dealerships offering secure financing, doorstep inspections, and warranty assurances.
          </p>

        </div>

        {/* DEALERS GRID & FILTERS MOUNT */}
        <DealersGrid dealers={dealers} />

      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import SearchFilter from "@/components/Cars/SearchFilter";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const router = useRouter();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/car?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-[#020205] pt-24 pb-20 sm:pt-32 sm:pb-28">

      {/* BACKGROUND IMAGE WITH PREMIUM DARK VIGNETTE & NEON GLOW */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/home/officai_hero.Webp"
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-60 scale-105 transition-all duration-1000"
        />
        {/* Dark radial and linear gradients for extreme luxury contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[#020205] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#020205_90%)] z-10" />

        {/* Futuristic background ambient neon blobs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 w-full flex flex-col items-center text-center">

        {/* TOP MINI PILL TAG (CENTERED) */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md shadow-lg transition-transform hover:scale-105 cursor-default">
          <Sparkles className="h-3.5 w-3.5 text-indigo-400 animate-spin" style={{ animationDuration: '3s' }} />
          <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300">
            200+ Premium Cars in Stock
          </span>
        </div>

        {/* MAIN TITLE (CENTERED) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white max-w-4xl leading-[1.1]">
          The best place to find your <br className="sm:hidden" />
          <span className="font-serif italic font-normal tracking-wide bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Dream Car
          </span>
        </h1>

        {/* SUBTITLE (CENTERED) */}
        <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-white/50 max-w-2xl">
          Experience the pinnacle of automotive excellence. We source, inspect, and deliver the world&apos;s most prestigious vehicles directly to your doorstep.
        </p>

        {/* CENTERED PILL SEARCH BAR */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative mt-10 max-w-2xl w-full px-2"
        >
          <div className="flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-md shadow-2xl focus-within:border-indigo-500/40 focus-within:shadow-indigo-500/5 focus-within:ring-1 focus-within:ring-indigo-500/20 transition-all duration-300">
            <Search className="ml-4 h-5 w-5 text-white/30 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by brand, model, or category..."
              className="w-full bg-transparent px-4 py-3.5 text-sm font-medium text-white outline-none placeholder:text-white/30"
            />

            {/* Search Now Action Button */}
            <button
              type="submit"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-8 py-3.5 text-sm font-black text-white hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-indigo-500/20 flex-shrink-0"
            >
              <span>Search Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>

        {/* OPTIONAL TOGGLE FOR ADVANCED FILTER SECTION */}
        <div className="mt-6 w-full flex flex-col items-center">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-indigo-400 transition-colors duration-200"
          >
            <SlidersHorizontal className={`h-3.5 w-3.5 transition-transform duration-300 ${showAdvanced ? 'rotate-90 text-indigo-400' : ''}`} />
            <span>{showAdvanced ? "Hide Advanced Search" : "Use Advanced Filters"}</span>
          </button>

          {/* Smooth drop in SearchFilter card */}
          {showAdvanced && (
            <div className="mt-8 w-full max-w-xl animate-in fade-in slide-in-from-top-4 duration-300">
              <SearchFilter />
            </div>
          )}
        </div>

        {/* BRAND TRUST SIGNALS AT THE BOTTOM (CENTERED) */}
        <div className="mt-16 sm:mt-24 border-t border-white/5 pt-8 w-full">
          <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-white/20 mb-8">
            Our Elite Partner Dealerships
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">

            {/* Auto Wheels */}
            <div className="group flex items-center justify-center">
              <span className="font-serif italic font-black tracking-tighter text-xl sm:text-2xl text-white/25 group-hover:text-white/60 transition duration-300 cursor-default select-none">
                Auto Wheels
              </span>
            </div>

            {/* Car World */}
            <div className="group flex items-center justify-center">
              <span className="font-sans font-black uppercase tracking-tighter text-lg sm:text-xl text-white/25 group-hover:text-white/60 transition duration-300 cursor-default select-none">
                Car World
              </span>
            </div>

            {/* Luxury Motors */}
            <div className="group flex items-center justify-center">
              <span className="font-sans font-extrabold uppercase italic tracking-wide text-lg sm:text-xl text-white/25 group-hover:text-indigo-400/80 transition duration-300 cursor-default select-none">
                Luxury <span className="text-indigo-500/40 group-hover:text-indigo-400/80 transition-colors">Motors</span>
              </span>
            </div>

            {/* Wheels Zone */}
            <div className="group flex items-center justify-center">
              <span className="font-mono font-bold uppercase tracking-widest text-base sm:text-lg text-white/25 group-hover:text-white/60 transition duration-300 cursor-default select-none">
                Wheels Zone
              </span>
            </div>

            {/* Premium Drive */}
            <div className="group flex items-center justify-center">
              <span className="font-sans font-black uppercase italic tracking-tight text-base sm:text-lg text-white/25 group-hover:text-cyan-400/80 transition duration-300 cursor-default select-none">
                Premium <span className="text-cyan-500/40 group-hover:text-cyan-400/80 transition-colors">Drive</span>
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import { MapPin, Clock, Sparkles } from "lucide-react";
import DealerBadge from "./DealerBadge";
import DealerStats from "./DealerStats";
import DealerActions from "./DealerActions";

export default function DealerCard({ dealer }) {
  const {
    name,
    logo,
    location,
    rating,
    reviews,
    totalCars,
    verified,
    featured,
    experience,
    phone,
    whatsapp,
    description,
    brands,
    timings,
    banner,
  } = dealer;

  return (
    <div className="group relative flex flex-col md:flex-row overflow-hidden rounded-[32px] border border-white/5 bg-[#0b0d19]/80 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-indigo-500/20 hover:shadow-indigo-500/5 hover:-translate-y-1 w-full">
      
      {/* LEFT IMAGE / BANNER SECTION */}
      <div className="relative h-48 md:h-auto md:w-72 lg:w-80 flex-shrink-0 overflow-hidden">
        <img
          src={banner}
          alt={`${name} Banner`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Glowing glass gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0b0d19] via-[#0b0d19]/40 to-transparent" />
        
        {/* OVERLAPPING DEALER LOGO */}
        <div className="absolute bottom-4 left-6 md:top-6 md:left-6 md:bottom-auto h-16 w-16 overflow-hidden rounded-2xl border-2 border-[#0b0d19] bg-[#12162b] p-1 shadow-xl">
          <img
            src={logo}
            alt={`${name} Logo`}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        {/* MOBILE TOP BADGES */}
        <div className="absolute top-4 right-4 flex flex-col gap-1.5 md:hidden">
          {featured && <DealerBadge type="featured" />}
          {verified && <DealerBadge type="verified" />}
        </div>
      </div>

      {/* RIGHT CONTENT SECTION */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
        
        {/* TOP ROW: NAME, BADGES, AND LOCATION */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-indigo-400 transition-colors duration-200">
                {name}
              </h3>
              <div className="hidden md:flex items-center gap-1.5">
                {featured && <DealerBadge type="featured" />}
                {verified && <DealerBadge type="verified" />}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/50 max-w-2xl leading-relaxed">
              {description}
            </p>
          </div>

          {/* CONTACT INFO / TIMINGS */}
          <div className="flex flex-wrap lg:flex-col items-start gap-4 text-xs font-semibold text-white/40 lg:text-right flex-shrink-0 lg:items-end">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-indigo-400" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-cyan-400" />
              <span>
                {timings.open} - {timings.close}
              </span>
            </div>
          </div>
        </div>

        {/* MIDDLE ROW: SPECIALIZATION & METRICS DISPLAY */}
        <div className="mt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-t border-white/5 pt-6">
          
          {/* SPECIALIZED BRANDS */}
          <div className="flex-1">
            <div className="flex items-center gap-1.5 mb-3">
              <Sparkles className="h-3 w-3 text-indigo-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                Specialized Brands
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {brands?.map((brand) => (
                <span
                  key={brand}
                  className="rounded-lg border border-white/5 bg-white/5 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-indigo-300"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* ATOMIC STATS MODULE */}
          <div className="flex-shrink-0 bg-white/[0.01] border border-white/5 rounded-2xl p-4 min-w-[280px] sm:min-w-[340px]">
            <DealerStats
              rating={rating}
              reviews={reviews}
              totalCars={totalCars}
              experience={experience}
            />
          </div>

        </div>

        {/* BOTTOM ROW: CALL TO ACTIONS */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/5 pt-6">
          <p className="text-[10px] sm:text-xs font-bold text-white/20 uppercase tracking-widest">
            Connect directly to clear inquiries & negotiate offers
          </p>
          <div className="w-full sm:w-auto">
            <DealerActions phone={phone} whatsapp={whatsapp} name={name} />
          </div>
        </div>

      </div>

    </div>
  );
}

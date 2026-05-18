"use client";

import { CarFront, Calendar, Star } from "lucide-react";

export default function DealerStats({ totalCars, experience, rating, reviews }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {/* RATING */}
      <div className="text-center pr-2 border-r border-white/5">
        <div className="flex items-center justify-center gap-1 text-amber-400">
          <Star className="h-3.5 w-3.5 fill-amber-400" />
          <span className="text-xs font-black text-white">{rating}</span>
        </div>
        <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-white/30">
          {reviews} Reviews
        </p>
      </div>

      {/* STOCK */}
      <div className="text-center pr-2 border-r border-white/5">
        <div className="flex items-center justify-center gap-1.5 text-indigo-400">
          <CarFront className="h-3.5 w-3.5" />
          <span className="text-xs font-black text-white">{totalCars}</span>
        </div>
        <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-white/30">
          Cars Stock
        </p>
      </div>

      {/* EXPERIENCE */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-1.5 text-cyan-400">
          <Calendar className="h-3.5 w-3.5" />
          <span className="text-xs font-black text-white">{experience}</span>
        </div>
        <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-white/30">
          Experience
        </p>
      </div>
    </div>
  );
}

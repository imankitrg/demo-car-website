"use client";

import Image from "next/image";
import { MessageCircle, Heart, ArrowRight, Fuel, Settings2, IndianRupee } from "lucide-react";

export default function CarCard({ car }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.02] transition-all duration-500 hover:border-indigo-500/20 hover:bg-white/[0.04]">
      
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] bg-white/[0.02] p-2">
        <Image
          src={car.image}
          alt={car.name}
          width={600}
          height={400}
          className="h-full w-full object-cover rounded-[24px] transition duration-1000 group-hover:scale-110"
        />

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* TOP BADGES */}
        <div className="absolute left-6 top-6 flex items-center gap-2">
          <div className="rounded-full bg-black/40 backdrop-blur-md px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-white/80 border border-white/10">
            {car.year}
          </div>
        </div>

        {/* LIKE BUTTON */}
        <button className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white/60 backdrop-blur-md border border-white/10 transition hover:bg-red-500/20 hover:text-red-500 hover:border-red-500/40">
          <Heart className="h-4.5 w-4.5" />
        </button>

        {/* PRICE TAG (Visible on Hover) */}
        <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex items-center gap-1.5 text-xl font-black text-white">
            <span className="text-sm font-bold text-indigo-400">₹</span>
            {car.price.replace("₹", "").trim()}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col px-7 py-8">
        
        {/* BRAND & NAME */}
        <div className="mb-4">
          <h3 className="text-xl font-black tracking-tight text-white transition duration-300 group-hover:text-indigo-400">
            {car.name}
          </h3>
          <div className="mt-2 flex items-center gap-4">
             <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/30">
               <Fuel className="h-3 w-3 text-indigo-400/60" />
               {car.fuel}
             </div>
             <div className="h-1 w-1 rounded-full bg-white/10" />
             <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/30">
               <Settings2 className="h-3 w-3 text-cyan-400/60" />
               {car.transmission}
             </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-auto flex items-center gap-3 pt-6 border-t border-white/5">
          <button className="group flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 py-4 text-xs font-black text-white shadow-lg shadow-indigo-500/10 transition hover:shadow-indigo-500/20 active:scale-95">
            Details
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-green-400 transition hover:bg-green-500/10 hover:border-green-500/20 hover:text-green-500">
            <MessageCircle className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
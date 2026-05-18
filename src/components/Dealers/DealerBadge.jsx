"use client";

import { CheckCircle2, Award, Star } from "lucide-react";

export default function DealerBadge({ type }) {
  if (type === "verified") {
    return (
      <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-500/5">
        <CheckCircle2 className="h-3 w-3 animate-pulse" />
        <span>Verified</span>
      </div>
    );
  }

  if (type === "featured") {
    return (
      <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-400 backdrop-blur-md shadow-lg shadow-amber-500/5">
        <Award className="h-3 w-3" />
        <span>Elite Partner</span>
      </div>
    );
  }

  if (type === "top-rated") {
    return (
      <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-400 backdrop-blur-md shadow-lg shadow-indigo-500/5">
        <Star className="h-3 w-3 fill-indigo-400/20" />
        <span>Top Rated</span>
      </div>
    );
  }

  return null;
}

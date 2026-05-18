"use client";

import { useState } from "react";
import { Search, MapPin, Sparkles, SlidersHorizontal, ShieldCheck } from "lucide-react";
import DealerCard from "./DealerCard";

export default function DealersGrid({ dealers = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [featuredOnly, setFeaturedOnly] = useState(false);

  // Extract unique cities from dealers list
  const cities = [
    "All Cities",
    ...new Set(dealers.map((d) => d.location.split(",")[0].trim())),
  ];

  // Filter logic
  const filteredDealers = dealers.filter((dealer) => {
    const matchesSearch =
      dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dealer.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dealer.brands.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCity =
      selectedCity === "All Cities" ||
      dealer.location.toLowerCase().startsWith(selectedCity.toLowerCase());

    const matchesVerified = !verifiedOnly || dealer.verified;
    const matchesFeatured = !featuredOnly || dealer.featured;

    return matchesSearch && matchesCity && matchesVerified && matchesFeatured;
  });

  return (
    <div className="space-y-12">
      {/* FILTER CONTROL BAR */}
      <div className="rounded-[32px] border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md shadow-2xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          
          {/* SEARCH INPUT */}
          <div className="relative flex-1">
            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dealers by name, city, or specialized brand..."
              className="h-14 w-full rounded-2xl border border-white/5 bg-white/5 pl-14 pr-6 text-sm font-medium text-white outline-none placeholder:text-white/20 focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 transition-all duration-300"
            />
          </div>

          {/* DROP DOWNS AND CHECKS */}
          <div className="flex flex-wrap items-center gap-4">
            
            {/* CITY SELECT */}
            <div className="relative inline-flex items-center rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm font-bold text-white transition hover:border-white/10">
              <MapPin className="mr-2 h-4 w-4 text-indigo-400" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-transparent pr-8 text-xs font-black uppercase tracking-widest text-white/80 outline-none cursor-pointer appearance-none"
              >
                {cities.map((city) => (
                  <option key={city} value={city} className="bg-[#0b0d19] text-white">
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* VERIFIED CHECKBOX */}
            <button
              onClick={() => setVerifiedOnly(!verifiedOnly)}
              className={`flex items-center gap-2 rounded-2xl border px-5 py-3.5 text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                verifiedOnly
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-lg shadow-emerald-500/5"
                  : "border-white/5 bg-white/5 text-white/40 hover:border-white/10 hover:text-white/70"
              }`}
            >
              <ShieldCheck className="h-4 w-4" />
              <span>Verified Only</span>
            </button>

            {/* FEATURED CHECKBOX */}
            <button
              onClick={() => setFeaturedOnly(!featuredOnly)}
              className={`flex items-center gap-2 rounded-2xl border px-5 py-3.5 text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                featuredOnly
                  ? "border-amber-500/30 bg-amber-500/10 text-amber-400 shadow-lg shadow-amber-500/5"
                  : "border-white/5 bg-white/5 text-white/40 hover:border-white/10 hover:text-white/70"
              }`}
            >
              <Sparkles className="h-4 w-4" />
              <span>Elite Partners</span>
            </button>

          </div>
        </div>
      </div>

      {/* RESULTS DISPLAY */}
      {filteredDealers.length > 0 ? (
        <div className="grid grid-cols-1 gap-8">
          {filteredDealers.map((dealer) => (
            <DealerCard key={dealer.id} dealer={dealer} />
          ))}
        </div>
      ) : (
        <div className="rounded-[32px] border border-white/5 bg-white/[0.02] py-20 text-center backdrop-blur-md shadow-2xl">
          <SlidersHorizontal className="mx-auto h-12 w-12 text-white/20 animate-pulse" />
          <h3 className="mt-6 text-xl font-black text-white">No Dealers Found</h3>
          <p className="mt-2 text-sm text-white/40 max-w-md mx-auto">
            We couldn&apos;t find any dealerships matching your current filter settings. Try adjusting your keywords or filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCity("All Cities");
              setVerifiedOnly(false);
              setFeaturedOnly(false);
            }}
            className="mt-6 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-8 py-3.5 text-xs font-black text-white hover:opacity-90 transition active:scale-95"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

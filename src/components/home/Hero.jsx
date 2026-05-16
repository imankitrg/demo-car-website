"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  Wallet,
  CarFront,
  Fuel,
  Settings2,
  SlidersHorizontal,
  X,
  Search,
  ChevronDown,
  Tag,
  Gauge,
} from "lucide-react";

const CAR_TYPES = [
  { label: "Buy New", value: "new", emoji: "✨" },
  { label: "Buy Used", value: "used", emoji: "🔑" },
  { label: "Sell Car", value: "sell", emoji: "💰" },
];

const FILTERS = [
  {
    id: "brand",
    label: "Brand",
    icon: CarFront,
    color: "text-blue-400",
    options: ["Toyota", "Honda", "BMW", "Mercedes", "Hyundai", "Kia", "Ford", "Audi", "Nissan", "Suzuki"],
  },
  {
    id: "fuel",
    label: "Fuel Type",
    icon: Fuel,
    color: "text-cyan-400",
    options: ["Petrol", "Diesel", "Electric", "Hybrid"],
  },
  {
    id: "transmission",
    label: "Gearbox",
    icon: Settings2,
    color: "text-violet-400",
    options: ["Automatic", "Manual", "Semi-Auto"],
  },
  {
    id: "body",
    label: "Body Type",
    icon: Tag,
    color: "text-pink-400",
    options: ["SUV", "Sedan", "Hatchback", "Coupe", "Pickup Truck", "Van", "Convertible"],
  },
];

const BUDGET_MIN = 100000;
const BUDGET_MAX = 10000000;
const BUDGET_STEP = 100000;

function formatBudget(val) {
  if (val >= 1000000) return `₹${(val / 1000000).toFixed(1)}L`;
  if (val >= 100000) return `₹${(val / 100000).toFixed(0)}L`;
  return `₹${val.toLocaleString()}`;
}

const PLACEHOLDER_CYCLE = [
  "Search Toyota Fortuner...",
  "Search Honda City...",
  "Search BMW 3 Series...",
  "Search Hyundai Creta...",
  "Search any brand or model...",
];

const QUICK_TAGS = ["Toyota", "SUV", "Under ₹10L", "Electric", "Automatic"];

export default function Hero() {
  const [showFilters, setShowFilters] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [budget, setBudget] = useState(2000000);
  const [carType, setCarType] = useState("used");
  const [selected, setSelected] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIdx((p) => (p + 1) % PLACEHOLDER_CYCLE.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (filterId, opt) => {
    setSelected((prev) => ({ ...prev, [filterId]: opt }));
    setActiveDropdown(null);
  };

  const clearFilter = (filterId, e) => {
    e.stopPropagation();
    setSelected((prev) => {
      const next = { ...prev };
      delete next[filterId];
      return next;
    });
  };

  const budgetPercent = ((budget - BUDGET_MIN) / (BUDGET_MAX - BUDGET_MIN)) * 100;

  return (
    <section className="relative overflow-hidden bg-[#020205] pt-16 pb-16 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-48">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/home/officai_hero.Webp"
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-90 scale-100"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
          
          {/* LEFT */}
          <div className="max-w-2xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                200+ Premium Cars in Stock
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
              Drive The{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Future
              </span>{" "}
              of Luxury
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-white/60">
              Experience the pinnacle of automotive excellence. We source, inspect, and deliver the world&apos;s most prestigious vehicles directly to your doorstep.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-10 py-5 text-sm font-black text-white shadow-lg shadow-blue-500/25 transition hover:opacity-90">
                Explore Collection
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <button className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-10 py-5 text-sm font-bold text-white transition hover:bg-white/10">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                  <Play className="h-3 w-3 fill-white" />
                </div>
                Watch Showreel
              </button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/5 pt-12">
              {[
                { label: "Cars Sold", value: "2.4k+" },
                { label: "Happy Clients", value: "99%" },
                { label: "Locations", value: "12+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: ALIVE SEARCH BOX */}
          <div className="relative z-20">
            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl shadow-2xl">

              {/* BUY NEW / BUY USED / SELL CAR TABS */}
              <div className="mb-8 flex gap-2 rounded-2xl bg-white/5 p-2">
                {CAR_TYPES.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setCarType(type.value)}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-xs font-black transition-all duration-300 ${carType === type.value
                        ? "bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20"
                        : "text-white/40 hover:text-white/70"
                      }`}
                  >
                    <span className="text-sm">{type.emoji}</span>
                    {type.label}
                  </button>
                ))}
              </div>

              <div className="space-y-4">

                {/* SEARCH INPUT — cycling placeholder */}
                <div
                  className={`relative flex items-center rounded-2xl border transition-all duration-300 ${isFocused
                      ? "border-indigo-500/60 bg-white/10 shadow-lg shadow-indigo-500/10"
                      : "border-white/5 bg-white/5 hover:border-white/10"
                    }`}
                >
                  <Search
                    className={`absolute left-6 h-5 w-5 transition-colors duration-200 ${isFocused ? "text-indigo-400" : "text-white/30"
                      }`}
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={PLACEHOLDER_CYCLE[placeholderIdx]}
                    className="h-16 w-full bg-transparent pl-16 pr-12 text-sm font-medium text-white outline-none placeholder:text-white/25"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/50 hover:text-white transition"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* BUDGET SLIDER — always visible, no dropdown */}
                <div className="rounded-2xl border border-white/5 bg-white/5 px-6 py-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Wallet className="h-5 w-5 text-indigo-400" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                        Budget Range
                      </span>
                    </div>
                    <span className="text-sm font-black text-indigo-300">
                      Up to {formatBudget(budget)}
                    </span>
                  </div>
                  <div className="relative h-2 rounded-full bg-white/10">
                    <div
                      className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-150"
                      style={{ width: `${budgetPercent}%` }}
                    />
                    <input
                      type="range"
                      min={BUDGET_MIN}
                      max={BUDGET_MAX}
                      step={BUDGET_STEP}
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                    />
                  </div>
                  <div className="mt-3 flex justify-between text-[10px] font-bold text-white/20 uppercase">
                    <span>{formatBudget(BUDGET_MIN)}</span>
                    <span>{formatBudget(BUDGET_MAX)}</span>
                  </div>
                </div>

                {/* FILTER DROPDOWNS — 2x2 grid */}
                <div className="grid grid-cols-2 gap-4">
                  {FILTERS.map((filter) => {
                    const Icon = filter.icon;
                    const isOpen = activeDropdown === filter.id;
                    const picked = selected[filter.id];
                    return (
                      <div key={filter.id} className="relative">
                        <button
                          onClick={() =>
                            setActiveDropdown(isOpen ? null : filter.id)
                          }
                          className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 transition-all duration-200 ${isOpen
                              ? "border-indigo-500/50 bg-white/10"
                              : picked
                                ? "border-indigo-500/30 bg-indigo-500/10"
                                : "border-white/5 bg-white/5 hover:border-white/10"
                            }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <Icon
                              className={`h-4 w-4 flex-shrink-0 ${picked ? "text-indigo-400" : filter.color
                                }`}
                            />
                            <div className="flex flex-col items-start min-w-0">
                              <span className="text-[9px] uppercase tracking-widest text-white/30">
                                {filter.label}
                              </span>
                              <span
                                className={`text-xs font-black truncate max-w-[80px] ${picked ? "text-white" : "text-white/40"
                                  }`}
                              >
                                {picked || "Any"}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            {picked && (
                              <button
                                onClick={(e) => clearFilter(filter.id, e)}
                                className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white/40 hover:text-white transition"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            )}
                            <ChevronDown
                              className={`h-4 w-4 text-white/20 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                                }`}
                            />
                          </div>
                        </button>

                        {/* DROPDOWN */}
                        {isOpen && (
                          <div className="absolute top-[calc(100%+8px)] left-0 z-50 w-full rounded-2xl border border-white/10 bg-[#0c0e1e] py-3 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
                            {filter.options.map((opt) => (
                              <button
                                key={opt}
                                onClick={() => handleSelect(filter.id, opt)}
                                className={`flex w-full items-center gap-3 px-6 py-3 text-left text-xs font-bold transition hover:bg-white/5 ${selected[filter.id] === opt
                                    ? "text-indigo-400"
                                    : "text-white/50 hover:text-white"
                                  }`}
                              >
                                {selected[filter.id] === opt && (
                                  <span className="h-2 w-2 rounded-full bg-indigo-400 flex-shrink-0" />
                                )}
                                {opt}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* SEARCH BUTTON */}
                <button
                  onClick={() => setShowFilters(true)}
                  className="group mt-2 w-full flex h-16 items-center justify-center gap-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-base font-black text-white shadow-xl shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40 hover:scale-[1.015] active:scale-95"
                >
                  <Search className="h-5 w-5" />
                  Find My Car
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>

                {/* QUICK SEARCH TAGS */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {QUICK_TAGS.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold text-white/40 transition hover:border-indigo-500/40 hover:text-indigo-300 hover:bg-indigo-500/10"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ADVANCED FILTER MODAL */}
      {showFilters && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 backdrop-blur-sm p-0 sm:items-center sm:p-6">
          <div className="flex h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-[32px] border border-white/10 bg-[#0b0d1a] sm:h-auto sm:max-h-[85vh] sm:rounded-[32px]">
            <div className="flex items-center justify-between border-b border-white/5 p-8">
              <h3 className="text-2xl font-black text-white">Advanced Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white transition hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 pr-6 custom-scrollbar">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { name: "Price Range", icon: <Wallet className="h-5 w-5 text-indigo-400" /> },
                  { name: "Body Style", icon: <CarFront className="h-5 w-5 text-blue-400" /> },
                  { name: "Fuel Type", icon: <Fuel className="h-5 w-5 text-cyan-400" /> },
                  { name: "Transmission", icon: <Settings2 className="h-5 w-5 text-indigo-400" /> },
                  { name: "Year", icon: <SlidersHorizontal className="h-5 w-5 text-blue-400" /> },
                  { name: "Mileage", icon: <Gauge className="h-5 w-5 text-cyan-400" /> },
                ].map((filter, index) => (
                  <button
                    key={index}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-6 text-left transition hover:border-indigo-500/50 hover:bg-white/10"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                        {filter.icon}
                      </div>
                      <span className="text-sm font-bold text-white">{filter.name}</span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-white/20" />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/5 bg-white/5 p-8">
              <button className="text-sm font-bold text-white/40 transition hover:text-white">
                Clear All
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-10 py-4 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition hover:opacity-90"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

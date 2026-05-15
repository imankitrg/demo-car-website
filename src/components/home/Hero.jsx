"use client";

import { useState } from "react";
import Image from "next/image";

import {
  Search,
  MapPin,
  Wallet,
  CarFront,
  Fuel,
  Settings2,
  SlidersHorizontal,
  Users,
  ShieldCheck,
  Gauge,
  Zap,
  Palette,
  X,
} from "lucide-react";

export default function Hero() {
  const [showFilters, setShowFilters] = useState(false);

  const filters = [
    {
      name: "Budget",
      icon: <Wallet className="h-5 w-5 text-teal-600" />,
    },
    {
      name: "Body Type",
      icon: <CarFront className="h-5 w-5 text-teal-600" />,
    },
    {
      name: "Transmission",
      icon: <Settings2 className="h-5 w-5 text-teal-600" />,
    },
    {
      name: "Fuel Type",
      icon: <Fuel className="h-5 w-5 text-teal-600" />,
    },
    {
      name: "Make",
      icon: <CarFront className="h-5 w-5 text-teal-600" />,
    },
    {
      name: "Seating Capacity",
      icon: <Users className="h-5 w-5 text-teal-600" />,
    },
    {
      name: "Mileage",
      icon: <Gauge className="h-5 w-5 text-teal-600" />,
    },
    {
      name: "Safety Rating",
      icon: <ShieldCheck className="h-5 w-5 text-teal-600" />,
    },
    {
      name: "Airbags",
      icon: <ShieldCheck className="h-5 w-5 text-teal-600" />,
    },
    {
      name: "Additional Features",
      icon: <SlidersHorizontal className="h-5 w-5 text-teal-600" />,
    },
    {
      name: "Engine Capacity",
      icon: <Zap className="h-5 w-5 text-teal-600" />,
    },
    {
      name: "Power",
      icon: <Zap className="h-5 w-5 text-teal-600" />,
    },
    {
      name: "Torque",
      icon: <Zap className="h-5 w-5 text-teal-600" />,
    },
    {
      name: "Colours",
      icon: <Palette className="h-5 w-5 text-teal-600" />,
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/cars/hero.webp"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto grid min-h-[95vh] max-w-7xl grid-cols-1 items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="text-white">
          {/* BADGE */}
          <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
            Premium Car Marketplace
          </div>

          {/* HEADING */}
          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl">
            Find Your
            <span className="block text-gray-300">Perfect Drive</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Explore luxury, electric, and performance cars with a modern buying
            experience built for speed and simplicity.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-gray-200">
              Explore Cars
            </button>

            <button className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white">
              Sell Your Car
            </button>
          </div>

          {/* STATS */}
          <div className="mt-12 flex flex-wrap gap-8 sm:gap-10">
            <div>
              <h3 className="text-3xl font-black">120+</h3>

              <p className="mt-1 text-sm text-gray-300">Premium Cars</p>
            </div>

            <div>
              <h3 className="text-3xl font-black">85+</h3>

              <p className="mt-1 text-sm text-gray-300">Happy Buyers</p>
            </div>

            <div>
              <h3 className="text-3xl font-black">24/7</h3>

              <p className="mt-1 text-sm text-gray-300">Support</p>
            </div>
          </div>
        </div>

        {/* RIGHT SEARCH UI */}
        <div className="w-full">
          <div className="rounded-[28px] bg-white p-5 shadow-2xl sm:rounded-[36px] sm:p-8 md:p-10">
            {/* TOP */}
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 sm:text-sm">
                  Smart Search
                </p>

                <h2 className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                  Find Your Right Car
                </h2>
              </div>

              {/* LOCATION */}
              <button className="flex items-center gap-2 text-base font-semibold text-gray-700 sm:text-lg">
                Mumbai
                <MapPin className="h-5 w-5" />
              </button>
            </div>

            {/* SEARCH BAR */}
            <div className="flex flex-col gap-4 rounded-[28px] border border-gray-300 p-3 sm:rounded-[32px]">
              {/* TOGGLE */}
              <div className="flex w-fit rounded-full bg-gray-100 p-1">
                <button className="rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white sm:px-6">
                  New
                </button>

                <button className="rounded-full px-5 py-3 text-sm font-semibold text-gray-600 sm:px-6">
                  Used
                </button>
              </div>

              {/* INPUT */}
              <div className="flex items-center justify-between gap-4">
                <input
                  type="text"
                  placeholder="Type to select car name"
                  className="w-full bg-transparent px-2 py-3 text-base text-gray-800 outline-none placeholder:text-gray-400 sm:text-lg"
                />

                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 transition hover:border-black sm:h-14 sm:w-14">
                  <Search className="h-5 w-5 text-gray-700 sm:h-6 sm:w-6" />
                </button>
              </div>
            </div>

            {/* QUICK FILTERS */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-black hover:bg-white sm:px-5 sm:py-4 sm:text-base">
                <Wallet className="h-5 w-5 text-teal-600" />
                Budget
              </button>

              <button className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-black hover:bg-white sm:px-5 sm:py-4 sm:text-base">
                <CarFront className="h-5 w-5 text-teal-600" />
                Body Type
              </button>

              <button className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-black hover:bg-white sm:px-5 sm:py-4 sm:text-base">
                <Fuel className="h-5 w-5 text-teal-600" />
                Fuel Type
              </button>

              <button className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-black hover:bg-white sm:px-5 sm:py-4 sm:text-base">
                <Settings2 className="h-5 w-5 text-teal-600" />
                Transmission
              </button>

              {/* ALL FILTER BUTTON */}
              <button
                onClick={() => setShowFilters(true)}
                className="flex items-center gap-3 rounded-2xl border border-teal-600 bg-teal-600 px-4 py-3 text-sm font-medium text-white transition hover:opacity-90 sm:px-5 sm:py-4 sm:text-base"
              >
                <SlidersHorizontal className="h-5 w-5" />
                All Filters
              </button>
            </div>

            {/* FILTER MODAL */}
            {showFilters && (
              <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-6">
                <div className="flex h-[92vh] w-full max-w-3xl flex-col rounded-t-[32px] bg-white p-5 sm:h-auto sm:max-h-[90vh] sm:rounded-[32px] sm:p-8">
                  
                  {/* HEADER */}
                  <div className="flex items-center justify-between border-b border-gray-200 pb-5">
                    <h3 className="text-2xl font-black text-gray-900">
                      All Filters
                    </h3>

                    <button
                      onClick={() => setShowFilters(false)}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* FILTER LIST */}
                  <div className="mt-6 grid flex-1 grid-cols-1 gap-4 overflow-y-auto pr-1 sm:grid-cols-2">
                    {filters.map((filter, index) => (
                      <button
                        key={index}
                        className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-5 text-left transition hover:border-teal-600 hover:bg-white"
                      >
                        {filter.icon}

                        <span className="text-sm font-semibold text-gray-700 sm:text-base">
                          {filter.name}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* FOOTER */}
                  <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-5">
                    <button className="text-sm font-bold text-gray-500 transition hover:text-black sm:text-base">
                      Clear All
                    </button>

                    <button className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 sm:px-7 sm:text-base">
                      Apply Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
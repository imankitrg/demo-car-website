"use client";

import featuredCars from "@/data/featuredCars";
import CarCard from "./CarCard";
import { ArrowRight } from "lucide-react";

const sections = [
  {
    title: "Trending Cars",
    key: "trending",
  },
  {
    title: "Popular Cars",
    key: "popular",
  },
  {
    title: "New Cars",
    key: "newCars",
  },
  {
    title: "Used Cars",
    key: "usedCars",
  },
];

export default function FeaturedCars() {
  return (
    <section className="bg-[#060816] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* TOP */}
        <div className="mb-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-indigo-400">
            Exclusive Collection
          </p>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            Explore Cars Across <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Every Category</span>
          </h2>
        </div>

        {/* SECTIONS */}
        <div className="space-y-32">
          {sections.map((section) => (
            <div key={section.key} className="relative">
              {/* SECTION HEADER */}
              <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-0">
                <div>
                  <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                    {section.title}
                  </h3>
                  <div className="mt-2 h-1.5 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
                </div>

                <button className="flex items-center gap-2 text-sm font-bold text-white/40 transition hover:text-white">
                  View Full Catalog
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* CAR GRID */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {featuredCars[section.key].map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
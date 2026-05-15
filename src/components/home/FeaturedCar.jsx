"use client";

import featuredCars from "@/data/featuredCars";
import CarCard from "./CarCard";

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
    <section className="bg-white py-20">
      
      <div className="mx-auto max-w-7xl px-6">
        
        {/* TOP */}
        <div className="mb-16">
          
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Featured Collection
          </p>

          <h2 className="max-w-3xl text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
            Explore Cars Across Every Category
          </h2>
        </div>

        {/* SECTIONS */}
        <div className="space-y-20">
          
          {sections.map((section) => (
            <div key={section.key}>
              
              {/* SECTION HEADER */}
              <div className="mb-8 flex items-center justify-between">
                
                <h3 className="text-3xl font-black tracking-tight text-gray-900">
                  {section.title}
                </h3>

                <button className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 transition hover:border-black hover:text-black">
                  View All
                </button>
              </div>

              {/* CAR GRID */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                
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
"use client";

import Image from "next/image";

export default function Brands() {
  const brands = [
    {name: "BMW",image: "/cars/hero.webp", slug: "bmw"},
    {name:"maruti suzuki", image: "/cars/hero.webp", slug: "maruti-suzuki"},
    {name:"tata", image: "/cars/hero.webp", slug: "tata"},
    {name:"mahindra", image: "/cars/hero.webp", slug: "mahindra"},
    {name:"hyundai", image: "/cars/hero.webp", slug: "hyundai"},
    {name:"toyota", image: "/cars/hero.webp", slug: "toyota"},
    {name:"kia", image: "/cars/hero.webp", slug: "kia"},
    {name:"skoda", image: "/cars/hero.webp", slug: "skoda"},
    {name:"volkswagen", image: "/cars/hero.webp", slug: "volkswagen"},
    {name:"mg", image: "/cars/hero.webp", slug: "mg"},
    {name:"renault", image: "/cars/hero.webp", slug: "renault"},
    {name:"mercedes-benz", image: "/cars/hero.webp", slug: "mercedes-benz"},
  ];

  return (
    <section className="bg-gray-50 py-20">
      
      <div className="mx-auto max-w-7xl px-6">
        
        {/* TOP */}
        <div className="mb-10">
          
          <h2 className="text-4xl font-black tracking-tight text-gray-900">
            All Brands
          </h2>
        </div>

        {/* BRANDS BOX */}
        <div className="overflow-hidden rounded-[32px] border border-gray-300 bg-white">
          
          {/* GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="group flex flex-col items-center justify-center border-b border-r border-gray-200 px-6 py-10 transition hover:bg-gray-50"
              >
                
                {/* LOGO */}
                <div className="relative mb-5 h-[70px] w-[120px]">
                  
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-contain grayscale transition duration-300 group-hover:grayscale-0"
                  />
                </div>

                {/* NAME */}
                <h3 className="text-center text-lg font-semibold text-gray-800">
                  {brand.name}
                </h3>

                {/* BUTTON */}
                <button className="mt-4 rounded-full border border-gray-300 px-4 py-2 text-xs font-semibold text-gray-700 transition hover:border-black hover:text-black">
                  View Cars
                </button>
              </div>
            ))}
          </div>

          {/* BOTTOM BUTTON */}
          <div className="flex justify-center border-t border-gray-200 px-6 py-6">
            
            <button className="text-lg font-medium text-gray-700 transition hover:text-black">
              View More Brands
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
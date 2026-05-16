"use client";

import { 
  siToyota, 
  siHonda, 
  siHyundai, 
  siKia, 
  siSuzuki, 
  siNissan, 
  siRenault, 
  siVolkswagen, 
  siTata, 
  siMahindra, 
  siSkoda, 
  siFord 
} from 'simple-icons';
import { ArrowRight } from "lucide-react";

export default function Brands() {
  const brands = [
    { name: "Toyota", icon: siToyota },
    { name: "Honda", icon: siHonda },
    { name: "Hyundai", icon: siHyundai },
    { name: "Kia", icon: siKia },
    { name: "Suzuki", icon: siSuzuki },
    { name: "Nissan", icon: siNissan },
    { name: "Volkswagen", icon: siVolkswagen },
    { name: "Renault", icon: siRenault },
    { name: "Tata", icon: siTata },
    { name: "Mahindra", icon: siMahindra },
    { name: "Skoda", icon: siSkoda },
    { name: "Ford", icon: siFord },
  ];

  return (
    <section className="bg-[#060816] py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-indigo-400">
              Partnerships
            </p>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              Elite <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Partnerships</span>
            </h2>
          </div>
          <button className="group flex items-center gap-2 text-sm font-bold text-white/40 transition hover:text-white">
            View All Brands
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
        </div>

        {/* BRANDS GRID */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[32px] border border-white/5 bg-white/5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group relative flex h-40 flex-col items-center justify-center bg-[#060816] transition-all duration-300 hover:bg-white/[0.02]"
            >
              {/* LOGO SVG */}
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-10 w-10 fill-white/20 transition-all duration-500 group-hover:scale-110"
                style={{
                  '--hover-color': `#${brand.icon.hex}`
                }}
              >
                <path d={brand.icon.path} className="group-hover:fill-[var(--hover-color)]" />
              </svg>
              
              {/* BRAND NAME */}
              <span className="absolute bottom-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/0 transition-all duration-300 group-hover:text-white/40">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
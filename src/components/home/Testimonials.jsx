"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alexander Volkov",
      role: "BMW X5 Owner",
      text: "Outstanding service. The team handled everything from inspection to registration. Highly recommended for premium cars.",
    },
    {
      id: 2,
      name: "Elena Petrova",
      role: "Porsche Cayenne Owner",
      text: "The best car buying experience I've ever had. Transparent process and professional staff. Found exactly what I wanted.",
    },
    {
      id: 3,
      name: "Dmitry Sokolov",
      role: "Mercedes GLE Owner",
      text: "Quality cars and excellent after-sales support. LUXEON AUTO truly understands the premium market.",
    },
  ];

  return (
    <section className="bg-[#060816] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* TOP */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Testimonials
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            What Our <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Clients</span> Say
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-[32px] border border-white/5 bg-white/[0.02] p-10 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
            >
              <Quote className="absolute right-10 top-10 h-10 w-10 text-white/5" />

              {/* STARS */}
              <div className="mb-6 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sm text-yellow-500">★</span>
                ))}
              </div>

              {/* TEXT */}
              <p className="text-lg leading-relaxed text-white/60 transition group-hover:text-white/80">
                "{item.text}"
              </p>

              {/* USER */}
              <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-8">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500" />
                <div>
                  <h3 className="text-base font-bold text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/30">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
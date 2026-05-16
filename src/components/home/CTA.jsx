"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#060816] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[48px] border border-white/5 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-transparent px-8 py-20 md:px-20 lg:py-24">

          {/* BACKGROUND DECORATIONS */}
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT CONTENT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                  Ready to Start?
                </span>
              </div>

              <h2 className="text-4xl font-black leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                Find The Car That <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Matches</span> Your Lifestyle
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/40">
                Explore our curated collection of luxury, electric, and performance vehicles. Experience a seamless buying journey tailored for the most discerning drivers.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-5">
                <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-10 py-5 text-sm font-black text-white shadow-lg shadow-blue-500/25 transition hover:opacity-90">
                  Explore Collection
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>

                <button className="rounded-full border border-white/10 bg-white/5 px-10 py-5 text-sm font-bold text-white transition hover:bg-white/10">
                  Sell Your Car
                </button>
              </div>

              {/* TRUST SIGNALS */}
              <div className="mt-12 flex items-center gap-8 border-t border-white/5 pt-10">
                <div>
                  <p className="text-2xl font-black text-white">200+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Premium Cars</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">12+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Locations</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">99%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Happy Clients</p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-3 backdrop-blur-md shadow-2xl">
                <Image
                  src="/home/official-hero.Webp"
                  alt="Luxury Car Display"
                  width={1000}
                  height={625}
                  className="h-full w-full object-cover rounded-[30px] opacity-90 transition duration-700 hover:scale-105"
                />
              </div>

              {/* BRAND OVERLAY */}
              <div className="absolute -bottom-6 -right-6 flex items-center gap-4 rounded-3xl border border-white/10 bg-[#060816]/80 px-8 py-6 backdrop-blur-xl shadow-2xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-400 text-xl font-black text-white">
                  C
                </div>
                <div>
                  <p className="text-xl font-black tracking-tight text-white">democar</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Official Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

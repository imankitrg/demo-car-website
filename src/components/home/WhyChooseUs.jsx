"use client";

import { ShieldCheck, Globe, Star } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Buy New Cars",
      description:
        "Explore the latest cars from trusted brands with smart filters, easy comparison, financing options, and test drive support.",
      icon: <Star className="h-6 w-6 text-indigo-400" />,
    },

    {
      title: "Buy Used Cars",
      description:
        "Find verified used cars with transparent pricing, inspection reports, ownership details, and trusted sellers.",
      icon: <ShieldCheck className="h-6 w-6 text-blue-400" />,
    },

    {
      title: "Sell Your Car",
      description:
        "List your car in minutes, connect with genuine buyers, increase visibility, and sell faster with a smooth experience.",
      icon: <Globe className="h-6 w-6 text-cyan-400" />,
    },
  ];

  return (
    <section className="bg-[#0b0d1a] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* TOP */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-indigo-400">
            Premium Experience
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Everything You Need In One <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Platform</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/40">
            Whether you want to buy a new car, purchase a verified used car, or sell your current vehicle — we make the process simple and modern.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-[32px] border border-white/5 bg-white/[0.02] p-10 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
            >
              {/* ICON */}
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 font-black text-white">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-black tracking-tight text-white">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-5 text-base leading-relaxed text-white/40 group-hover:text-white/60 transition">
                {item.description}
              </p>

              {/* BUTTON */}
              <button className="mt-8 flex items-center gap-2 text-sm font-bold text-white transition hover:gap-3">
                Learn More
                <span className="text-indigo-400">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
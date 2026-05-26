"use client";

import { useState } from "react";
import { Search, ClipboardCheck, FileText, Truck, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Vehicle Selection",
    description: "Tell us your preferences and budget. We match you with the perfect car from our verified listings.",
    accent: "from-indigo-500 to-blue-500",
    glow: "shadow-indigo-500/20",
    border: "group-hover:border-indigo-500/40",
    tag: "Browse & Filter",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Inspection & Approval",
    description: "Full diagnostics, legal checks, and service history verified. Every car cleared before it reaches you.",
    accent: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/20",
    border: "group-hover:border-blue-500/40",
    tag: "100% Verified",
  },
  {
    number: "03",
    icon: FileText,
    title: "Transaction Setup",
    description: "All paperwork handled. Secure payment process with zero hidden charges or last-minute surprises.",
    accent: "from-cyan-500 to-teal-400",
    glow: "shadow-cyan-500/20",
    border: "group-hover:border-cyan-500/40",
    tag: "Zero Hidden Fees",
  },
  {
    number: "04",
    icon: Truck,
    title: "Vehicle Delivery",
    description: "Your car delivered to your door. Our team stays available for all after-sales support.",
    accent: "from-teal-400 to-green-400",
    glow: "shadow-teal-500/20",
    border: "group-hover:border-teal-500/40",
    tag: "Doorstep Delivery",
  },
];

export default function HowWeWork() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-[#060816] py-24 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="text-center lg:text-left">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-indigo-400">
              Process
            </p>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              How We{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Work
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/40 text-center lg:text-right">
            From search to delivery — a seamless experience built around you.
          </p>
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = active === index;
            return (
              <div
                key={step.number}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                className={`group relative flex flex-col rounded-3xl border bg-white/[0.03] p-7 transition-all duration-300 cursor-default
                  ${isActive ? `border-white/10 bg-white/[0.06] -translate-y-1` : "border-white/5"}
                  ${step.border}
                `}
              >
                {/* TOP ROW */}
                <div className="mb-6 flex items-start justify-between">
                  {/* ICON BADGE */}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} shadow-lg ${step.glow} transition-transform duration-300 ${isActive ? "scale-110" : ""}`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  {/* STEP NUMBER */}
                  <span className="text-5xl font-black text-white/5 transition-all duration-300 group-hover:text-white/10 select-none">
                    {step.number}
                  </span>
                </div>

                {/* TAG PILL */}
                <div className="mb-4">
                  <span
                    className={`inline-block rounded-full bg-gradient-to-r ${step.accent} px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white opacity-80`}
                  >
                    {step.tag}
                  </span>
                </div>

                {/* TEXT */}
                <h3 className="mb-3 text-lg font-black text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/40 transition-colors duration-300 group-hover:text-white/60">
                  {step.description}
                </p>

                {/* BOTTOM ARROW — shows on hover */}
                <div
                  className={`mt-6 flex items-center gap-2 text-xs font-bold transition-all duration-300 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                    } bg-gradient-to-r ${step.accent} bg-clip-text text-transparent`}
                >
                  Learn more
                  <ArrowRight className={`h-3.5 w-3.5 bg-gradient-to-r ${step.accent} stroke-current`} />
                </div>

                {/* CONNECTOR DOT */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-2.5 top-10 z-10 hidden h-5 w-5 items-center justify-center lg:flex">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA STRIP */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/5 bg-white/[0.02] px-8 py-6 sm:flex-row">
          <div>
            <p className="text-base font-black text-white">Ready to find your car?</p>
            <p className="mt-1 text-sm text-white/40">Browse 200+ verified listings right now.</p>
          </div>
          <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-8 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition hover:opacity-90 whitespace-nowrap">
            Get Started
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
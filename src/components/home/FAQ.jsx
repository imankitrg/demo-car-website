"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What documents do you provide?",
    answer: "We provide a complete set of documents: title/registration, sales agreement, diagnostic report, and warranty certificate.",
  },
  {
    question: "Can I arrange financing or leasing?",
    answer: "Yes, we collaborate with leading banks and leasing firms to provide competitive financial options for our clients.",
  },
  {
    question: "How is the vehicle inspection conducted?",
    answer: "Every car undergoe a comprehensive 150+ point diagnostic check, covering the body, engine, and legal history.",
  },
  {
    question: "How long does custom vehicle sourcing take?",
    answer: "On average, sourcing and delivering a vehicle from Europe or the UAE takes between 2 to 4 weeks.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#0b0d1a] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              Support
            </p>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              Frequently Asked <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-white/40">
              Everything you need to know about our premium car buying and selling process.
            </p>
          </div>

          {/* RIGHT CONTENT - FAQ LIST */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`rounded-[32px] border transition-all duration-300 ${
                  openIndex === index ? "border-indigo-500/30 bg-indigo-500/5" : "border-white/5 bg-white/[0.02]"
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="flex w-full items-center justify-between p-8 text-left"
                >
                  <span className={`text-lg font-bold transition ${openIndex === index ? "text-white" : "text-white/60"}`}>
                    {faq.question}
                  </span>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full transition ${openIndex === index ? "bg-indigo-500 text-white" : "bg-white/5 text-white/40"}`}>
                    {openIndex === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-8 text-base leading-relaxed text-white/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
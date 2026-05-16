"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-[#0b0d1a] py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-indigo-400">
            Get in Touch
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Let’s Find Your <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Perfect Car</span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-white/40">
            Have questions about buying, selling, or financing? Our premium support team is ready to assist you 24/7.
          </p>

          {/* CONTACT DETAILS */}
          <div className="mt-12 space-y-6">
            {[
              { icon: <Phone className="h-5 w-5 text-indigo-400" />, label: "Phone", value: "+7 (495) 123-45-67" },
              { icon: <Mail className="h-5 w-5 text-blue-400" />, label: "Email", value: "concierge@luxeon-auto.ru" },
              { icon: <MapPin className="h-5 w-5 text-cyan-400" />, label: "Address", value: "64 Rublevskoye Highway, Moscow" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/20">{item.label}</p>
                  <p className="mt-1 font-bold text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FORM */}
        <div className="rounded-[40px] border border-white/5 bg-white/[0.03] p-8 backdrop-blur-xl md:p-12">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/40">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/40">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/40">Inquiry Type</label>
              <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/60 outline-none transition focus:border-indigo-500">
                <option>Buying a Car</option>
                <option>Selling a Car</option>
                <option>Financing Options</option>
                <option>Test Drive</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/40">Message</label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition focus:border-indigo-500"
              />
            </div>

            <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 py-5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:opacity-90">
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
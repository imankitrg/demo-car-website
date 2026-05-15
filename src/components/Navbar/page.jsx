// app/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#060816]/90 backdrop-blur-xl">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-lg font-black text-white shadow-lg shadow-blue-500/20">
            C
          </div>

          <span className="text-2xl font-black tracking-tight text-white">
            Car
          </span>
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="hidden lg:flex items-center gap-2">
          
          <Link
            href="/car"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Cars
          </Link>

          <Link
            href="/about"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Contact
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          
          {/* SEARCH BAR */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              showSearch
                ? "w-[250px] opacity-100"
                : "w-0 opacity-0"
            }`}
          >
            <div className="flex h-12 items-center rounded-full border border-white/10 bg-white/10 px-4 backdrop-blur-xl">
              
              <Search className="h-4 w-4 text-white/60" />

              <input
                type="text"
                placeholder="Search cars..."
                className="ml-3 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/50"
              />

              <button onClick={() => setShowSearch(false)}>
                <X className="h-4 w-4 text-white/60 hover:text-white" />
              </button>
            </div>
          </div>

          {/* SEARCH BUTTON */}
          {!showSearch && (
            <button
              onClick={() => setShowSearch(true)}
              className="hidden lg:flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
            >
              <Search className="h-5 w-5" />
            </button>
          )}

          {/* CONTACT DEALERS */}
          <button className="hidden sm:block rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20">
            Contact Dealers
          </button>

          {/* VIEW CARS */}
          <button className="rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-90">
            sell car
          </button>
          <button className="rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-90">
            sgin in
          </button>

          {/* MOBILE MENU */}
          <button className="flex lg:hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 transition hover:bg-white/20">
            <Menu className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
}
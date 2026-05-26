// app/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMobileMenu]);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#060816]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-base sm:text-lg font-black text-white shadow-lg shadow-blue-500/20">
              D
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Demo<span className="text-blue-400">Car</span>
            </span>
          </Link>

          {/* NAVIGATION LINKS - DESKTOP */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/car"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Used Cars
            </Link>
            <Link
              href="/about"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              New Cars
            </Link>
            <Link
              href="/dealers"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Dealerships
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* SEARCH BAR */}
            <div
              className={`overflow-hidden transition-all duration-300 ${showSearch
                ? "w-[160px] sm:w-[250px] opacity-100"
                : "w-0 opacity-0"
                }`}
            >
              <div className="flex h-9 sm:h-12 items-center rounded-full border border-white/10 bg-white/10 px-3 sm:px-4 backdrop-blur-xl">
                <Search className="h-4 w-4 text-white/60" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 sm:ml-3 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/50"
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
                className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
              >
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            )}

            {/* CONTACT DEALERS (Tablet/Desktop) */}
            <button className="hidden md:block rounded-full border border-white/10 bg-white/10 px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold text-white transition hover:bg-white/20">
              Contact Dealers
            </button>

            {/* VIEW CARS (Desktop only) */}
            <div className="hidden lg:flex items-center gap-2">
              <button className="rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-90">
                Sell Car
              </button>
              <button className="rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-90">
                Sign In
              </button>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button 
              onClick={() => setShowMobileMenu(true)}
              className="flex lg:hidden h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 transition hover:bg-white/20"
            >
              <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU DRAWER */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setShowMobileMenu(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-64 sm:w-80 bg-[#060816] border-l border-white/10 p-6 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-black tracking-tight text-white">
                Menu
              </span>
              <button 
                onClick={() => setShowMobileMenu(false)}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>
            
            <div className="flex flex-col gap-4 overflow-y-auto">
              <Link
                href="/car"
                onClick={() => setShowMobileMenu(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-white/80 bg-white/5 border border-white/5 hover:bg-white/10 hover:text-white transition"
              >
                Used Cars
              </Link>
              <Link
                href="/about"
                onClick={() => setShowMobileMenu(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-white/80 bg-white/5 border border-white/5 hover:bg-white/10 hover:text-white transition"
              >
                New Cars
              </Link>
              <Link
                href="/dealers"
                onClick={() => setShowMobileMenu(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-white/80 bg-white/5 border border-white/5 hover:bg-white/10 hover:text-white transition"
              >
                Dealerships
              </Link>
              
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                <button className="md:hidden w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Contact Dealers
                </button>
                <button className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-90">
                  Sell Car
                </button>
                <button className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-90">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
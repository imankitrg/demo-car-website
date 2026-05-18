"use client";

import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function DealerActions({ phone, whatsapp, name }) {
  const cleanPhone = phone?.replace(/\s+/g, "");
  const cleanWhatsapp = whatsapp?.replace(/\s+/g, "").replace("+", "");

  return (
    <div className="flex items-center gap-2 mt-4">
      {/* PHONE CALL */}
      <a
        href={`tel:${cleanPhone}`}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-white/75 hover:bg-indigo-500/10 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-300 active:scale-95"
        title="Call Dealer"
      >
        <Phone className="h-4 w-4" />
      </a>

      {/* WHATSAPP */}
      <a
        href={`https://wa.me/${cleanWhatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-white/75 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300 active:scale-95"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-4.5 w-4.5 fill-emerald-500/0 hover:fill-emerald-500/10" />
      </a>

      {/* VIEW INVENTORY BUTTON */}
      <Link
        href={`/car?search=${encodeURIComponent(name)}`}
        className="flex-1 flex h-11 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 text-xs font-black text-white hover:opacity-90 shadow-lg shadow-indigo-550/10 transition-all duration-300 active:scale-95"
      >
        <span>View Stock</span>
        <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

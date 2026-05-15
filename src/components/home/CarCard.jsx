"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function CarCard({ car }) {
  return (
    <div className="group overflow-hidden rounded-[28px] border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-2xl">
      
      {/* IMAGE */}
      <div className="relative overflow-hidden bg-gray-100">
        
        <Image
          src={car.image}
          alt={car.name}
          width={700}
          height={500}
          className="h-[200px] w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* BADGE */}
        <div className="absolute left-4 top-4 rounded-full bg-black px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white">
          Featured
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        
        {/* TITLE + PRICE */}
        <div className="flex items-start justify-between gap-4">
          
          <div>
            <h3 className="text-xl font-black tracking-tight text-gray-900">
              {car.name}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {car.year} • {car.fuel}
            </p>
          </div>

          <h4 className="text-base font-black text-black">
            {car.price}
          </h4>
        </div>

        {/* SPECS */}
        <div className="mt-5 flex flex-wrap gap-2">
          
          <div className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700">
            {car.transmission}
          </div>

          <div className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700">
            Premium
          </div>

          <div className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700">
            Top Rated
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-6 flex items-center gap-3">
          
          {/* DETAILS */}
          <button className="flex-1 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
            View Details
          </button>

          {/* WHATSAPP */}
          <button className="flex items-center justify-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-3 text-sm font-semibold text-green-700 transition hover:border-green-500 hover:bg-green-100">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
"use client";

import Image from "next/image";

export default function CarGallery({ car }) {
  return (
    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">

      <Image
        src={car.thumbnail}
        alt={car.title}
        fill
        className="object-cover"
      />
    </div>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";

export default function CarCard({ car }) {
  return (
    <Link href={`/car/${car.slug}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer">

        <div className="relative w-full h-56">
          <Image
            src={car.thumbnail}
            alt={car.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4">

          <h2 className="text-xl font-semibold line-clamp-1">
            {car.title}
          </h2>

          <p className="text-2xl font-bold mt-2">
            ₹ {car.price.toLocaleString()}
          </p>

          <div className="flex items-center gap-3 text-sm text-gray-600 mt-3 flex-wrap">

            <span>{car.year}</span>

            <span>•</span>

            <span>{car.kmDriven} km</span>

            <span>•</span>

            <span>{car.fuelType}</span>

            <span>•</span>

            <span>{car.transmission}</span>
          </div>

          <p className="text-sm text-gray-500 mt-3">
            📍 {car.location}
          </p>
        </div>
      </div>
    </Link>
  );
}
"use client";

import useCars from "@/hooks/useCars";
import CarGrid from "@/components/cars/CarGrid";

export default function CarsPage() {
  const { cars, loading } = useCars();

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        Loading...
      </div>
    );
  }

  return (
   <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {cars.map((car) => (
    <div
      key={car._id}
      className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white"
    >
      <img
        src={car.thumbnail || car.image}
        alt={car.title || car.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold">
          {car.title || car.name}
        </h2>

        <p className="text-gray-600">
          Brand: {car.brand || "N/A"}
        </p>

        <p className="text-gray-600">
          Model: {car.model}
        </p>

        <p className="text-lg font-semibold text-blue-600">
          ₹ {car.price?.toLocaleString()}
        </p>
      </div>
    </div>
  ))}
  
</div>
  );
}
"use client";

import { useEffect, useState } from "react";
import useCars from "@/hooks/useCars";
import { useRouter } from "next/navigation";

export default function CarsPage() {
  const { cars, loading } = useCars();
  const router = useRouter();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setSearch(params.get("search")?.toLowerCase() || "");
    }
  }, []);

  if (loading) {
    return <div className="max-w-7xl mx-auto px-4 py-10">Loading...</div>;
  }

  // Filter cars based on search keyword
  const filteredCars = (cars || []).filter((car) => {
    if (!search) return true;
    const title = (car.title || car.name || "").toLowerCase();
    const brand = (car.brand || "").toLowerCase();
    const model = (car.model || "").toLowerCase();
    return title.includes(search) || brand.includes(search) || model.includes(search);
  });

  if (filteredCars.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">No cars found matching &quot;{search}&quot;.</h2>
        <p className="text-gray-500">Try searching for a different brand, model, or keyword.</p>
        <button
          onClick={() => {
            setSearch("");
            router.push("/car");
          }}
          className="mt-4 px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
        >
          View All Cars
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCars.map((car) => {
        console.log(car);
        return (
          <div
            key={car._id}
            onClick={() => router.push(`/car/${car.slug}`)}
            className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white cursor-pointer"
          >
            <img
              src={car.thumbnail || car.image}
              alt={car.title || car.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-xl font-bold">{car.title || car.name}</h2>
              <p className="text-gray-600">Brand: {car.brand || "N/A"}</p>
              <p className="text-gray-600">Model: {car.model}</p>
              <p className="text-lg font-semibold text-blue-600">
                ₹ {car.price?.toLocaleString()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

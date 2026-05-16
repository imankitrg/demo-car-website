"use client"; // 👈 zaruri hai hooks ke liye

import { use } from "react";
import singleCar from "@/hooks/singleCar";

import CarGallery from "@/components/Cars/CarGallery";
import CarOverview from "@/components/Cars/CarOverview";
import CarFeatures from "@/components/Cars/CarFeatures";
import CarSpecs from "@/components/Cars/CarSpecs";
import SimilarCars from "@/components/Cars/SimilarCars";

export default function CarDetailsPage({ params }) {
  const { slug } = use(params); // Next.js 15 mein params unwrap karna padta hai
  const { car, loading, error } = singleCar(slug);

  if (loading) {
    return <div className="p-10 text-2xl font-bold">Loading...</div>;
  }

  if (error || !car) {
    return <div className="p-10 text-2xl font-bold">Car not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <CarGallery car={car} />
      <CarOverview car={car} />
      <CarFeatures car={car} />
      <CarSpecs car={car} />
      <SimilarCars />
    </div>
  );
}
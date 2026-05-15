// import { cars } from "@/data/cars";
// import axiosInstance from "@/lib/axios";
// import { getSingleCar } from "@/services/car.service";

import CarGallery from "@/components/Cars/CarGallery";
import CarOverview from "@/components/Cars/CarOverview";
import CarFeatures from "@/components/Cars/CarFeatures";
import CarSpecs from "@/components/Cars/CarSpecs";
import SimilarCars from "@/components/Cars/SimilarCars";

export default async function CarDetailsPage({ params }) {

  const { slug } = await params;

  const car = await  getCar(slug);

  if (!car) {
    return (
      <div className="p-10 text-2xl font-bold">
        Car not found
      </div>
    );
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

"use client";

import { useEffect, useState } from "react";
import { getSingleCar } from "@/services/car.service";

const singleCar = (slug) => {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    fetchCar();
  }, [slug]);

  const fetchCar = async () => {
    try {
      const data = await getSingleCar(slug);
      setCar(data.car); // backend se jo key aa rahi hai uspe depend karta hai
    } catch (err) {
      console.error(err);
      setError("Car not found");
    } finally {
      setLoading(false);
    }
  };

  return { car, loading, error };
};

export default singleCar;
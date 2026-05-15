"use client";

import { useEffect, useState } from "react";

import { getCars } from "@/services/car.service";

const useCars = () => {

  const [cars, setCars] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {

    try {

      const data = await getCars();

      setCars(data.car);
      console.log(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  return {
    cars,
    loading,
  };
};

export default useCars;
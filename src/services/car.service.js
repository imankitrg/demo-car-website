import axiosInstance from "@/lib/axios";

export const getCars = async () => {
  const res = await axiosInstance.get("/car/get");
  return res.data;
};

export const getSingleCar = async (slug) => {
  const res = await axiosInstance.get(`/car/get/${slug}`);
  return res.data;
};
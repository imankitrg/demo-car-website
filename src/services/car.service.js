import axiosInstance from "@/lib/axios";

export const getCars = async () => {
  const res = await axiosInstance.get("/api/get");
  return res.data;
};

export const getSingleCar = async (id) => {
  console.log("Fetching car with ID:", id); // Debugging log
  const res = await axiosInstance.get(`/api/car/${id}`); // ID wali API jo pehle kaam kar rahi thi
  // const res = await axiosInstance.get(`/car/get/${id}`); // ID wali API jo pehle kaam kar rahi thi
  return res.data;
};

// export const getSingleCar = async (slug) => {
//   const res = await axiosInstance.get(`/car/${slug}`); // ID wali API jo pehle kaam kar rahi thi
//   return res.data;
// };

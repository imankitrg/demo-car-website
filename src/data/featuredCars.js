const featuredCars = {
  trending: [
    {
      id: 1,
      name: "Toyota Fortuner",
      price: "₹ 42 Lakh",
      year: 2024,
      fuel: "Diesel",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1719907382318-76835ab66f8d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: 2,
      name: "Hyundai Tucson",
      price: "₹ 36 Lakh",
      year: 2024,
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1705624843697-4461f9dce482?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: 3,
      name: "Jeep Mahindra",
      price: "₹ 38 Lakh",
      year: 2023,
      fuel: "Diesel",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1695392174709-722e63bf3fc1?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: 4,
      name: "MG Hector",
      price: "₹ 41 Lakh",
      year: 2024,
      fuel: "Diesel",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1650718557337-efa1cedaf0c4?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],

  popular: [
    {
      id: 5,
      name: "Mahindra XUV700",
      price: "₹ 28 Lakh",
      year: 2024,
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1710225358761-4f5891df657d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: 6,
      name: "Tata Safari",
      price: "₹ 31 Lakh",
      year: 2024,
      fuel: "Diesel",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1627127119261-776559b88dd1?q=80&w=1085&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: 7,
      name: "Kia Seltos",
      price: "₹ 22 Lakh",
      year: 2023,
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1653022779664-3a9d0616548c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: 8,
      name: "Hyundai Creta",
      price: "₹ 20 Lakh",
      year: 2024,
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1696539678575-a7297440b89a?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],

  newCars: [
    {
      id: 9,
      name: "Honda City Hybrid",
      price: "₹ 24 Lakh",
      year: 2025,
      fuel: "Hybrid",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1657459562745-77cc871421cf?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: 10,
      name: "Toyota Hyryder",
      price: "₹ 21 Lakh",
      year: 2025,
      fuel: "Hybrid",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=1231&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: 11,
      name: "Maruti Grand Vitara",
      price: "₹ 19 Lakh",
      year: 2025,
      fuel: "Hybrid",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1632414187391-7e4097f0de6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: 12,
      name: "Kia Carens",
      price: "₹ 18 Lakh",
      year: 2025,
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1710594022719-a37944dc12ae?q=80&w=729&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],

  usedCars: [
    {
      id: 13,
      name: "Honda Civic",
      price: "₹ 14 Lakh",
      year: 2020,
      fuel: "Petrol",
      transmission: "Manual",
      image: "https://images.unsplash.com/photo-1605816988069-b11383b50717?q=80&w=1188&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: 14,
      name: "Toyota Fortuner",
      price: "₹ 32 Lakh",
      year: 2021,
      fuel: "Diesel",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1688787771221-737f0ad282dc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: 15,
      name: "Hyundai Verna",
      price: "₹ 11 Lakh",
      year: 2019,
      fuel: "Petrol",
      transmission: "Manual",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: 16,
      name: "Skoda Superb",
      price: "₹ 18 Lakh",
      year: 2020,
      fuel: "Diesel",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1693420667824-c98858e87392?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

export default featuredCars;
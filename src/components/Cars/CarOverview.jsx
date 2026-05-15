export default function CarOverview({ car }) {
  return (
    <div className="mt-10">

      <h1 className="text-4xl font-bold">
        {car.title}
      </h1>

      <p className="text-3xl font-bold mt-4">
        ₹ {car.price.toLocaleString()}
      </p>

      <div className="flex gap-4 flex-wrap mt-6 text-gray-600">

        <span>{car.year}</span>

        <span>{car.kmDriven} km</span>

        <span>{car.fuelType}</span>

        <span>{car.transmission}</span>
      </div>

      <p className="mt-6 text-gray-700 leading-8">
        {car.description}
      </p>
    </div>
  );
}
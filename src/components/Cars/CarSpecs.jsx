export default function CarSpecs({ car }) {

  const specs = car.specifications;

  return (
    <div className="mt-14">

      <h2 className="text-3xl font-bold mb-6">
        Specifications
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

        <div className="border p-5 rounded-2xl">
          <p className="text-gray-500">Engine</p>
          <h3 className="font-semibold mt-2">
            {specs.engine}
          </h3>
        </div>

        <div className="border p-5 rounded-2xl">
          <p className="text-gray-500">Mileage</p>
          <h3 className="font-semibold mt-2">
            {specs.mileage}
          </h3>
        </div>

        <div className="border p-5 rounded-2xl">
          <p className="text-gray-500">Power</p>
          <h3 className="font-semibold mt-2">
            {specs.maxPower}
          </h3>
        </div>

        <div className="border p-5 rounded-2xl">
          <p className="text-gray-500">Seats</p>
          <h3 className="font-semibold mt-2">
            {specs.seatingCapacity}
          </h3>
        </div>

      </div>
    </div>
  );
}
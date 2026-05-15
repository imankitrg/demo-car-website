export default function CarFeatures({ car }) {
  return (
    <div className="mt-14">

      <h2 className="text-3xl font-bold mb-6">
        Features
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {car.features.map((feature, index) => (
          <div
            key={index}
            className="border rounded-2xl p-4 text-center bg-gray-50"
          >
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}
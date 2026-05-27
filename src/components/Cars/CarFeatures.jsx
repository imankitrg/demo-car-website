import { Sparkles, Check } from "lucide-react";

export default function CarFeatures({ car }) {
  if (!car?.features || car.features.length === 0) return null;

  return (
    <div className="mt-12 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center gap-3">
        <Sparkles className="text-yellow-500" size={32} /> Premium Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {car.features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-md hover:border-blue-100 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Check size={20} className="text-blue-600" strokeWidth={3} />
            </div>
            <span className="font-bold text-gray-800 text-lg">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
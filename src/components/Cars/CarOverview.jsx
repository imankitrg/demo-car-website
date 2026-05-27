import { MapPin, Calendar, Gauge, Fuel, Settings, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function CarOverview({ car }) {
  if (!car) return null;

  return (
    <div className="mt-8 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-bold rounded-full tracking-wide uppercase shadow-sm">
              {car.brand}
            </span>
            {car.isFeatured && (
              <span className="px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-bold rounded-full flex items-center gap-1.5 shadow-sm">
                ⭐ Featured
              </span>
            )}
            {car.ownership && (
              <span className="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm font-bold rounded-full shadow-sm">
                {car.ownership}
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            {car.title}
          </h1>
          
          {car.location && (
            <div className="flex items-center gap-2 mt-4 text-gray-500 font-semibold text-lg">
              <MapPin size={20} className="text-red-500" />
              {car.location.city}, {car.location.state}
            </div>
          )}
        </div>

        <div className="md:text-right bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-inner w-full md:w-auto">
          <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">Asking Price</p>
          <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
            ₹{car.price?.toLocaleString('en-IN') || 'N/A'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {[
          { icon: Calendar, label: "Registration Year", value: car.year, color: "text-purple-600", bg: "bg-purple-100" },
          { icon: Gauge, label: "Kilometers Driven", value: car.kmDriven ? `${car.kmDriven.toLocaleString('en-IN')} km` : 'N/A', color: "text-blue-600", bg: "bg-blue-100" },
          { icon: Fuel, label: "Fuel Type", value: car.fuelType, color: "text-emerald-600", bg: "bg-emerald-100" },
          { icon: Settings, label: "Transmission", value: car.transmission, color: "text-orange-600", bg: "bg-orange-100" }
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className={`p-3.5 rounded-xl ${item.bg} ${item.color}`}>
              <item.icon size={26} strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-lg font-extrabold text-gray-900">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {car.description && (
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Vehicle Description</h3>
          <p className="text-gray-600 leading-relaxed text-lg font-medium">
            {car.description}
          </p>
        </div>
      )}

      {car.highlights && car.highlights.length > 0 && (
        <div className="mt-10 bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
          <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            <ShieldCheck className="text-emerald-600" size={28} /> Key Highlights
          </h3>
          <div className="flex flex-wrap gap-3">
            {car.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2.5 bg-white text-emerald-800 rounded-full font-bold border border-emerald-200 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle2 size={18} className="text-emerald-500" />
                {highlight}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
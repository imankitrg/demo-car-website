import { Wrench, Zap, Droplets, Users, Briefcase, Ruler } from "lucide-react";

export default function CarSpecs({ car }) {
  const specs = car?.specifications;
  if (!specs) return null;

  const specItems = [
    { label: "Engine Capacity", value: specs.engine, icon: Wrench },
    { label: "Maximum Power", value: specs.maxPower, icon: Zap },
    { label: "ARAI Mileage", value: specs.mileage, icon: Droplets },
    { label: "Seating Capacity", value: specs.seatingCapacity ? `${specs.seatingCapacity} Persons` : null, icon: Users },
    { label: "Boot Space", value: specs.bootSpace, icon: Briefcase },
  ].filter(item => item.value);

  if (specItems.length === 0) return null;

  return (
    <div className="mt-8 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center gap-3">
        <Ruler className="text-indigo-600" size={32} /> Technical Specifications
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {specItems.map((spec, idx) => {
          return (
            <div key={idx} className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-indigo-50 hover:border-indigo-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3 text-gray-500 group-hover:text-indigo-600 transition-colors">
                <spec.icon size={22} strokeWidth={2.5} />
                <p className="font-bold uppercase tracking-wider text-xs">{spec.label}</p>
              </div>
              <h3 className="text-2xl font-black text-gray-900">
                {spec.value}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
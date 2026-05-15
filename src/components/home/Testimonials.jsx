"use client";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "BMW Owner",
    review:
      "The experience was smooth from start to finish. I found my dream car within days.",
  },

  {
    id: 2,
    name: "Aman Verma",
    role: "Mercedes Buyer",
    review:
      "Professional platform with verified listings and amazing customer support.",
  },

  {
    id: 3,
    name: "Priya Mehta",
    role: "Audi Owner",
    review:
      "Loved the premium interface and seamless buying process. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24">
      
      <div className="mx-auto max-w-7xl px-6">
        
        {/* TOP */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
            Testimonials
          </p>

          <h2 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-500">
            Trusted by thousands of buyers looking for premium cars with a modern experience.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-[32px] border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              
              {/* STARS */}
              <div className="mb-5 flex items-center gap-1 text-yellow-500">
                ⭐ ⭐ ⭐ ⭐ ⭐
              </div>

              {/* REVIEW */}
              <p className="text-lg leading-relaxed text-gray-600">
                “{item.review}”
              </p>

              {/* USER */}
              <div className="mt-8 border-t border-gray-100 pt-5">
                
                <h3 className="text-lg font-black text-gray-900">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
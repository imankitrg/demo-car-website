"use client";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Buy New Cars",
      description:
        "Explore the latest cars from trusted brands with smart filters, easy comparison, financing options, and test drive support.",
    },

    {
      title: "Buy Used Cars",
      description:
        "Find verified used cars with transparent pricing, inspection reports, ownership details, and trusted sellers.",
    },

    {
      title: "Sell Your Car",
      description:
        "List your car in minutes, connect with genuine buyers, increase visibility, and sell faster with a smooth experience.",
    },
  ];

  return (
    <section className="bg-white py-24">
      
      <div className="mx-auto max-w-7xl px-6">
        
        {/* TOP */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
            Everything You Need In One Car Platform
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-500">
            Whether you want to buy a new car, purchase a verified used car, or sell your current vehicle — we make the process simple and modern.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-[32px] border border-gray-200 bg-gray-50 p-8 transition hover:-translate-y-1 hover:border-black hover:bg-white hover:shadow-xl"
            >
              
              {/* NUMBER */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-xl font-black text-white">
                0{features.indexOf(item) + 1}
              </div>

              {/* TITLE */}
              <h3 className="mt-8 text-3xl font-black tracking-tight text-gray-900">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                {item.description}
              </p>

              {/* BUTTON */}
              <button className="mt-8 rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-black hover:text-black">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
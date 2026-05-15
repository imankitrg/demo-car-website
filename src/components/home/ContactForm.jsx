"use client";

export default function ContactForm() {
  return (
    <section className="bg-gray-50 py-24">
      
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div>
          
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
            Contact Us
          </p>

          <h2 className="max-w-xl text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
            Let’s Help You Find Your Perfect Car
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-500">
            Have questions about buying, selling, financing, or scheduling a test drive? Our team is ready to help.
          </p>

          {/* INFO CARDS */}
          <div className="mt-10 space-y-4">
            
            <div className="rounded-[24px] border border-gray-200 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                Phone
              </p>

              <h3 className="mt-2 text-xl font-black text-gray-900">
                +91 98765 43210
              </h3>
            </div>

            <div className="rounded-[24px] border border-gray-200 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                Email
              </p>

              <h3 className="mt-2 text-xl font-black text-gray-900">
                support@car.com
              </h3>
            </div>

            <div className="rounded-[24px] border border-gray-200 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                Location
              </p>

              <h3 className="mt-2 text-xl font-black text-gray-900">
                Mumbai, India
              </h3>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="rounded-[36px] border border-gray-200 bg-white p-8 shadow-xl md:p-10">
          
          <form className="space-y-6">
            
            {/* NAME */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-gray-900 outline-none transition focus:border-black"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-gray-900 outline-none transition focus:border-black"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-gray-900 outline-none transition focus:border-black"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Tell us what you're looking for..."
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-gray-900 outline-none transition focus:border-black"
              />
            </div>

            {/* BUTTON */}
            <button className="w-full rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-gray-800">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
"use client";

const faqs = [
  {
    question: "Are all cars verified?",
    answer:
      "Yes, every listed car goes through a verification process to ensure authenticity and quality.",
  },

  {
    question: "Can I finance my car purchase?",
    answer:
      "Absolutely. We provide financing options through trusted banking and lending partners.",
  },

  {
    question: "Do you offer used cars?",
    answer:
      "Yes, we offer both premium used cars and brand-new vehicles across multiple brands.",
  },

  {
    question: "Can I schedule a test drive?",
    answer:
      "Yes, you can easily schedule a test drive directly from the car details page.",
  },

  {
    question: "How do I sell my car?",
    answer:
      "Simply create a listing, upload your car details, and connect with verified buyers.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-24">
      
      <div className="mx-auto max-w-5xl px-6">
        
        {/* TOP */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
            FAQ
          </p>

          <h2 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-500">
            Everything you need to know about buying, selling, and financing cars.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-5">
          
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-gray-200 bg-gray-50 p-7 transition hover:border-black hover:bg-white"
            >
              
              <h3 className="text-xl font-black tracking-tight text-gray-900">
                {faq.question}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
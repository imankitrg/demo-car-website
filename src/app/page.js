import Hero from "@/components/home/Hero";
import Brands from "@/components/home/Brands";
import FeaturedCars from "@/components/home/FeaturedCar";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import HowWeWork from "@/components/home/HowWeWork";
import ContactForm from "@/components/home/ContactForm";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <FeaturedCars />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <HowWeWork />
      <ContactForm />
      <FAQ />
    </>
  );
}

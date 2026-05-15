import Hero from "@/components/home/Hero";
import FeaturedCar from "@/components/home/FeaturedCar";
import Brands from "@/components/home/Brands";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTA from "@/components/home/CTA";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import ContactForm from "@/components/home/ContactForm";


export default function Home() {
  return (
    <>
      <Hero />
       <FeaturedCar />
       <Brands />
       <WhyChooseUs />
       <Testimonials/>
       <CTA/>
       <ContactForm/>
       <FAQ/>
    </>
  );
}

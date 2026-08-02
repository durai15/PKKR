import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import WhyUs from "@/components/sections/WhyUs";
import Gallery from "@/components/sections/Gallery";
import VideoGallery from "@/components/sections/VideoGallery";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Gallery />
      <VideoGallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}

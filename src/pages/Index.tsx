import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedPets from "@/components/FeaturedPets";
import GallerySection from "@/components/GallerySection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCallBar from "@/components/MobileCallBar";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <FeaturedPets />
        <GallerySection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCallBar />
    </>
  );
};

export default Index;

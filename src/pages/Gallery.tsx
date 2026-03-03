import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCallBar from "@/components/MobileCallBar";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 bg-teal-light">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
              Pet <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium">
              A glimpse of our beautiful pets, happy customers, and vibrant shop life.
            </p>
          </div>
        </section>
        <GallerySection />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCallBar />
    </>
  );
};

export default Gallery;

import Navbar from "@/components/Navbar";
import FeaturedPets from "@/components/FeaturedPets";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCallBar from "@/components/MobileCallBar";

const Pets = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 bg-teal-light">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
              Our <span className="text-primary">Pets</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium">
              Explore our wide collection of exotic birds, pedigree dogs, and unique pets — all healthy, vaccinated, and ready for their forever home.
            </p>
          </div>
        </section>
        <FeaturedPets />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCallBar />
    </>
  );
};

export default Pets;

import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCallBar from "@/components/MobileCallBar";

const Reviews = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 bg-teal-light">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
              Customer <span className="text-primary">Reviews</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium">
              Don't just take our word for it — hear what our happy pet parents have to say!
            </p>
          </div>
        </section>
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCallBar />
    </>
  );
};

export default Reviews;

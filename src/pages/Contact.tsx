import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCallBar from "@/components/MobileCallBar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 bg-teal-light">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium">
              Visit our shop or reach out — we'd love to help you find your perfect pet!
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCallBar />
    </>
  );
};

export default Contact;

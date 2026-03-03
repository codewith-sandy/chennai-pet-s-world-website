import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCallBar from "@/components/MobileCallBar";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 bg-teal-light">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
              About <span className="text-primary">Chennai Pet's World</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Chennai's most trusted exotic pet shop, proudly serving pet lovers since our inception. Located in the heart of Villivakkam, we bring you the finest exotic birds, dogs, and pet accessories — all under one roof.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">Our Story</h2>
                <p className="text-muted-foreground font-medium leading-relaxed mb-4">
                  What started as a passion for exotic birds has grown into Chennai's most loved pet destination. We believe every pet deserves a loving home, and every pet parent deserves expert guidance.
                </p>
                <p className="text-muted-foreground font-medium leading-relaxed mb-4">
                  Our team of dedicated animal lovers hand-picks every pet, ensuring they are healthy, well-socialized, and ready to become part of your family. We also stock a premium range of pet food, accessories, and cages from trusted brands.
                </p>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  With a 4.8-star rating and 36+ happy customers, we take pride in building lasting relationships with our pet families across Royapettah and nearby areas.
                </p>
              </div>
              <div className="bg-primary/10 rounded-2xl p-10 text-center">
                <div className="text-6xl mb-4">🐦</div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground font-medium">
                  To be Chennai's most trusted and compassionate exotic pet destination, connecting healthy, happy pets with loving families.
                </p>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCallBar />
    </>
  );
};

export default About;

import heroBird from "@/assets/hero-bird.jpg";
import { Phone, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBird}
          alt="Exotic macaw parrot at Chennai Pet's World"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-xl">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4 animate-fade-up">
            ⭐ 4.8 Rated · 36+ Happy Customers
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-black text-primary-foreground leading-tight mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Chennai's Trusted{" "}
            <span className="text-secondary">Exotic Pet</span>{" "}
            Destination
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 font-semibold animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Exotic Birds, Dogs, Pet Accessories, Cages & Premium Pet Food — all under one roof in Villivakkam, Chennai.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="tel:09941950925"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl text-base font-bold hover:opacity-90 transition-opacity shadow-elevated"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/919941950925?text=Hi%2C%20I'm%20interested%20in%20your%20pets!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[hsl(142,70%,45%)] text-primary-foreground px-6 py-3.5 rounded-xl text-base font-bold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

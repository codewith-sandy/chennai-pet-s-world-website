import { Link } from "react-router-dom";
import { MapPin, Phone, Instagram } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Our Pets", to: "/pets" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-3">Chennai Pet's World</h3>
            <p className="text-primary-foreground/70 text-sm font-medium leading-relaxed">
              Chennai's trusted destination for exotic birds, dogs, pet accessories, and premium pet food.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3">Contact Info</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>19, S Mada St, Villivakkam, Kolathur, Chennai 600099</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:09941950925" className="hover:text-secondary transition-colors">099419 50925</a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 shrink-0" />
                <a href="#" className="hover:text-secondary transition-colors">Follow us on Instagram</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Chennai Pet's World – Exotics Pet Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

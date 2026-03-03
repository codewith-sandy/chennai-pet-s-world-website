import { useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", interest: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = formData.name.trim().slice(0, 100);
    const phone = formData.phone.trim().slice(0, 15);
    const interest = formData.interest.trim().slice(0, 200);

    if (!name || !phone) return;

    const message = encodeURIComponent(
      `Hi, I'm ${name}. My phone: ${phone}. I'm interested in: ${interest || "General inquiry"}`
    );
    window.open(`https://wa.me/919941950925?text=${message}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", phone: "", interest: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Visit Us Today
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Inquiry Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-xl font-display font-bold text-foreground mb-6">Send an Inquiry</h3>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-3">🎉</div>
                <p className="font-bold text-primary">Thank you! We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring font-medium"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    required
                    maxLength={15}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring font-medium"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Pet Interest</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring font-medium"
                  >
                    <option value="">Select your interest</option>
                    <option value="Exotic Birds">Exotic Birds</option>
                    <option value="Dogs & Puppies">Dogs & Puppies</option>
                    <option value="Pet Accessories">Pet Accessories</option>
                    <option value="Pet Food">Pet Food</option>
                    <option value="Cages">Cages</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl text-base font-bold hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </button>
              </form>
            )}
          </div>

          {/* Info + Map */}
          <div className="space-y-6">
            <div className="bg-teal-light rounded-2xl p-6 space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-foreground">Address</p>
                  <p className="text-muted-foreground text-sm">19, S Mada St, Villivakkam, Kolathur, Chennai, Tamil Nadu 600099</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-foreground">Phone</p>
                  <a href="tel:09941950925" className="text-primary font-semibold text-sm">099419 50925</a>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-foreground">Hours</p>
                  <p className="text-muted-foreground text-sm">Mon - Sun: 9:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-card h-64 md:h-auto md:flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d80.2121!3d13.1067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzI0LjEiTiA4MMKwMTInNDMuNiJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "250px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chennai Pet's World location on Google Maps"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

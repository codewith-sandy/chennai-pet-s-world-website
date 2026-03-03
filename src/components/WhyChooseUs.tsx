import { Heart, ShieldCheck, IndianRupee } from "lucide-react";

const features = [
  {
    icon: IndianRupee,
    title: "Affordable Prices",
    description: "Quality exotic pets and accessories at the most competitive prices in Chennai.",
  },
  {
    icon: Heart,
    title: "Healthy & Happy Pets",
    description: "Every pet is well-cared for, vaccinated, and health-checked before finding their new home.",
  },
  {
    icon: ShieldCheck,
    title: "Passionate Service",
    description: "Our team of passionate animal lovers provides expert guidance and after-sale support.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-teal-light">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Chennai's Most Loved Pet Shop
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow duration-300 text-center animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground font-medium">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

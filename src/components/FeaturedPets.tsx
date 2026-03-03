import { Bird, Dog, Fish } from "lucide-react";

const pets = [
  {
    icon: Bird,
    name: "Exotic Birds",
    description: "Macaws, Cockatoos, African Greys, Budgies, Lovebirds and more.",
    color: "bg-secondary/20 text-secondary-foreground",
    iconColor: "text-accent",
  },
  {
    icon: Dog,
    name: "Dogs & Puppies",
    description: "Pedigree puppies including Golden Retrievers, Pugs, Shih Tzu, and more.",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Fish,
    name: "Exotic Pets",
    description: "Unique exotic animals, fish, reptiles and rare species for enthusiasts.",
    color: "bg-accent/10",
    iconColor: "text-accent",
  },
];

const FeaturedPets = () => {
  return (
    <section id="pets" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-accent uppercase tracking-wider">Our Collection</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Featured Pets
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Discover our wide selection of exotic birds, dogs, and unique pets.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pets.map((pet, i) => (
            <div
              key={pet.name}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${pet.color} flex items-center justify-center mb-5`}>
                <pet.icon className={`w-8 h-8 ${pet.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-2">{pet.name}</h3>
              <p className="text-muted-foreground font-medium mb-4">{pet.description}</p>
              <a
                href="https://wa.me/919941950925?text=Hi%2C%20I'm%20interested%20in%20your%20pets!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold text-sm hover:underline"
              >
                Enquire Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;

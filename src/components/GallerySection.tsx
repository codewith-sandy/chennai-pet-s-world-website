import { Camera } from "lucide-react";

const galleryItems = [
  { title: "Exotic Macaws", category: "Birds" },
  { title: "Golden Retriever Puppies", category: "Dogs" },
  { title: "Premium Bird Cages", category: "Accessories" },
  { title: "Colorful Lovebirds", category: "Birds" },
  { title: "Pet Food Collection", category: "Food" },
  { title: "Happy Customers", category: "Shop" },
];

const colors = [
  "from-primary/20 to-primary/5",
  "from-secondary/20 to-secondary/5",
  "from-accent/20 to-accent/5",
  "from-primary/15 to-accent/10",
  "from-secondary/15 to-primary/10",
  "from-accent/15 to-secondary/10",
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Our Pet Family
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={item.title}
              className={`aspect-square rounded-2xl bg-gradient-to-br ${colors[i]} flex flex-col items-center justify-center p-4 shadow-card hover:shadow-elevated hover:scale-[1.02] transition-all duration-300 animate-fade-up`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <Camera className="w-8 h-8 text-primary/50 mb-3" />
              <p className="font-bold text-foreground text-sm text-center">{item.title}</p>
              <span className="text-xs text-muted-foreground mt-1">{item.category}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-8 text-sm">
          Follow us on{" "}
          <a href="#" className="text-primary font-bold hover:underline">
            Instagram
          </a>{" "}
          for more photos and updates!
        </p>
      </div>
    </section>
  );
};

export default GallerySection;

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    text: "Amazing collection of exotic birds! The staff is very knowledgeable and helpful. My macaw is healthy and beautiful. Highly recommend!",
    rating: 5,
  },
  {
    name: "Priya Srinivasan",
    text: "Best pet shop in Chennai for exotic pets. The prices are very reasonable and the pets are well taken care of. Got my puppy from here!",
    rating: 5,
  },
  {
    name: "Mohammed Ali",
    text: "Great experience! They have a wonderful variety of birds and pet accessories. The owner is very passionate and provides excellent after-sale support.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 bg-warm-light">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-accent uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="bg-card rounded-2xl p-6 shadow-card animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground/80 font-medium mb-4 leading-relaxed">"{review.text}"</p>
              <p className="font-bold text-foreground">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

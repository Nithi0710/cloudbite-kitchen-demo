import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, Truck } from "lucide-react";
import FoodCard from "@/components/FoodCard";
import { foodItems, categories } from "@/data/foods";

const featuredDishes = foodItems.filter((f) => f.rating >= 4.6).slice(0, 4);

const testimonials = [
  { name: "Priya S.", text: "Best butter chicken I've ever had delivered! Always fresh and on time.", rating: 5 },
  { name: "Rahul M.", text: "The veg thali is a complete meal. Amazing flavors and great portions!", rating: 5 },
  { name: "Anita K.", text: "CloudBite is our family's go-to for weekend dinners. Love the combos!", rating: 4 },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Delicious Food,<br />Delivered Fresh
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 font-body">
              From our cloud kitchen to your doorstep. Enjoy restaurant-quality meals made with love and the freshest ingredients.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className="bg-card text-foreground font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2">
                Order Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/menu" className="border-2 border-primary-foreground/50 text-primary-foreground font-bold px-6 py-3 rounded-xl hover:bg-primary-foreground/10 transition-colors">
                View Menu
              </Link>
            </div>
            <div className="flex gap-8 mt-10 text-sm">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> 30 min delivery</div>
              <div className="flex items-center gap-2"><Truck className="h-4 w-4" /> Free above ₹299</div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4" /> 4.8★ rated</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-display text-3xl font-bold text-center mb-10">Popular Categories</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4">
          {categories.map((cat, i) => (
            <motion.div key={cat.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}>
              <Link to={cat.path} className="flex flex-col items-center gap-2 p-4 rounded-xl hover:shadow-card transition-shadow bg-card border border-border">
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-xs font-medium text-card-foreground">{cat.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="gradient-warm py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-10">Featured Dishes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((item, i) => (
              <FoodCard key={item.id} item={item} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
              View Full Menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-display text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-card p-6 rounded-xl shadow-card border border-border">
              <div className="flex gap-1 mb-3 text-secondary">
                {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-sm text-muted-foreground mb-4">"{t.text}"</p>
              <p className="font-display font-bold text-sm">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;

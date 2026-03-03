import { motion } from "framer-motion";
import { Heart, Award, ChefHat, Leaf } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-extrabold mb-4">
            Our Story
          </motion.h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">From a small kitchen to your favorite food destination — this is CloudBite.</p>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop" alt="Our kitchen" className="rounded-xl shadow-card w-full" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl font-bold mb-4">How It All Started</h2>
            <p className="text-muted-foreground mb-4">CloudBite Kitchen was born from a simple passion: making incredible food accessible to everyone. In 2022, Chef Arjun and his team launched a small cloud kitchen with just 5 dishes and a dream.</p>
            <p className="text-muted-foreground">Today, we serve thousands of happy customers daily, crafting each dish with the same love and care as day one. No dine-in, no frills — just pure, delicious food delivered to your door.</p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="gradient-warm py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Made with Love", desc: "Every dish is crafted with passion and care by our expert chefs." },
              { icon: Leaf, title: "Fresh Ingredients", desc: "We source the freshest ingredients daily from local markets." },
              { icon: Award, title: "Quality Promise", desc: "Consistent taste and quality in every single order." },
              { icon: ChefHat, title: "Expert Chefs", desc: "Our team of trained chefs brings decades of culinary experience." },
            ].map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-card p-6 rounded-xl shadow-card border border-border text-center">
                <v.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-display font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="font-display text-3xl font-bold mb-8">Meet Our Head Chef</h2>
        <div className="max-w-sm mx-auto">
          <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300&h=300&fit=crop" alt="Chef Arjun" className="rounded-full w-40 h-40 object-cover mx-auto mb-4 shadow-card" />
          <h3 className="font-display text-xl font-bold">Chef Arjun Sharma</h3>
          <p className="text-muted-foreground text-sm mt-2">With 15 years of culinary experience across India and abroad, Chef Arjun brings authentic flavors with a modern twist to every CloudBite dish.</p>
        </div>
      </section>
    </div>
  );
};

export default About;

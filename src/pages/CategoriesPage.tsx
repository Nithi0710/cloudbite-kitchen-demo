import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "@/data/foods";

const CategoriesPage = () => {
  return (
    <div>
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl font-extrabold mb-4">Categories</motion.h1>
          <p className="opacity-90">Browse food by your favorite category</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div key={cat.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Link to={`/category/${cat.id}`} className="flex flex-col items-center gap-3 p-8 rounded-xl bg-card shadow-card border border-border food-card-hover text-center">
                <span className="text-5xl">{cat.icon}</span>
                <h3 className="font-display font-bold text-lg">{cat.name}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;

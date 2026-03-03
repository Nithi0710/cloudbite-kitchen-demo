import { motion } from "framer-motion";
import FoodCard from "@/components/FoodCard";
import { foodItems } from "@/data/foods";

const DessertsPage = () => {
  const items = foodItems.filter((f) => f.category === "desserts");

  return (
    <div>
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl font-extrabold mb-2">🍰 Desserts</motion.h1>
          <p className="opacity-90">Sweet endings to your perfect meal</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => <FoodCard key={item.id} item={item} index={i} />)}
        </div>
      </section>
    </div>
  );
};

export default DessertsPage;

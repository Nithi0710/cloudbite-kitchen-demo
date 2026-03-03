import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import FoodCard from "@/components/FoodCard";
import { foodItems, categories } from "@/data/foods";

const categoryMap: Record<string, (f: typeof foodItems[0]) => boolean> = {
  veg: (f) => f.veg && !["desserts", "beverages", "south-indian", "chinese", "fast-food"].includes(f.category),
  "non-veg": (f) => !f.veg,
  desserts: (f) => f.category === "desserts",
  beverages: (f) => f.category === "beverages",
  combos: (f) => f.category === "combos",
  "fast-food": (f) => f.category === "fast-food",
  "south-indian": (f) => f.category === "south-indian",
  chinese: (f) => f.category === "chinese",
  specials: (f) => f.category === "specials",
};

const CategoryDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const category = categories.find((c) => c.id === id);
  const filter = categoryMap[id || ""];
  const items = filter ? foodItems.filter(filter) : [];

  return (
    <div>
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl font-extrabold mb-2">
            {category?.icon} {category?.name || "Category"}
          </motion.h1>
          <p className="opacity-90">Browse all {category?.name?.toLowerCase()} dishes</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        {items.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">No items found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, i) => (
              <FoodCard key={item.id} item={item} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default CategoryDetailPage;

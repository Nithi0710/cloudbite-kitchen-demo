import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import FoodCard from "@/components/FoodCard";
import { foodItems, categories } from "@/data/foods";

const MenuPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    return foodItems.filter((f) => {
      const matchSearch = f.name.toLowerCase().includes(search.toLowerCase());
      const matchCat = activeCategory === "all" || f.category === activeCategory;
      return matchSearch && matchCat;
    });
  }, [search, activeCategory]);

  return (
    <div>
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl font-extrabold mb-4">Our Menu</motion.h1>
          <p className="opacity-90 mb-6">Explore our full range of delicious dishes</p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-card text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10"}`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === c.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10"}`}
            >
              {c.icon} {c.name}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">No dishes found. Try a different search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((item, i) => (
              <FoodCard key={item.id} item={item} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default MenuPage;

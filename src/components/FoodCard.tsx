import { Star, Plus } from "lucide-react";
import { FoodItem } from "@/data/foods";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { toast } from "sonner";

const FoodCard = ({ item, index = 0 }: { item: FoodItem; index?: number }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="bg-card rounded-xl overflow-hidden shadow-card food-card-hover border border-border"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />
        <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full ${item.veg ? "bg-success text-success-foreground" : "bg-accent text-accent-foreground"}`}>
          {item.veg ? "🟢 Veg" : "🔴 Non-Veg"}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-display font-bold text-card-foreground">{item.name}</h3>
          <div className="flex items-center gap-1 text-secondary">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-xs font-bold">{item.rating}</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-lg text-primary">₹{item.price}</span>
          <button
            onClick={handleAdd}
            className="bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 hover:opacity-90 transition-opacity"
          >
            <Plus className="h-3.5 w-3.5" /> Add
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
        <h2 className="font-display text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">Add some delicious food to get started!</p>
        <Link to="/menu" className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl font-bold mb-8">
        Your Cart ({totalItems} items)
      </motion.h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="flex gap-4 bg-card p-4 rounded-xl shadow-card border border-border">
              <img src={item.image} alt={item.name} className="w-24 h-24 rounded-lg object-cover" />
              <div className="flex-1">
                <h3 className="font-display font-bold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <p className="font-display font-bold text-primary mt-1">₹{item.price}</p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button onClick={() => removeFromCart(item.id)} className="text-muted-foreground hover:text-accent transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-2 bg-muted rounded-lg">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1.5 hover:text-primary transition-colors">
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="font-bold text-sm w-6 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1.5 hover:text-primary transition-colors">
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-card p-6 rounded-xl shadow-card border border-border h-fit sticky top-20">
          <h3 className="font-display text-lg font-bold mb-4">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>₹{totalPrice}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Delivery Fee</span><span>{totalPrice >= 299 ? "Free" : "₹40"}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Taxes</span><span>₹{Math.round(totalPrice * 0.05)}</span></div>
          </div>
          <div className="border-t border-border mt-4 pt-4 flex justify-between font-display font-bold text-lg">
            <span>Total</span>
            <span className="text-primary">₹{totalPrice + (totalPrice >= 299 ? 0 : 40) + Math.round(totalPrice * 0.05)}</span>
          </div>
          <Link to="/checkout" className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-xl font-bold mt-6 hover:opacity-90 transition-opacity">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

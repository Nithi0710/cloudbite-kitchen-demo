import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Banknote, Smartphone, CheckCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [payment, setPayment] = useState("cod");
  const [showSuccess, setShowSuccess] = useState(false);

  const grandTotal = totalPrice + (totalPrice >= 299 ? 0 : 40) + Math.round(totalPrice * 0.05);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      clearCart();
      navigate("/order-tracking");
    }, 2000);
  };

  if (items.length === 0 && !showSuccess) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl font-bold mb-8">Checkout</motion.h1>

      <form onSubmit={handleOrder} className="grid lg:grid-cols-2 gap-8">
        {/* Delivery Address */}
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-xl shadow-card border border-border">
            <h3 className="font-display font-bold text-lg mb-4">Delivery Address</h3>
            <div className="space-y-4">
              <input required placeholder="Full Name" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
              <input required placeholder="Phone Number" type="tel" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
              <input required placeholder="Address Line 1" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
              <input placeholder="Address Line 2 (Optional)" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="City" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                <input required placeholder="PIN Code" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-card p-6 rounded-xl shadow-card border border-border">
            <h3 className="font-display font-bold text-lg mb-4">Payment Method</h3>
            <div className="space-y-3">
              {[
                { id: "cod", label: "Cash on Delivery", icon: Banknote },
                { id: "card", label: "Credit / Debit Card", icon: CreditCard },
                { id: "upi", label: "UPI Payment", icon: Smartphone },
              ].map((m) => (
                <label key={m.id} className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${payment === m.id ? "border-primary bg-primary/5" : "border-border"}`}>
                  <input type="radio" name="payment" value={m.id} checked={payment === m.id} onChange={() => setPayment(m.id)} className="accent-primary" />
                  <m.icon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-medium">{m.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-card p-6 rounded-xl shadow-card border border-border h-fit sticky top-20">
          <h3 className="font-display font-bold text-lg mb-4">Order Summary</h3>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.name} × {item.quantity}</span>
                <span className="font-medium">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border mt-4 pt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>₹{totalPrice}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Delivery</span><span>{totalPrice >= 299 ? "Free" : "₹40"}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Taxes</span><span>₹{Math.round(totalPrice * 0.05)}</span></div>
          </div>
          <div className="border-t border-border mt-4 pt-4 flex justify-between font-display font-bold text-lg">
            <span>Total</span><span className="text-primary">₹{grandTotal}</span>
          </div>
          <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold mt-6 hover:opacity-90 transition-opacity">
            Place Order
          </button>
        </div>
      </form>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-foreground/50 flex items-center justify-center z-50">
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="bg-card p-8 rounded-2xl text-center shadow-card-hover max-w-sm mx-4">
              <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold mb-2">Order Placed!</h3>
              <p className="text-muted-foreground">Your delicious food is on its way. Redirecting to order tracking...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CheckoutPage;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChefHat, Truck, Package, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { icon: CheckCircle, label: "Order Confirmed", time: "Just now" },
  { icon: ChefHat, label: "Preparing", time: "~10 min" },
  { icon: Package, label: "Packed", time: "~20 min" },
  { icon: Truck, label: "Out for Delivery", time: "~25 min" },
  { icon: CheckCircle, label: "Delivered", time: "~30 min" },
];

const OrderTrackingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl font-bold mb-2 text-center">
        Order Tracking
      </motion.h1>
      <p className="text-center text-muted-foreground mb-12">Order #CB{Math.floor(Math.random() * 90000 + 10000)}</p>

      <div className="max-w-xl mx-auto">
        {/* Progress bar */}
        <div className="relative mb-12">
          <div className="h-2 bg-muted rounded-full">
            <motion.div
              className="h-2 bg-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-500 ${
                i <= currentStep
                  ? "bg-primary/5 border-primary shadow-food"
                  : "bg-card border-border opacity-50"
              }`}
            >
              <div className={`p-3 rounded-full ${i <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                <step.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold">{step.label}</h3>
                <p className="text-xs text-muted-foreground">{step.time}</p>
              </div>
              {i <= currentStep && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-primary text-sm font-bold">
                  ✓
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>

        {currentStep === steps.length - 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mt-10">
            <p className="text-success font-display font-bold text-xl mb-4">🎉 Your order has been delivered!</p>
            <Link to="/menu" className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
              Order Again
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default OrderTrackingPage;

import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Menu, X, Search, UtensilsCrossed } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/menu", label: "Menu" },
  { path: "/categories", label: "Categories" },
  { path: "/about", label: "About" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Nav */}
      <header className="nav-sticky border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <UtensilsCrossed className="h-7 w-7 text-primary" />
            <span className="font-display text-xl font-bold text-foreground">Cloud<span className="text-primary">Bite</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === l.path ? "text-primary" : "text-muted-foreground"}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-5 w-5 text-foreground" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <nav className="flex flex-col p-4 gap-3">
                {navLinks.map((l) => (
                  <Link
                    key={l.path}
                    to={l.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium py-2 ${location.pathname === l.path ? "text-primary" : "text-muted-foreground"}`}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <UtensilsCrossed className="h-6 w-6 text-primary" />
                <span className="font-display text-lg font-bold">CloudBite</span>
              </div>
              <p className="text-sm opacity-70">Delicious food delivered from our cloud kitchen to your doorstep. Fresh, fast, and flavorful.</p>
            </div>
            <div>
              <h4 className="font-display font-bold mb-3">Quick Links</h4>
              <div className="flex flex-col gap-2 text-sm opacity-70">
                <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
                <Link to="/menu" className="hover:opacity-100 transition-opacity">Menu</Link>
                <Link to="/categories" className="hover:opacity-100 transition-opacity">Categories</Link>
                <Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link>
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold mb-3">Categories</h4>
              <div className="flex flex-col gap-2 text-sm opacity-70">
                <Link to="/veg" className="hover:opacity-100 transition-opacity">Veg</Link>
                <Link to="/non-veg" className="hover:opacity-100 transition-opacity">Non-Veg</Link>
                <Link to="/desserts" className="hover:opacity-100 transition-opacity">Desserts</Link>
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold mb-3">Contact Us</h4>
              <div className="flex flex-col gap-2 text-sm opacity-70">
                <p>📍 123 Kitchen Street, Food City</p>
                <p>📞 +91 98765 43210</p>
                <p>✉️ hello@cloudbite.com</p>
              </div>
              <div className="flex gap-3 mt-4 text-lg">
                <span className="cursor-pointer hover:scale-110 transition-transform">📘</span>
                <span className="cursor-pointer hover:scale-110 transition-transform">📸</span>
                <span className="cursor-pointer hover:scale-110 transition-transform">🐦</span>
                <span className="cursor-pointer hover:scale-110 transition-transform">▶️</span>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-50">
            © 2026 CloudBite Kitchen. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

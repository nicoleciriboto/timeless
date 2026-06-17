import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({ onContactClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-md py-4 border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img
            src="/TimelessMotionLogo.jpeg"
            alt="Timeless Motion"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs uppercase tracking-widest transition-colors hover:text-white relative py-1 group ${
                location.pathname === link.path ? "text-white" : "text-neutral-400"
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <button
            onClick={onContactClick}
            className="text-xs uppercase tracking-widest px-5 py-2.5 rounded-full border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            Start a Project
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-neutral-300 hover:text-white transition-colors"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed inset-0 top-[60px] bg-neutral-950 flex flex-col justify-between p-8 z-40 md:hidden"
          >
            <div className="flex flex-col gap-8 mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-3xl font-medium tracking-tight hover:text-white transition-colors ${
                    location.pathname === link.path ? "text-white" : "text-neutral-500"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileOpen(false);
                setTimeout(onContactClick, 300);
              }}
              className="w-full bg-white text-black text-center py-4 rounded-full font-medium tracking-widest text-xs uppercase hover:bg-neutral-200 transition-colors"
            >
              Start a Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

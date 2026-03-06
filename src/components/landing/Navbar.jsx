import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Waves, Menu, X } from "lucide-react";

const navLinks = ["Platform", "Features", "Process", "Kontakt"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#060a1a]/80 backdrop-blur-xl border-b border-slate-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center">
            <Waves className="w-4 h-4 text-[#060a1a]" />
          </div>
          <span className="text-white font-bold text-sm tracking-tight">
            H.A.R.B.O.R <span className="text-slate-500 font-light">Vision</span>
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-slate-400 text-sm hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
          <button className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium hover:bg-cyan-500/20 transition-all">
            Book demo
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-400"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-[#060a1a]/95 backdrop-blur-xl border-b border-slate-800/50 px-6 pb-6"
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-slate-300 text-sm py-2">
                {link}
              </a>
            ))}
            <button className="mt-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-[#060a1a] text-sm font-semibold">
              Book demo
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Waves, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Platform", id: "platform" },
  { label: "Features", id: "features" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Contact", id: "contact" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

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
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#03060f]/85 backdrop-blur-2xl border-b border-slate-800/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.3)]">
            <Waves className="w-4 h-4 text-[#03060f]" />
          </div>
          <div>
            <span className="text-white font-black text-sm tracking-tight">H.A.R.B.O.R</span>
            <span className="text-slate-500 font-light text-sm"> Vision</span>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => scrollTo("contact")} className="ml-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/15 to-teal-400/10 border border-cyan-500/25 text-cyan-300 text-sm font-semibold hover:from-cyan-500/25 hover:to-teal-400/20 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300">
            Book Demo
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-400 hover:text-white"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-[#03060f]/95 backdrop-blur-2xl border-b border-slate-800/50 px-6 pb-6"
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => { scrollTo(link.id); setMobileOpen(false); }} className="text-slate-300 text-sm py-2 hover:text-white text-left">
                {link.label}
              </button>
            ))}
            <button className="mt-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-[#03060f] text-sm font-black tracking-wider uppercase">
              Book Demo
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
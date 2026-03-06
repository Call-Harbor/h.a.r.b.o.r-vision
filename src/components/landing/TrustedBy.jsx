import React from "react";
import { motion } from "framer-motion";

const companies = [
  "Maersk Line",
  "MSC Shipping",
  "CMA CGM",
  "Hapag-Lloyd",
  "Evergreen",
  "COSCO",
  "Yang Ming",
];

export default function TrustedBy() {
  return (
    <section className="relative py-16 px-6 bg-[#050915] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 text-xs tracking-[0.3em] uppercase font-medium mb-10"
        >
          Trusted by the world's leading maritime operators
        </motion.p>

        {/* Scrolling marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050915] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050915] to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-16 items-center shrink-0"
            >
              {[...companies, ...companies].map((name, i) => (
                <div
                  key={i}
                  className="shrink-0 px-6 py-3 rounded-xl border border-slate-800/60 bg-slate-900/30 text-slate-500 text-sm font-semibold tracking-wider whitespace-nowrap hover:text-slate-300 hover:border-slate-700 transition-colors duration-300"
                >
                  {name}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
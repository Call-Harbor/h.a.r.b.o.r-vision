import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "15%", label: "Brændstofbesparelse", sub: "gennemsnitligt per fartøj" },
  { value: "98.7%", label: "Oppetid", sub: "systemtilgængelighed" },
  { value: "<2s", label: "Realtids‑latens", sub: "fra data til visualisering" },
  { value: "340+", label: "Fartøjer", sub: "aktivt overvåget" },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 px-6 bg-[#070b1e]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[200px] bg-cyan-500/[0.03] blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="mt-2 text-white font-medium text-sm">{s.label}</div>
              <div className="text-slate-500 text-xs mt-0.5">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
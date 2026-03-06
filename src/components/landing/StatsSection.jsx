import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "15%", label: "Fuel Savings", sub: "average per vessel" },
  { value: "98.7%", label: "Uptime", sub: "system availability" },
  { value: "<2s", label: "Real-time Latency", sub: "data to visualization" },
  { value: "340+", label: "Vessels", sub: "actively monitored" },
];

export default function StatsSection() {
  return (
    <section className="relative py-28 px-6 bg-[#050915]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[300px] bg-gradient-to-r from-cyan-500/[0.04] via-teal-400/[0.06] to-cyan-500/[0.04] blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="text-center group"
            >
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-b from-white via-cyan-100 to-slate-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-teal-200 transition-all duration-500">
                {s.value}
              </div>
              <div className="mt-3 text-white font-bold text-sm tracking-wide">{s.label}</div>
              <div className="text-slate-500 text-xs mt-1">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
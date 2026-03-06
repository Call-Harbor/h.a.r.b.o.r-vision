import React from "react";
import { motion } from "framer-motion";
import { Brain, Waves, Compass, Shield } from "lucide-react";

const pillars = [
  { icon: Brain, label: "AI Analysis", desc: "Positions, weather & port capacity", color: "from-cyan-500/20 to-cyan-500/5" },
  { icon: Waves, label: "Real-time Data", desc: "Continuous 24/7 monitoring", color: "from-teal-500/20 to-teal-500/5" },
  { icon: Compass, label: "Optimal Routing", desc: "Dynamic route optimization", color: "from-cyan-400/20 to-cyan-400/5" },
  { icon: Shield, label: "Safe Operations", desc: "Risk-first decision engine", color: "from-teal-400/20 to-teal-400/5" },
];

export default function AboutEngine() {
  return (
    <section className="relative py-40 px-6 bg-[#01030a] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute -left-64 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/[0.05] blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <span className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase mb-6">
              <span className="w-8 h-px bg-cyan-400/60" />
              The Core Engine
              <span className="w-8 h-px bg-cyan-400/60" />
            </span>
            <h2 className="font-black text-white tracking-tighter leading-tight mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              The{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
                H.A.R.B.O.R
              </span>
              <br />
              Intelligence Engine
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              It sees everything. Vessel positions, weather, port capacity, market signals, crew schedules, fuel prices. 
              Then it translates that into{" "}
              <span className="text-white font-semibold">the one decision you need to make right now</span> — with full reasoning laid out.
            </p>
            <p className="text-slate-400 leading-relaxed">
              No noise. No false alarms. Just intelligence that makes your fleet move faster, smarter, and more profitably.
            </p>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i + 0.4, duration: 0.6 }}
                className="group relative p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden cursor-default"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 rounded-3xl bg-[#080d20]/60" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-teal-500/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    <p.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-bold text-base">{p.label}</h3>
                  <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
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
            <span className="text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase">The Core Engine</span>
            <h2 className="mt-6 font-black text-white tracking-tighter leading-none" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              Meet the
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
                H.A.R.B.O.R
              </span>
              <br />
              Intelligence
            </h2>
            <p className="mt-4 text-slate-500 text-sm tracking-[0.15em] uppercase">
              Autonomous Routing & Base Operations Regulator
            </p>
            <p className="mt-8 text-slate-300 leading-relaxed text-xl font-light">
              An AI engine that ingests vessel positions, weather patterns, port capacity and operational constraints in real time — then translates all of that into{" "}
              <span className="text-white font-medium">optimal decisions, scenarios and recommendations</span> for your entire fleet.
            </p>
            <p className="mt-5 text-slate-500 leading-relaxed text-base">
              Think of it as a mission-critical intelligence that never sleeps, never misses a data point, and always delivers the most complete decision foundation.
            </p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 h-px bg-gradient-to-r from-cyan-500/50 via-teal-400/30 to-transparent origin-left"
            />
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
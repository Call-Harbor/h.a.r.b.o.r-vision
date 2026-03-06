import React from "react";
import { motion } from "framer-motion";
import { Brain, Waves, Compass, Shield } from "lucide-react";

const pillars = [
  { icon: Brain, label: "AI Analysis", desc: "Positions, weather & capacity" },
  { icon: Waves, label: "Real-time Data", desc: "Continuous 24/7 monitoring" },
  { icon: Compass, label: "Optimal Routing", desc: "Dynamic route optimization" },
  { icon: Shield, label: "Safe Operations", desc: "Risk-first decision engine" },
];

export default function AboutEngine() {
  return (
    <section className="relative py-36 px-6 bg-[#03060f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 bg-cyan-500/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase">
              The Core Engine
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Meet the
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                H.A.R.B.O.R
              </span>
              <br />
              Intelligence
            </h2>
            <div className="mt-2 text-slate-500 text-sm tracking-[0.15em] uppercase font-light">
              Autonomous Routing & Base Operations Regulator
            </div>
            <p className="mt-8 text-slate-300 leading-relaxed text-lg font-light">
              An AI engine that ingests vessel positions, weather patterns, port
              capacity and operational constraints in real time — then translates
              all of that into optimal decisions, scenarios and recommendations
              for every stakeholder.
            </p>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Think of it as an intelligence that never sleeps, never misses a
              data point, and always delivers the most complete decision
              foundation to your operators and fleet managers.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent" />
              <span className="text-cyan-400/60 text-xs tracking-widest uppercase">Powered by H.A.R.B.O.R</span>
              <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/30 to-transparent" />
            </div>
          </motion.div>

          {/* Right - pillars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                className="group relative p-7 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-[#03060f] hover:border-cyan-500/30 transition-all duration-500 cursor-default"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/15 to-teal-500/5 flex items-center justify-center mb-5 group-hover:from-cyan-500/25 transition-all duration-500">
                    <p.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-bold text-base">{p.label}</h3>
                  <p className="text-slate-500 text-sm mt-1">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
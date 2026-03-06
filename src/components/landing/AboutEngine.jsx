import React from "react";
import { motion } from "framer-motion";
import { Brain, Waves, Compass, Shield } from "lucide-react";

const pillars = [
  { icon: Brain, label: "AI‑analyse", desc: "Positioner, vejr og kapacitet" },
  { icon: Waves, label: "Realtids‑data", desc: "Kontinuerlig overvågning" },
  { icon: Compass, label: "Optimal routing", desc: "Dynamisk ruteplanlægning" },
  { icon: Shield, label: "Sikker drift", desc: "Risikominimering i fokus" },
];

export default function AboutEngine() {
  return (
    <section className="relative py-32 px-6 bg-[#060a1a]">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Kernen i platformen
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              H.A.R.B.O.R
              <span className="block text-slate-500 text-xl sm:text-2xl font-light mt-2">
                Autonomous Routing & Base Operations Regulator
              </span>
            </h2>
            <p className="mt-6 text-slate-400 leading-relaxed text-lg font-light">
              En AI‑motor, der analyserer skibes positioner, vejrforhold, havnekapacitet og operationelle begrænsninger i realtid — og omsætter det til optimale beslutninger, scenarier og anbefalinger for hele flåden.
            </p>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Tænk det som en intelligens, der aldrig sover, aldrig overser et datapunkt, og altid leverer det mest komplette beslutningsgrundlag til operatører og rederier.
            </p>
          </motion.div>

          {/* Right - pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                className="group relative p-6 rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/50 to-slate-800/20 hover:border-cyan-500/20 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                    <p.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">{p.label}</h3>
                  <p className="text-slate-500 text-xs mt-1">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
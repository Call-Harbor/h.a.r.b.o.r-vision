import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Globe2, Layers, Zap, ShieldCheck, TrendingUp, Eye, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Real-time Fleet Overview",
    description: "AIS, GPS, heading, speed and engine parameters unified in one visual control room — every vessel, all the time.",
  },
  {
    icon: Brain,
    title: "AI-Driven Decision Support",
    description: "Explainable recommendations from the H.A.R.B.O.R engine: route adjustments, speed profiles and port call planning with full rationale.",
  },
  {
    icon: Eye,
    title: "Holographic 3D Visualization",
    description: "Layer-based 3D control room with routes, weather, risk zones and capacity — full situational awareness in seconds.",
  },
  {
    icon: Layers,
    title: "Vendor-Agnostic Integration",
    description: "Sits on top of existing systems via APIs and standard protocols. No big-bang replacement required.",
  },
  {
    icon: ShieldCheck,
    title: "Intelligent Alerting",
    description: "Prioritized alerts with context and recommended action — not alarm spam. The system tells you what and why.",
  },
  {
    icon: TrendingUp,
    title: "Simulation & Continuous Learning",
    description: "Fast-forward in time and test decisions before they're made. The platform learns from historical outcomes and improves over time.",
  },
  {
    icon: Zap,
    title: "Port & Base Coordination",
    description: "Berth plans, slot times, bunkering and terminal capacity synchronized with vessel arrival and departure forecasts.",
  },
  {
    icon: BarChart3,
    title: "Strategic Analytics",
    description: "KPIs, trends and scenarios for management — from daily operations to fleet renewal and investment decisions.",
  },
];

export default function NexusVectisSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="nexus-vectis" className="relative py-40 px-6 bg-[#020714] overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Background glows */}
      <div className="absolute -right-64 top-1/3 w-[800px] h-[800px] bg-cyan-500/[0.04] blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute -left-32 bottom-1/4 w-[600px] h-[600px] bg-teal-500/[0.04] blur-[180px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl mb-24"
        >
          <span className="text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase">The Platform</span>

          <div className="mt-6 flex items-baseline gap-5 flex-wrap">
            <h2 className="font-black text-white tracking-tighter leading-none" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
              Nexus Vectis
            </h2>
            <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/[0.07] text-cyan-300 text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
              Flagship Platform
            </span>
          </div>

          <p className="mt-3 text-slate-500 text-sm tracking-[0.15em] uppercase">
            Powered by H.A.R.B.O.R Intelligence Engine
          </p>

          <p className="mt-8 text-slate-300 text-xl font-light leading-relaxed max-w-3xl">
            Nexus Vectis is the nervous system of the modern maritime fleet —{" "}
            <span className="text-white font-medium">one unified, intelligent platform</span>{" "}
            connecting vessels, ports, control rooms and data sources, translating complex AI logic into{" "}
            <span className="text-cyan-300">human-readable decisions.</span>
          </p>

          <p className="mt-5 text-slate-500 leading-relaxed text-base max-w-2xl">
            It's the solution your operators log into every day — the visual layer that gives your entire organization full situational awareness without drowning in data.
          </p>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mt-12 h-px bg-gradient-to-r from-cyan-500/50 via-teal-400/30 to-transparent origin-left"
          />
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative p-7 rounded-3xl border border-slate-800/70 bg-[#060b1a]/60 backdrop-blur-sm hover:border-cyan-500/25 transition-all duration-500 overflow-hidden cursor-default"
            >
              {/* Top accent line on hover */}
              <motion.div
                animate={{ scaleX: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent origin-left"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <motion.div
                  animate={{ scale: hovered === i ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-teal-500/5 flex items-center justify-center mb-5"
                >
                  <f.icon className="w-5 h-5 text-cyan-400" />
                </motion.div>
                <h3 className="text-white font-bold text-sm mb-2.5 leading-snug">{f.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-light">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tag line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 flex flex-wrap gap-6 items-center"
        >
          {["Realtidsdrift", "Træningssimulering", "Incident-analyse", "Multi-bruger"].map((tag) => (
            <span key={tag} className="flex items-center gap-2 text-slate-500 text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60" />
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Globe2, Layers, Zap, ShieldCheck, TrendingUp, Eye, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Every Vessel. One Screen.",
    description: "AIS, GPS, speed, heading, engine load — unified in a single live control room. Nothing hidden. Nothing delayed.",
  },
  {
    icon: Brain,
    title: "AI That Explains Itself",
    description: "Not just a recommendation — a full rationale. Route changes, speed profiles, port call timing. Your operators know the why, not just the what.",
  },
  {
    icon: Eye,
    title: "3D Situational Awareness",
    description: "Layer weather, risk zones, traffic density and port capacity onto a live 3D map. See what's coming before it arrives.",
  },
  {
    icon: Layers,
    title: "Plugs Into What You Have",
    description: "No rip-and-replace. Nexus Vectis sits on top of your existing systems via open APIs. You're operational in days, not years.",
  },
  {
    icon: ShieldCheck,
    title: "Alerts That Mean Something",
    description: "Prioritized, contextual, actionable. No noise. When an alert fires, it tells you exactly what to do — and why it matters right now.",
  },
  {
    icon: TrendingUp,
    title: "Test Before You Commit",
    description: "Run forward simulations. Play out scenarios before signing off on a decision. The platform learns from every outcome and gets sharper over time.",
  },
  {
    icon: Zap,
    title: "Port Calls, Perfectly Timed",
    description: "Berth slots, bunkering windows, terminal capacity — all synced in real time with your fleet's arrival forecasts. No wasted hours at anchor.",
  },
  {
    icon: BarChart3,
    title: "From Bridge to Boardroom",
    description: "Live KPIs for operators. Strategic trend analysis for leadership. One platform that speaks both languages fluently.",
  },
];

export default function NexusVectisSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="nexus-vectis" className="relative py-40 px-6 bg-[#020714] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Background glows */}
      <div className="absolute right-0 top-0 w-[900px] h-[900px] bg-cyan-500/[0.05] blur-[220px] rounded-full pointer-events-none" />
      <div className="absolute -left-32 bottom-0 w-[700px] h-[700px] bg-teal-500/[0.05] blur-[200px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase mb-8">
            <span className="w-8 h-px bg-cyan-400/60" />
            The Platform
            <span className="w-8 h-px bg-cyan-400/60" />
          </span>

          <div className="flex flex-wrap items-baseline gap-5 mb-6">
            <h2
              className="font-black text-white tracking-tighter leading-none"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              Nexus{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
                Vectis
              </span>
            </h2>
          </div>

          {/* Big punchy tagline */}
          <p className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-200 leading-tight max-w-4xl mb-6">
            The intelligence layer your fleet{" "}
            <span className="text-white font-semibold italic">has been missing</span>.
          </p>

          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
            One platform that ingests everything — vessel data, weather, port schedules, market signals — 
            and turns it into <span className="text-slate-200">clear, confident decisions</span> for the people who run your fleet.
            Not more dashboards. Not more noise.{" "}
            <span className="text-cyan-300 font-medium">Just clarity, at speed.</span>
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.4 }}
            className="mt-12 h-px bg-gradient-to-r from-cyan-500/60 via-teal-400/30 to-transparent origin-left"
          />
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative p-7 rounded-2xl border border-slate-800/70 bg-[#060b1a]/80 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden cursor-default hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]"
            >
              {/* Glow on hover */}
              <motion.div
                animate={{ opacity: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/[0.08] via-transparent to-teal-500/[0.04]"
              />
              {/* Top accent */}
              <motion.div
                animate={{ scaleX: hovered === i ? 1 : 0, opacity: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.35 }}
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent origin-left"
              />

              <div className="relative">
                <motion.div
                  animate={{ scale: hovered === i ? 1.15 : 1, rotate: hovered === i ? 5 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/5 border border-cyan-500/10 flex items-center justify-center mb-5"
                >
                  <f.icon className="w-5 h-5 text-cyan-400" />
                </motion.div>
                <h3 className="text-white font-bold text-sm mb-2.5 leading-snug group-hover:text-cyan-100 transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 p-8 rounded-2xl border border-slate-800/60 bg-gradient-to-r from-cyan-500/[0.04] to-transparent"
        >
          <div>
            <p className="text-white font-semibold text-lg">Built for operators. Trusted by leadership.</p>
            <p className="text-slate-500 text-sm mt-1">Nexus Vectis is the single source of truth for your entire maritime operation.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            {["Real-time Ops", "Fleet Simulation", "Port Intelligence", "Multi-user"].map((tag) => (
              <span key={tag} className="flex items-center gap-2 text-slate-500 text-xs tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60" />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
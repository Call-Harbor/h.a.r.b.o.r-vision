import React from "react";
import { motion } from "framer-motion";
import { Ship, MapPin, Anchor, Eye, Fuel, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Ship,
    title: "Fleet Management",
    description:
      "A unified view of your entire fleet — vessel positions, status, speed, and performance in one holographic control room.",
    tag: "Core",
  },
  {
    icon: MapPin,
    title: "AI Route Planning",
    description:
      "AI-optimized routes that balance time, fuel, weather conditions, and safety constraints in real time.",
    tag: "AI",
  },
  {
    icon: Anchor,
    title: "Port Operations",
    description:
      "Intelligent scheduling of arrivals, berth assignments, and cargo operations based on live capacity and traffic data.",
    tag: "Ops",
  },
  {
    icon: Eye,
    title: "Holographic Overview",
    description:
      "3D visualization of your entire operation — a control room from the future, accessible today on any screen.",
    tag: "Viz",
  },
  {
    icon: Fuel,
    title: "Fuel Optimization",
    description:
      "Up to 15% fuel savings through precision speed and route optimization powered by the H.A.R.B.O.R engine.",
    tag: "Savings",
  },
  {
    icon: BarChart3,
    title: "Decision Support",
    description:
      "Scenario analyses and recommendations delivered in real time, so operators always act with full situational awareness.",
    tag: "Intel",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-36 px-6 bg-[#050915]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-cyan-500/[0.025] blur-[180px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase">
            Capabilities
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            Everything you need.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
              One platform.
            </span>
          </h2>
          <p className="mt-5 text-slate-400 max-w-xl mx-auto text-lg font-light">
            From vessel position to berth assignment — H.A.R.B.O.R Vision
            covers the full maritime operation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.6 }}
              className="group relative p-8 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-[#080d20]/80 to-[#03060f]/80 hover:border-cyan-500/25 transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Top edge glow on hover */}
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-teal-500/5 flex items-center justify-center group-hover:from-cyan-500/25 transition-all duration-500">
                    <f.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-500 text-[10px] font-bold tracking-widest uppercase">
                    {f.tag}
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
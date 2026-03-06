import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ship, MapPin, Anchor, Eye, Fuel, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Ship,
    title: "Fleet Management",
    description: "A unified view of your entire fleet — vessel positions, status, speed, and performance in one holographic control room. Command everything from a single screen.",
    tag: "Core",
  },
  {
    icon: MapPin,
    title: "AI Route Planning",
    description: "AI-optimized routes that balance time, fuel, weather conditions, and safety constraints in real time. Every route. Every vessel. Continuously updated.",
    tag: "AI",
  },
  {
    icon: Anchor,
    title: "Port Operations",
    description: "Intelligent scheduling of arrivals, berth assignments, and cargo operations based on live capacity and traffic data. Zero idle time.",
    tag: "Ops",
  },
  {
    icon: Eye,
    title: "Holographic Overview",
    description: "3D visualization of your entire operation — a command center from the future, accessible on any screen, anywhere in the world, right now.",
    tag: "Viz",
  },
  {
    icon: Fuel,
    title: "Fuel Optimization",
    description: "Up to 15% fuel savings through precision speed and route optimization powered by the H.A.R.B.O.R engine. Less spend. Less emissions.",
    tag: "Savings",
  },
  {
    icon: BarChart3,
    title: "Decision Support",
    description: "Scenario analyses and ranked recommendations delivered in real time, so operators act with full situational awareness — every single time.",
    tag: "Intel",
  },
];

export default function FeaturesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative py-40 px-6 bg-[#04070f] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[700px] rounded-full bg-cyan-500/[0.03] blur-[200px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <span className="text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase">Capabilities</span>
          <h2 className="mt-6 font-black text-white tracking-tighter leading-none" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            Everything you need.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
              One platform.
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative p-9 rounded-3xl border border-slate-800/70 bg-[#060b1a]/60 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500 overflow-hidden cursor-default"
            >
              {/* Top line on hover */}
              <motion.div
                animate={{ scaleX: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent origin-left"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-center justify-between mb-7">
                  <motion.div
                    animate={{ scale: hovered === i ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-teal-500/5 flex items-center justify-center"
                  >
                    <f.icon className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                  <span className="px-3 py-1 rounded-full bg-slate-800/80 text-slate-500 text-[10px] font-bold tracking-widest uppercase">
                    {f.tag}
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";
import { Ship, MapPin, Anchor, Eye, Fuel, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Ship,
    title: "Flådestyring",
    description: "Samlet overblik over alle fartøjer med position, status og performance — i ét intuitivt kontrolrum.",
  },
  {
    icon: MapPin,
    title: "Ruteplanlægning",
    description: "AI‑optimerede ruter der balancerer tid, brændstof, vejrforhold og sikkerhed i realtid.",
  },
  {
    icon: Anchor,
    title: "Havneoperationer",
    description: "Intelligent planlægning af ankomster, kajpladser og losning baseret på kapacitets‑ og trafikdata.",
  },
  {
    icon: Eye,
    title: "Holografisk overblik",
    description: "3D‑visualisering af hele operationen — som et kontrolrum fra fremtiden, men tilgængeligt i dag.",
  },
  {
    icon: Fuel,
    title: "Brændstofoptimering",
    description: "Op til 15% besparelse på brændstof gennem præcis hastigheds‑ og ruteoptimering.",
  },
  {
    icon: BarChart3,
    title: "Beslutningsstøtte",
    description: "Scenarieanalyser og anbefalinger leveret i realtid, så operatører altid træffer informerede valg.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-32 px-6 bg-[#070b1e]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/[0.02] blur-[150px]" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase">
            Kapabiliteter
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Alt du behøver. Ét system.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-lg font-light">
            Fra skibsposition til kajplads — H.A.R.B.O.R Vision dækker hele den maritime operation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative p-8 rounded-2xl border border-slate-800/60 bg-[#0a0f25]/60 backdrop-blur-sm hover:border-cyan-500/20 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-teal-500/5 flex items-center justify-center mb-5 group-hover:from-cyan-500/20 group-hover:to-teal-500/10 transition-all duration-500">
                  <f.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
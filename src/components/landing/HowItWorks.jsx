import React from "react";
import { motion } from "framer-motion";
import { Satellite, Cpu, MonitorDot, Lightbulb } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Satellite,
    title: "Dataindsamling",
    desc: "AIS‑positioner, vejrdata, havnekapacitet og historiske mønstre aggregeres i realtid.",
  },
  {
    num: "02",
    icon: Cpu,
    title: "AI‑analyse",
    desc: "H.A.R.B.O.R‑motoren processerer alle datastrømme og identificerer optimale scenarier.",
  },
  {
    num: "03",
    icon: MonitorDot,
    title: "Visualisering",
    desc: "Data præsenteres i et intuitivt 3D‑kontrolrum med holografisk overblik over hele flåden.",
  },
  {
    num: "04",
    icon: Lightbulb,
    title: "Beslutning",
    desc: "Operatøren modtager klare anbefalinger og kan handle hurtigt med fuld situationsforståelse.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-32 px-6 bg-[#060a1a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase">
            Processen
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Fra data til beslutning
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg mx-auto text-lg font-light">
            Fire trin. Fuldstændig automatiseret. Millisekunder.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative text-center"
              >
                {/* Step circle */}
                <div className="relative mx-auto w-20 h-20 rounded-full border border-slate-700/80 bg-[#0a0f25] flex items-center justify-center mb-6 group">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent" />
                  <s.icon className="w-7 h-7 text-cyan-400 relative z-10" />
                  {/* Number badge */}
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-cyan-500 text-[#060a1a] text-[10px] font-bold flex items-center justify-center">
                    {s.num}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";
import { Satellite, Cpu, MonitorDot, Lightbulb } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Satellite,
    title: "Data Ingestion",
    desc: "AIS positions, weather feeds, port capacity and historical patterns aggregated continuously.",
  },
  {
    num: "02",
    icon: Cpu,
    title: "AI Processing",
    desc: "The H.A.R.B.O.R engine processes all data streams and identifies optimal scenarios in milliseconds.",
  },
  {
    num: "03",
    icon: MonitorDot,
    title: "3D Visualization",
    desc: "Data surfaces in an intuitive holographic control room — a complete picture of your entire fleet.",
  },
  {
    num: "04",
    icon: Lightbulb,
    title: "Decisive Action",
    desc: "Operators receive clear, ranked recommendations and act with full situational awareness.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-36 px-6 bg-[#03060f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <span className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase">
            The Process
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            From raw data
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
              to decisive action.
            </span>
          </h2>
          <p className="mt-5 text-slate-400 max-w-md mx-auto text-lg font-light">
            Four steps. Fully automated. Sub-second.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[12%] right-[12%] h-px">
            <div className="h-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute inset-0 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/80 to-cyan-400/0 origin-left"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Circle */}
                <motion.div 
                  animate={{ boxShadow: ["0_0_0px_rgba(0,212,255,0.1)", "0_0_30px_rgba(0,212,255,0.4)", "0_0_0px_rgba(0,212,255,0.1)"] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  className="relative w-[7rem] h-[7rem] rounded-full border border-cyan-500/50 bg-[#080d20] flex items-center justify-center mb-7 group"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/15 to-transparent" />
                  <motion.div
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                    className="absolute inset-2 rounded-full border border-cyan-400/40"
                  />
                  <s.icon className="w-8 h-8 text-cyan-300 relative z-10" />
                  <motion.span 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-teal-400 text-[#03060f] text-[10px] font-black flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.6)]"
                  >
                    {s.num}
                  </motion.span>
                </motion.div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
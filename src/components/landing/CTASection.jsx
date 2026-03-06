import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-32 px-6 bg-[#060a1a] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      {/* Background orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-gradient-to-r from-cyan-500/[0.06] via-teal-500/[0.04] to-cyan-500/[0.06] blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Klar til at se din flåde
          <br />
          <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
            på en ny måde?
          </span>
        </h2>
        <p className="mt-6 text-slate-400 text-lg font-light max-w-xl mx-auto leading-relaxed">
          Book en demo og oplev hvordan H.A.R.B.O.R Vision kan transformere dine maritime operationer med AI‑drevet intelligens og holografisk visualisering.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-[#060a1a] font-semibold text-sm tracking-wide overflow-hidden transition-all hover:shadow-[0_0_50px_rgba(0,212,255,0.25)]">
            <span className="relative z-10">Book en demo</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button className="px-8 py-4 rounded-full border border-slate-600/50 text-slate-300 font-medium text-sm tracking-wide hover:border-cyan-500/40 hover:text-cyan-300 transition-all">
            Kontakt os
          </button>
        </div>
        <p className="mt-6 text-slate-600 text-xs">
          Ingen binding. Gratis første demo. Vi ringer inden 24 timer.
        </p>
      </motion.div>
    </section>
  );
}
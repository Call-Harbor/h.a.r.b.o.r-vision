import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-40 px-6 bg-[#03060f] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Large background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/[0.07] via-teal-400/[0.05] to-cyan-500/[0.07] blur-[140px] pointer-events-none" />

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-cyan-500/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-cyan-500/8 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-400/10 flex items-center justify-center border border-cyan-500/20">
            <Zap className="w-7 h-7 text-cyan-400" />
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
          Ready to see your
          <br />
          fleet{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-200 bg-clip-text text-transparent">
            like never before?
          </span>
        </h2>
        <p className="mt-8 text-slate-400 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Book a demo and experience how H.A.R.B.O.R Vision transforms your
          maritime operations with AI-driven intelligence and holographic
          visualization — live, in real time.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button className="group relative inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-[#03060f] font-black text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_80px_rgba(0,212,255,0.35)] hover:scale-105">
            <span className="relative z-10">Book a Demo</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>
          <button className="px-10 py-5 rounded-full border border-slate-600/60 text-slate-300 font-medium text-sm tracking-widest uppercase hover:border-cyan-500/50 hover:text-white transition-all duration-300">
            Contact Us
          </button>
        </div>

        <p className="mt-8 text-slate-600 text-xs tracking-wide">
          No commitment. Free first demo. We'll reach out within 24 hours.
        </p>
      </motion.div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-48 px-6 bg-[#01030a] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Massive glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-to-r from-cyan-500/[0.12] via-teal-400/[0.08] to-cyan-500/[0.12] blur-[160px] pointer-events-none"
      />

      {/* Concentric rings */}
      {[800, 600, 400].map((size, i) => (
        <motion.div
          key={size}
          animate={{ scale: [1, 1.05, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20 pointer-events-none"
          style={{ width: size, height: size }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="relative max-w-5xl mx-auto text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase mb-8"
        >
          The Future of Maritime Operations
        </motion.p>

        <motion.h2 
          animate={{ textShadow: ["0_0_60px_rgba(0,212,255,0.2)", "0_0_120px_rgba(0,212,255,0.4)", "0_0_60px_rgba(0,212,255,0.2)"] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="font-black text-white tracking-tighter leading-[0.9]" 
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          Ready to see your
          <br />
          fleet{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
            like never before?
          </span>
        </motion.h2>

        <p className="mt-10 text-slate-400 text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Get in touch to learn how H.A.R.B.O.R Vision transforms your maritime operations with AI-driven intelligence and real-time optimization.
        </p>

        <div className="mt-14 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a href="mailto:ai@harborvision.dev" className="inline-flex px-12 py-6 rounded-full border border-white/10 text-slate-300 font-medium text-base tracking-widest uppercase backdrop-blur-sm hover:border-cyan-500/40 hover:text-white hover:bg-white/5 transition-all duration-300">
            Contact Us
          </a>
        </div>

        <p className="mt-8 text-slate-600 text-sm">
          Response within 24 hours
        </p>
      </motion.div>
    </section>
  );
}
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${p.alpha})`;
        ctx.fill();
      });
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#01030a]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Large central glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-cyan-500/20 via-teal-500/10 to-transparent blur-[160px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-400/15 blur-[100px]"
        />
        {/* Bottom horizon */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-cyan-500/10 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#01030a] to-transparent" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0,212,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.8) 1px, transparent 1px)`,
        backgroundSize: "100px 100px"
      }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto w-full">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-10"
        >
          <span className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-cyan-400/25 bg-cyan-400/[0.06] text-cyan-300 text-xs font-semibold tracking-[0.25em] uppercase backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
            Next-Generation Maritime Intelligence
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
          </span>
        </motion.div>

        {/* Giant title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-black tracking-tighter leading-[0.85] select-none"
            style={{ fontSize: "clamp(4rem, 18vw, 18rem)" }}>
            <span className="text-white" style={{ textShadow: "0 0 120px rgba(0,212,255,0.25), 0 0 40px rgba(0,212,255,0.1)" }}>
              H.A.R.B.O.R
            </span>
          </h1>
          <motion.h2
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.4, delay: 0.6 }}
            className="mt-3 font-light uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          >
            <span className="bg-gradient-to-r from-cyan-200 via-teal-300 to-cyan-200 bg-clip-text text-transparent">
              Vision
            </span>
          </motion.h2>
        </motion.div>

        {/* Acronym */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 text-slate-500 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
        >
          Autonomous · Routing · Base · Operations · Regulator
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-10 text-xl sm:text-2xl md:text-3xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
        >
          The AI brain that{" "}
          <span className="text-white font-semibold">sees your entire fleet</span>,
          {" "}plans every route, and optimizes every port call —
          <span className="text-cyan-300"> in real time.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-14 flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <button className="group relative inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-[#01030a] font-black text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_80px_rgba(0,212,255,0.5)] hover:scale-105">
            <span className="relative z-10">Request a Demo</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="inline-flex items-center gap-2 px-10 py-5 rounded-full border border-white/10 text-slate-300 font-medium text-sm tracking-widest uppercase backdrop-blur-sm hover:border-cyan-500/40 hover:text-white hover:bg-white/5 transition-all duration-300">
            Explore the Platform
          </button>
        </motion.div>

        {/* Scroll micro-stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-20 flex flex-wrap justify-center gap-10 sm:gap-16"
        >
          {[
            { val: "15%", label: "Fuel Savings" },
            { val: "340+", label: "Vessels Monitored" },
            { val: "<2s", label: "Real-time Latency" },
            { val: "98.7%", label: "Uptime" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-b from-white to-cyan-300 bg-clip-text text-transparent">{s.val}</div>
              <div className="text-slate-500 text-xs tracking-widest uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#01030a] to-transparent pointer-events-none" />
    </section>
  );
}
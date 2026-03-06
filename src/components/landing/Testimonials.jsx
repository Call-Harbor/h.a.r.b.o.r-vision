import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "H.A.R.B.O.R Vision has fundamentally changed how we manage our fleet. The real-time holographic overview gives our operators a level of situational awareness we've never had before. We've cut fuel costs by 12% in the first quarter alone.",
    author: "Captain Thomas Eriksen",
    title: "Fleet Operations Director",
    company: "Nordic Shipping Group",
    initials: "TE",
  },
  {
    quote:
      "The AI routing engine is extraordinary. It factors in weather, port congestion, and fuel economics simultaneously and delivers optimal routes in seconds. What used to take our team hours now happens automatically.",
    author: "Sarah Chen",
    title: "Head of Maritime Operations",
    company: "Pacific Freight Solutions",
    initials: "SC",
  },
  {
    quote:
      "Port scheduling has never been smoother. H.A.R.B.O.R Vision's predictive berth allocation has reduced our average waiting time by over 30%. The ROI was evident within the first two months of deployment.",
    author: "Marco Rossi",
    title: "Terminal Operations Manager",
    company: "Euro Port Authority",
    initials: "MR",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section className="relative py-36 px-6 bg-[#03060f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 bg-cyan-500/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase">
            Testimonials
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-black text-white tracking-tight">
            Trusted by operators
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
              who demand more.
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative p-10 sm:p-14 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-[#080d20]/80 to-[#03060f]/80"
            >
              {/* Top edge glow */}
              <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

              <Quote className="w-10 h-10 text-cyan-500/20 mb-6" />

              <p className="text-slate-200 text-lg sm:text-xl leading-relaxed font-light">
                "{testimonials[active].quote}"
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center text-[#03060f] font-black text-sm">
                  {testimonials[active].initials}
                </div>
                <div>
                  <div className="text-white font-bold">{testimonials[active].author}</div>
                  <div className="text-slate-500 text-sm">
                    {testimonials[active].title} · {testimonials[active].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-cyan-500/50 hover:text-cyan-300 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-cyan-400" : "w-2 bg-slate-700"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-cyan-500/50 hover:text-cyan-300 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
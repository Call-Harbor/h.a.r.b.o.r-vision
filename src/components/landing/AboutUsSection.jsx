import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, Target } from "lucide-react";

export default function AboutUsSection() {
  return (
    <section id="about" className="relative py-40 px-6 bg-[#01030a] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute -right-64 bottom-1/3 w-[800px] h-[800px] bg-teal-500/[0.04] blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mb-20"
        >
          <span className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase mb-6">
            <span className="w-8 h-px bg-cyan-400/60" />
            Our Story
            <span className="w-8 h-px bg-cyan-400/60" />
          </span>
          <h2 className="font-black text-white tracking-tighter leading-tight mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            We're fixing how{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-teal-200 bg-clip-text text-transparent">
              the world's fleets
            </span>{" "}
            make decisions.
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
            H.A.R.B.O.R was built because maritime is broken. Operators drown in data. Leadership flies blind. 
            Fuel budgets blow. Port calls miss their windows. And the best decisions are made with outdated information.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Lightbulb,
              title: "Built on Reality",
              desc: "Not theory. Every feature comes from talking to ship operators, port planners, and fleet managers who live this every day."
            },
            {
              icon: Users,
              title: "For the People",
              desc: "We design for the humans in the control room. Smart tech that doesn't require a PhD to understand."
            },
            {
              icon: Target,
              title: "Results Matter",
              desc: "We don't count features. We count fuel saved, schedules kept, and decisions made with confidence."
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-8 rounded-2xl border border-slate-800/70 bg-[#060b1a]/60 backdrop-blur-sm hover:border-cyan-500/25 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/5 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 rounded-2xl border border-slate-800/70 bg-gradient-to-r from-cyan-500/[0.05] to-teal-500/[0.05]"
        >
          <p className="text-slate-300 text-lg leading-relaxed">
            <span className="text-white font-semibold">We're a team of engineers, designers, and maritime experts</span> obsessed with turning complexity into clarity. 
            We believe that the shipping industry deserves smarter tools — tools that let operators focus on what they do best: 
            keeping ships safe, on schedule, and profitable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
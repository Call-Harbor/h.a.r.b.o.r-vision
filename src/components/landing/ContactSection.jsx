import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="relative py-36 px-6 bg-[#050915]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/[0.025] blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase">
            Get In Touch
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Let's talk about
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
              your fleet.
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-slate-300 text-lg font-light leading-relaxed mb-10">
              Whether you're managing a fleet of 5 vessels or 500, H.A.R.B.O.R Vision scales to your operation. Book a live demo, request a custom proposal, or simply reach out to learn more.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@harborvision.io" },
                { icon: Phone, label: "Phone", value: "+1 (800) HARBOR-1" },
                { icon: MapPin, label: "Headquarters", value: "Copenhagen, Denmark" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-widest">{item.label}</div>
                    <div className="text-slate-200 text-sm font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {sent ? (
              <div className="p-12 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-5">
                  <Send className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Message sent!</h3>
                <p className="text-slate-400 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 sm:p-10 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-[#080d20]/80 to-[#03060f]/80 space-y-5"
              >
                <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { key: "name", label: "Full Name", placeholder: "John Eriksen" },
                    { key: "company", label: "Company", placeholder: "Shipping Co." },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="block text-slate-400 text-xs uppercase tracking-widest mb-2">{f.label}</label>
                      <input
                        type="text"
                        placeholder={f.placeholder}
                        value={form[f.key]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        className="w-full bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-slate-400 text-xs uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your fleet and what you're looking for..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-[#03060f] font-black text-sm tracking-widest uppercase transition-all hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] hover:scale-[1.01]"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
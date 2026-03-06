import React from "react";
import { Waves, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#020510] border-t border-slate-800/50 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-16 mb-16">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.25)]">
                <Waves className="w-4 h-4 text-[#03060f]" />
              </div>
              <div>
                <span className="text-white font-black text-base">H.A.R.B.O.R</span>
                <span className="text-slate-500 font-light text-base"> Vision</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              AI-driven maritime operations platform. Transforming how the world's fleets navigate, decide and operate.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-300 font-bold text-xs tracking-[0.2em] uppercase mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a href="mailto:hello@harbor.vision" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                <Mail className="w-4 h-4 shrink-0" />
                hello@harbor.vision
              </a>
              <div className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <p>Danas Have 65, 2. 26</p>
                  <p>4200 Slagelse, Danmark</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <p>© 2026 H.A.R.B.O.R Vision. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
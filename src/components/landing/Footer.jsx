import React from "react";
import { Mail, MapPin } from "lucide-react";

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aac8b4ee3e86a32fa7d35f/f57aded0d_Harborlogo.png";

export default function Footer() {
  return (
    <footer className="relative bg-[#020510] border-t border-slate-800/50 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-16 mb-16">
          {/* Brand & Description */}
          <div>
            <img src={LOGO_URL} alt="H.A.R.B.O.R Vision" className="h-32 w-auto mb-8" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Real-time intelligence for maritime operations. Every decision, optimized.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-300 font-bold text-xs tracking-[0.2em] uppercase mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a href="mailto:ai@harborvision.dev" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                <Mail className="w-4 h-4 shrink-0" />
                ai@harborvision.dev
              </a>
              <div className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <p>Danas Have 65, 2. 26</p>
                  <p>4200 Slagelse, Danmark</p>
                  <p className="text-slate-500 text-xs mt-2">VAT: 42662215</p>
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
import React from "react";
import { Waves } from "lucide-react";

const links = {
  Platform: ["Fleet Management", "Route Planning", "Port Operations", "API"],
  Company: ["About Us", "Careers", "Press", "Contact"],
  Resources: ["Documentation", "Case Studies", "Blog", "Support"],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#020510] border-t border-slate-800/50 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.25)]">
                <Waves className="w-4 h-4 text-[#03060f]" />
              </div>
              <div>
                <span className="text-white font-black text-sm">H.A.R.B.O.R</span>
                <span className="text-slate-500 font-light text-sm"> Vision</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Next-generation AI-driven maritime operations. The bridge between
              classical shipping and autonomous, data-driven sailing.
            </p>
            <div className="mt-5 text-slate-600 text-xs leading-relaxed space-y-1">
              <p>Danas Have 65, 2. 26</p>
              <p>4200 Slagelse, Danmark</p>
              <p>CVR: 43492721</p>
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-slate-300 font-bold text-xs tracking-[0.2em] uppercase mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-500 text-sm hover:text-cyan-400 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © 2026 H.A.R.B.O.R Vision. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-600 text-xs hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 text-xs hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-600 text-xs hover:text-slate-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
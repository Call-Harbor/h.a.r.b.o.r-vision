import React from "react";
import { Waves } from "lucide-react";

const links = {
  Platform: ["Flådestyring", "Ruteplanlægning", "Havneoperationer", "API"],
  Virksomhed: ["Om os", "Karriere", "Presse", "Kontakt"],
  Ressourcer: ["Dokumentation", "Cases", "Blog", "Support"],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#050815] border-t border-slate-800/50 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center">
                <Waves className="w-4 h-4 text-[#060a1a]" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                H.A.R.B.O.R
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Næste generations AI‑drevne maritime operationer.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-slate-300 font-semibold text-xs tracking-[0.15em] uppercase mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-500 text-sm hover:text-cyan-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © 2026 H.A.R.B.O.R Vision. Alle rettigheder forbeholdes.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-600 text-xs hover:text-slate-400 transition-colors">Privatlivspolitik</a>
            <a href="#" className="text-slate-600 text-xs hover:text-slate-400 transition-colors">Vilkår</a>
            <a href="#" className="text-slate-600 text-xs hover:text-slate-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
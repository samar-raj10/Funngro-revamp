import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function TopBanner() {
  return (
    <div className="bg-[#051108] border-b border-[#14361e] text-xs py-2 px-4 text-emerald-200/80">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 justify-center">
          <Sparkles className="w-3.5 h-3.5 text-funngro-neon shrink-0 animate-pulse" />
          <p className="font-mono text-[11px] sm:text-xs tracking-tight">
            <span className="font-semibold text-emerald-100">As seen on Shark Tank India</span> · Season 2 · Investment from Amit Jain · Funngro is now backed by SucSEED.
          </p>
        </div>
        <a 
          href="#shark-tank"
          className="font-mono text-[10px] sm:text-xs tracking-wider uppercase text-funngro-neon hover:text-white flex items-center gap-1 transition-colors group shrink-0"
        >
          Read the inside story
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}

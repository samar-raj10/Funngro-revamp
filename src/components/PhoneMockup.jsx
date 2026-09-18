import React from 'react';
import { Smartphone, CheckCircle, Flame, Gift, Award, Zap, ShieldCheck } from 'lucide-react';

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[290px] sm:w-[310px] h-[580px] bg-[#040d07] rounded-[42px] p-3 border-4 border-[#1c482c] shadow-[0_0_50px_rgba(0,230,118,0.2)] font-sans select-none">
      
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-5 bg-[#040d07] rounded-b-xl z-30 flex items-center justify-center">
        <div className="w-12 h-1 bg-[#153420] rounded-full"></div>
      </div>

      {/* Screen Container */}
      <div className="w-full h-full bg-[#06140b] rounded-[34px] overflow-hidden flex flex-col justify-between pt-6 p-4 text-white text-xs border border-emerald-900/40">
        
        {/* App Top Header */}
        <div className="space-y-3">
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-sm font-bold text-funngro-neon">
                K
              </div>
              <div>
                <p className="font-bold text-sm text-white leading-tight">Kushal Kahar</p>
                <span className="text-[10px] text-emerald-300 bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-800">
                  🥉 Bronze Tier
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-[#0d2a17] px-2 py-1 rounded-full text-funngro-neon text-[11px] font-mono font-bold">
              <Zap className="w-3 h-3 fill-current" />
              <span>₹1,450</span>
            </div>
          </div>

          {/* Today's Tasks Horizontal */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-emerald-100 text-xs flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-orange-400" /> Today's Tasks
              </span>
              <span className="text-[10px] text-funngro-neon font-semibold">View all →</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {/* Task 1 */}
              <div className="bg-[#0b2214] border border-[#184628] rounded-xl p-2.5 space-y-1 hover:border-funngro-neon transition-colors">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded bg-emerald-600/30 flex items-center justify-center text-[10px] font-bold">🥷</div>
                  <span className="font-semibold text-[11px] text-white truncate">Shadow Ninja</span>
                </div>
                <div className="text-funngro-neon font-mono font-bold text-xs">₹120</div>
              </div>

              {/* Task 2 */}
              <div className="bg-[#0b2214] border border-[#184628] rounded-xl p-2.5 space-y-1 hover:border-funngro-neon transition-colors">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded bg-blue-600/30 flex items-center justify-center text-[10px] font-bold">🏦</div>
                  <span className="font-semibold text-[11px] text-white truncate">HDFC Bank</span>
                </div>
                <div className="text-funngro-neon font-mono font-bold text-xs">₹220</div>
              </div>
            </div>
          </div>

          {/* Featured Survey Banner */}
          <div className="bg-[#072112] border border-funngro-neon/50 rounded-xl p-3 space-y-1.5 shadow-sm">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono text-emerald-200 font-semibold uppercase tracking-wide bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-800">
                Featured Brand
              </span>
              <span className="font-mono text-funngro-neon font-bold text-xs">Earn ₹200</span>
            </div>
            <p className="font-bold text-xs text-white">Toluna Brand Survey</p>
            <p className="text-[10px] text-emerald-200">Complete 5 min product feedback survey</p>
          </div>

          {/* Explore Categories */}
          <div>
            <span className="font-bold text-emerald-100 text-[11px] block mb-2">Explore Tasks</span>
            <div className="grid grid-cols-4 gap-1.5 text-center text-[9px]">
              <div className="bg-[#0b2214] p-2 rounded-lg border border-emerald-900/40">
                <div className="text-sm">📝</div>
                <div className="text-emerald-100 mt-1 font-medium">Register</div>
                <div className="text-[8px] text-funngro-neon font-mono font-bold">50+</div>
              </div>
              <div className="bg-[#0b2214] p-2 rounded-lg border border-emerald-900/40">
                <div className="text-sm">🎮</div>
                <div className="text-emerald-100 mt-1 font-medium">Games</div>
                <div className="text-[8px] text-funngro-neon font-mono font-bold">50+</div>
              </div>
              <div className="bg-[#0b2214] p-2 rounded-lg border border-emerald-900/40">
                <div className="text-sm">💳</div>
                <div className="text-emerald-100 mt-1 font-medium">Fintech</div>
                <div className="text-[8px] text-funngro-neon font-mono font-bold">50+</div>
              </div>
              <div className="bg-[#0b2214] p-2 rounded-lg border border-emerald-900/40">
                <div className="text-sm">📋</div>
                <div className="text-emerald-100 mt-1 font-medium">Survey</div>
                <div className="text-[8px] text-funngro-neon font-mono font-bold">50+</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar inside app */}
        <div className="bg-[#091b0f] border border-emerald-900/40 rounded-xl p-2.5 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-funngro-neon" />
            <span className="font-semibold text-emerald-100">GroMoney Leaderboard</span>
          </div>
          <span className="text-funngro-neon text-xs font-bold">#4 Rank</span>
        </div>

      </div>
    </div>
  );
}

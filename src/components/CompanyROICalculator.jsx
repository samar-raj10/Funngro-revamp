import React, { useState } from 'react';
import { TrendingUp, Target, Users, Zap, CheckCircle2 } from 'lucide-react';

export default function CompanyROICalculator() {
  const [budget, setBudget] = useState(35000);
  const [goal, setGoal] = useState('content');

  // ROI estimation logic
  const estimatedReach = Math.round((budget * 12.5) / 1000) * 1000;
  const estimatedSubmissions = Math.round(budget / (goal === 'content' ? 350 : goal === 'app' ? 120 : 80));
  const creatorTalentCount = Math.min(250, Math.floor(estimatedSubmissions * 0.8));

  return (
    <div className="bg-[#091f11] border-2 border-emerald-800/60 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-left">
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-funngro-neon/10 rounded-full blur-3xl"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Input Settings */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 font-mono text-xs text-funngro-neon uppercase tracking-wider font-semibold">
            <TrendingUp className="w-3.5 h-3.5" /> INTERACTIVE CAMPAIGN ROI ESTIMATOR
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-white leading-tight">
            Estimate your brand deliverables <br />
            <span className="font-serif-italic text-funngro-neon">before spending a rupee.</span>
          </h3>

          {/* Goal Selector */}
          <div className="space-y-2">
            <label className="font-mono text-xs text-emerald-200 font-semibold block uppercase tracking-wider">
              1. Primary Campaign Objective
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setGoal('content')}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  goal === 'content'
                    ? 'bg-funngro-neon text-black font-bold shadow-neon-glow'
                    : 'bg-[#06140b] text-emerald-200 border border-emerald-900 hover:border-emerald-700'
                }`}
              >
                🎥 Content & Reels
              </button>
              <button
                onClick={() => setGoal('app')}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  goal === 'app'
                    ? 'bg-funngro-neon text-black font-bold shadow-neon-glow'
                    : 'bg-[#06140b] text-emerald-200 border border-emerald-900 hover:border-emerald-700'
                }`}
              >
                📱 App Installs & QA
              </button>
              <button
                onClick={() => setGoal('survey')}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  goal === 'survey'
                    ? 'bg-funngro-neon text-black font-bold shadow-neon-glow'
                    : 'bg-[#06140b] text-emerald-200 border border-emerald-900 hover:border-emerald-700'
                }`}
              >
                📊 Surveys & Feedback
              </button>
            </div>
          </div>

          {/* Budget Slider */}
          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center font-mono text-xs text-emerald-200">
              <span className="font-semibold uppercase tracking-wider">2. Campaign Budget</span>
              <span className="text-funngro-neon font-bold text-sm bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800">
                ₹{budget.toLocaleString('en-IN')}
              </span>
            </div>

            <input
              type="range"
              min="15000"
              max="200000"
              step="5000"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-2 bg-[#06140b] rounded-lg appearance-none cursor-pointer accent-funngro-neon"
            />
            <div className="flex justify-between text-[10px] font-mono text-emerald-300">
              <span>₹15,000 (Starter)</span>
              <span>₹50,000 (Growth)</span>
              <span>₹2,00,000+ (Scale)</span>
            </div>
          </div>

        </div>

        {/* Right Output Box */}
        <div className="lg:col-span-5 bg-[#06140b] border border-emerald-800/80 rounded-2xl p-6 text-center space-y-4 shadow-inner">
          
          <span className="font-mono text-xs text-emerald-300 font-semibold uppercase tracking-widest block">
            ESTIMATED CAMPAIGN DELIVERABLES
          </span>

          <div className="my-2">
            <div className="text-4xl font-serif-italic font-extrabold text-funngro-neon text-glow">
              {estimatedSubmissions.toLocaleString('en-IN')}
            </div>
            <div className="font-mono text-xs text-emerald-200 uppercase font-semibold mt-1">
              {goal === 'content' ? 'Verified Reels & Videos' : goal === 'app' ? 'Verified Installs & Reviews' : 'Completed Survey Hits'}
            </div>
          </div>

          <div className="pt-2 grid grid-cols-2 gap-3 text-left font-mono text-[11px] border-t border-emerald-900/60">
            <div className="bg-[#0b2214] p-2.5 rounded-lg border border-emerald-900/40">
              <span className="text-emerald-300 block text-[10px]">ESTIMATED GEN-Z REACH</span>
              <strong className="text-white text-sm">{estimatedReach.toLocaleString('en-IN')}+ Impressions</strong>
            </div>

            <div className="bg-[#0b2214] p-2.5 rounded-lg border border-emerald-900/40">
              <span className="text-emerald-300 block text-[10px]">VERIFIED TALENT MATCHE</span>
              <strong className="text-funngro-neon text-xs">{creatorTalentCount}+ Creators</strong>
            </div>
          </div>

          <a
            href="#contact-sales"
            className="w-full bg-funngro-neon hover:bg-[#00ffa3] text-black font-extrabold text-sm py-3 rounded-xl flex items-center justify-center gap-2 shadow-neon-glow transition-all mt-4"
          >
            Launch This Campaign →
          </a>

        </div>

      </div>
    </div>
  );
}

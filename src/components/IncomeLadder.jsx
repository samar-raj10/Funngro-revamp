import React from 'react';
import { Sparkles, TrendingUp, DollarSign } from 'lucide-react';

export default function IncomeLadder() {
  return (
    <section id="income-ladder" className="py-20 bg-[#06120a] border-t border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Grid Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-10">
          
          {/* Left Header */}
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-funngro-neon mb-3 font-semibold flex items-center gap-2">
              <span>•</span> INCOME LADDER <span>•</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-white leading-tight">
              Earn as you learn. <br />
              <span className="font-serif-italic text-funngro-neon">Grow your monthly potential.</span>
            </h2>
          </div>

          {/* Right Header */}
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-funngro-neon mb-3 font-semibold flex items-center gap-2">
              <span>•</span> WHAT YOU CAN DO <span>•</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-white leading-tight">
              Four kinds of work. <br />
              <span className="font-serif-italic text-funngro-neon">All from real brands.</span>
            </h2>
          </div>

        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Income Ladder Stages */}
          <div className="space-y-4">
            
            {/* Stage 01 */}
            <div className="bg-[#091b0f] border border-emerald-900/40 hover:border-emerald-700/60 rounded-2xl p-6 transition-all group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <span className="font-mono text-[11px] tracking-widest text-funngro-subtle uppercase block">
                    Stage 01 · Start
                  </span>
                  <h3 className="text-xl font-serif-heading font-bold text-white group-hover:text-funngro-neon transition-colors">
                    Your First Income
                  </h3>
                  <p className="text-xs text-emerald-100/70 max-w-md leading-relaxed">
                    Brand surveys, sampling, simple promotion tasks. Earn your first real income with zero investment.
                  </p>
                </div>
                <div className="text-2xl sm:text-3xl font-serif-italic font-extrabold text-funngro-neon shrink-0">
                  ₹1K–₹3K<span className="text-xs font-sans text-emerald-400 font-normal">/mo</span>
                </div>
              </div>
            </div>

            {/* Stage 02 (Popular Highlighted) */}
            <div className="bg-[#0b2415] border-2 border-funngro-neon/80 rounded-2xl p-6 shadow-neon-glow transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-funngro-neon text-black font-mono text-[9px] font-extrabold uppercase px-3 py-1 rounded-bl-lg">
                Popular
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <span className="font-mono text-[11px] tracking-widest text-funngro-neon font-bold uppercase block">
                    Stage 02 · Grow · Popular
                  </span>
                  <h3 className="text-xl font-serif-heading font-bold text-white group-hover:text-funngro-neon transition-colors">
                    Multiply & Influence
                  </h3>
                  <p className="text-xs text-emerald-100/80 max-w-md leading-relaxed">
                    Refer friends, build your network, create content. Your earnings multiply as your influence grows.
                  </p>
                </div>
                <div className="text-2xl sm:text-3xl font-serif-italic font-extrabold text-funngro-neon shrink-0">
                  ₹3K–₹7K<span className="text-xs font-sans text-emerald-400 font-normal">/mo</span>
                </div>
              </div>
            </div>

            {/* Stage 03 */}
            <div className="bg-[#091b0f] border border-emerald-900/40 hover:border-emerald-700/60 rounded-2xl p-6 transition-all group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <span className="font-mono text-[11px] tracking-widest text-funngro-subtle uppercase block">
                    Stage 03 · Build
                  </span>
                  <h3 className="text-xl font-serif-heading font-bold text-white group-hover:text-funngro-neon transition-colors">
                    Your Own Business
                  </h3>
                  <p className="text-xs text-emerald-100/70 max-w-md leading-relaxed">
                    Run brand promotions at scale, lead teams, manage campaigns. Build your own micro-business on the platform.
                  </p>
                </div>
                <div className="text-2xl sm:text-3xl font-serif-italic font-extrabold text-funngro-neon shrink-0">
                  ₹7K–₹15K+<span className="text-xs font-sans text-emerald-400 font-normal">/mo</span>
                </div>
              </div>
            </div>

            {/* Bottom Subtext */}
            <div className="font-mono text-[11px] text-funngro-subtle uppercase tracking-wider pt-2 flex items-center justify-between border-t border-emerald-900/30">
              <span>AVERAGE ACTIVE USER: <strong className="text-emerald-200">₹4,100/MO</strong></span>
              <span>TOP 5%: <strong className="text-funngro-neon">₹18,000+/MO</strong></span>
            </div>

          </div>

          {/* Right Column: Four Kinds of Work */}
          <div className="space-y-4">
            
            {/* Work 01 */}
            <div className="bg-[#091b0f] border border-emerald-900/40 hover:border-emerald-700/60 rounded-2xl p-5 transition-all">
              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-funngro-neon bg-emerald-950 px-2 py-1 rounded border border-emerald-800">
                  01
                </span>
                <div>
                  <h4 className="text-lg font-serif-heading font-bold text-white mb-1">
                    Content creation
                  </h4>
                  <p className="text-xs text-emerald-100/70 leading-relaxed">
                    Reels, posts, blogs, photos — for real brand campaigns. Your phone is the studio.
                  </p>
                </div>
              </div>
            </div>

            {/* Work 02 */}
            <div className="bg-[#091b0f] border border-emerald-900/40 hover:border-emerald-700/60 rounded-2xl p-5 transition-all">
              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-funngro-neon bg-emerald-950 px-2 py-1 rounded border border-emerald-800">
                  02
                </span>
                <div>
                  <h4 className="text-lg font-serif-heading font-bold text-white mb-1">
                    Brand promotion
                  </h4>
                  <p className="text-xs text-emerald-100/70 leading-relaxed">
                    Share, post, talk about brands you already follow. Get paid for genuine recommendations.
                  </p>
                </div>
              </div>
            </div>

            {/* Work 03 */}
            <div className="bg-[#091b0f] border border-emerald-900/40 hover:border-emerald-700/60 rounded-2xl p-5 transition-all">
              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-funngro-neon bg-emerald-950 px-2 py-1 rounded border border-emerald-800">
                  03
                </span>
                <div>
                  <h4 className="text-lg font-serif-heading font-bold text-white mb-1">
                    Referrals
                  </h4>
                  <p className="text-xs text-emerald-100/70 leading-relaxed">
                    Bring friends to brands they'll like. Earn when they sign up, transact, or stay.
                  </p>
                </div>
              </div>
            </div>

            {/* Work 04 Highlighted */}
            <div className="bg-[#091b0f] border-2 border-funngro-neon/60 rounded-2xl p-5 transition-all shadow-sm">
              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-black bg-funngro-neon px-2 py-1 rounded">
                  04
                </span>
                <div>
                  <h4 className="text-lg font-serif-heading font-bold text-white mb-1">
                    Micro tasks from brands
                  </h4>
                  <p className="text-xs text-emerald-100/80 leading-relaxed">
                    Sampling, surveys, app testing, product ideation. Small, fast, paid by the task.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

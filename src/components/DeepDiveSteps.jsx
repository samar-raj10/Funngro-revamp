import React, { useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function DeepDiveSteps() {
  const [showDeepDive, setShowDeepDive] = useState(false);

  return (
    <section id="how-it-works" className="py-24 bg-[#06120a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-funngro-neon font-semibold inline-flex items-center gap-2">
            <span>•</span> HOW IT WORKS <span>•</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            Get started in <span className="font-serif-italic text-funngro-neon text-glow">3 simple steps.</span>
          </h2>
          <p className="font-serif-italic text-emerald-200/80 text-base sm:text-lg">
            First payout in under twenty-four hours. The whole flow:
          </p>
        </div>

        {/* 3 Main Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 01 */}
          <div className="bg-[#091a0e] border border-emerald-900/50 hover:border-funngro-neon/50 rounded-2xl p-8 transition-all hover:-translate-y-1 group">
            <span className="font-mono text-xl font-extrabold text-funngro-neon block mb-6">
              01
            </span>
            <h3 className="text-2xl font-serif-heading font-bold text-white mb-3 group-hover:text-funngro-neon transition-colors">
              Download & sign up
            </h3>
            <p className="text-sm text-emerald-100/70 leading-relaxed font-sans">
              Get the Funngro app. OTP verification, two minutes. You're in.
            </p>
          </div>

          {/* Card 02 */}
          <div className="bg-[#091a0e] border border-emerald-900/50 hover:border-funngro-neon/50 rounded-2xl p-8 transition-all hover:-translate-y-1 group">
            <span className="font-mono text-xl font-extrabold text-funngro-neon block mb-6">
              02
            </span>
            <h3 className="text-2xl font-serif-heading font-bold text-white mb-3 group-hover:text-funngro-neon transition-colors">
              Pick a brand campaign
            </h3>
            <p className="text-sm text-emerald-100/70 leading-relaxed font-sans">
              Brand promotion, sampling, referrals, influencer briefs — from 5,000+ real brands. Pick what suits you.
            </p>
          </div>

          {/* Card 03 */}
          <div className="bg-[#091a0e] border border-emerald-900/50 hover:border-funngro-neon/50 rounded-2xl p-8 transition-all hover:-translate-y-1 group">
            <span className="font-mono text-xl font-extrabold text-funngro-neon block mb-6">
              03
            </span>
            <h3 className="text-2xl font-serif-heading font-bold text-white mb-3 group-hover:text-funngro-neon transition-colors">
              Get paid in UPI or bank
            </h3>
            <p className="text-sm text-emerald-100/70 leading-relaxed font-sans">
              Complete the campaign and receive instant payouts to UPI or bank transfer. Real money.
            </p>
          </div>

        </div>

        {/* Toggle Button */}
        <div className="text-center mb-16">
          <button
            onClick={() => setShowDeepDive(!showDeepDive)}
            className="inline-flex items-center gap-2 border border-funngro-neon text-funngro-neon hover:bg-funngro-neon hover:text-black font-mono text-xs px-6 py-3 rounded-full transition-all duration-300 shadow-neon-glow"
          >
            <span>{showDeepDive ? "Hide the 5-step deep dive ▲" : "See the 5-step deep dive ▸"}</span>
          </button>
        </div>

        {/* Expandable 5-Step Deep Dive Details */}
        {showDeepDive && (
          <div className="space-y-12 border-t border-emerald-900/40 pt-16 animate-fadeIn">
            
            {/* Step One Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#07190d] border border-emerald-900/40 rounded-3xl p-8">
              <div className="lg:col-span-2 text-center lg:text-left">
                <span className="font-serif-italic text-5xl text-funngro-neon font-bold block">01</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-funngro-subtle">Step One</span>
              </div>
              <div className="lg:col-span-6 space-y-2">
                <h4 className="text-2xl font-serif-heading font-bold text-white">Download the app.</h4>
                <p className="text-sm text-emerald-100/70 leading-relaxed">
                  Download Funngro from the Google Play Store or the Apple App Store. Sign up with OTP in seconds and start earning without investment.
                </p>
              </div>
              <div className="lg:col-span-4 bg-[#0c2214] border border-emerald-900/60 rounded-2xl p-5 font-mono text-xs space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-funngro-subtle block mb-2 font-bold">
                  EVERYTHING YOU NEED TO START YOUR ONLINE JOURNEY
                </span>
                <div className="flex items-center gap-2 text-emerald-200">
                  <span className="text-funngro-neon">―</span> A smartphone or laptop with internet
                </div>
                <div className="flex items-center gap-2 text-emerald-200">
                  <span className="text-funngro-neon">―</span> A UPI ID to receive payouts
                </div>
                <div className="flex items-center gap-2 text-emerald-200">
                  <span className="text-funngro-neon">―</span> Two minutes to sign up
                </div>
              </div>
            </div>

            {/* Step Two Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#07190d] border border-emerald-900/40 rounded-3xl p-8">
              <div className="lg:col-span-2 text-center lg:text-left">
                <span className="font-serif-italic text-5xl text-funngro-neon font-bold block">02</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-funngro-subtle">Step Two</span>
              </div>
              <div className="lg:col-span-6 space-y-2">
                <h4 className="text-2xl font-serif-heading font-bold text-white">Pick a brand campaign.</h4>
                <p className="text-sm text-emerald-100/70 leading-relaxed">
                  With over 5,000 live campaigns, Funngro offers exciting influencer opportunities, referrals, surveys, brand promotion and content tasks. Pick what suits you best and start your online earning journey with real brands.
                </p>
              </div>
              <div className="lg:col-span-4 bg-[#0c2214] border border-emerald-900/60 rounded-2xl p-5 font-mono text-xs space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-funngro-subtle block mb-2 font-bold">
                  WHAT YOU NEED
                </span>
                <div className="flex items-center justify-between text-emerald-200">
                  <span>― Brand promotion</span>
                  <span className="text-funngro-neon">₹200–₹1,500</span>
                </div>
                <div className="flex items-center justify-between text-emerald-200">
                  <span>― Sampling</span>
                  <span className="text-funngro-neon">₹100–₹800</span>
                </div>
                <div className="flex items-center justify-between text-emerald-200">
                  <span>― Referrals</span>
                  <span className="text-funngro-neon">₹300–₹2,000</span>
                </div>
                <div className="flex items-center justify-between text-emerald-200">
                  <span>― Influencer briefs</span>
                  <span className="text-funngro-neon">₹500–₹3,000</span>
                </div>
              </div>
            </div>

            {/* Step Three Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#07190d] border border-emerald-900/40 rounded-3xl p-8">
              <div className="lg:col-span-2 text-center lg:text-left">
                <span className="font-serif-italic text-5xl text-funngro-neon font-bold block">03</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-funngro-subtle">Step Three</span>
              </div>
              <div className="lg:col-span-6 space-y-2">
                <h4 className="text-2xl font-serif-heading font-bold text-white">Complete your brand task and start earning.</h4>
                <p className="text-sm text-emerald-100/70 leading-relaxed">
                  Every campaign on Funngro comes with clear job requirements, making online work from home simple and stress-free. Complete your brand task, upload proof, and receive your payout directly to UPI or bank account.
                </p>
              </div>
              <div className="lg:col-span-4 bg-[#0c2214] border border-emerald-900/60 rounded-2xl p-5 font-mono text-xs space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-funngro-subtle block mb-2 font-bold">
                  WHAT YOU NEED
                </span>
                <div className="flex items-center gap-2 text-emerald-200">
                  <span className="text-funngro-neon">―</span> Complete the task as instructed
                </div>
                <div className="flex items-center gap-2 text-emerald-200">
                  <span className="text-funngro-neon">―</span> Upload proof (photo, screenshot or link)
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

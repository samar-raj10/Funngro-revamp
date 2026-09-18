import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import LivePayoutWidget from '../components/LivePayoutWidget';
import PhoneMockup from '../components/PhoneMockup';
import DeepDiveSteps from '../components/DeepDiveSteps';
import TeenCalculator from '../components/TeenCalculator';
import IncomeLadder from '../components/IncomeLadder';
import FAQAccordion from '../components/FAQAccordion';
import { ArrowRight, ShieldCheck, Zap, Award } from 'lucide-react';

export default function TeenPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EarnGen Teen Earning Platform",
    "url": "https://www.earngen.com/",
    "description": "Get paid by India's biggest brands with flexible remote opportunities.",
    "publisher": {
      "@type": "Organization",
      "name": "EarnGen"
    }
  };

  return (
    <div className="min-h-screen bg-[#06120a] text-emerald-50 selection:bg-funngro-neon selection:text-black">
      <SEO 
        title="Get Paid by India's Biggest Brands | Remote Opportunities for Youth"
        description="India's youth · India's brands. Get paid in UPI or bank transfer for remote work, content creation, social media promotion, and micro tasks."
        schemaData={schemaData}
      />
      
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero */}
      <section className="relative pt-12 pb-24 overflow-hidden bg-[#06120a] bg-radial-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0b2214] border border-[#1b482b] font-mono text-xs text-funngro-neon tracking-widest uppercase font-semibold">
                <span>•</span> INDIA'S YOUTH <span>•</span> INDIA'S BRANDS <span>•</span> 2026 <span>•</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-heading font-extrabold text-white leading-[1.08] tracking-tight">
                Get Paid by India's <br className="hidden sm:inline" />
                biggest brands with <br />
                <span className="font-serif-italic text-funngro-neon text-glow font-normal block sm:inline">
                  flexible remote
                </span>{" "}
                <span className="font-serif-italic text-funngro-neon text-glow font-normal">
                  opportunities.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-emerald-100 max-w-xl font-sans leading-relaxed">
                Join 70 Lakh+ young Indians earning real income with zero investment. Complete simple brand tasks, reels creation, and reviews directly from your phone.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href="#download-app"
                  className="bg-funngro-neon hover:bg-[#00ffa3] text-black font-extrabold text-base px-8 py-4 rounded-full flex items-center justify-center gap-3 shadow-neon-glow hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Download App & Start Earning
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#how-it-works"
                  className="border border-emerald-800 hover:border-funngro-neon text-emerald-200 hover:text-white font-mono text-xs px-6 py-4 rounded-full flex items-center justify-center gap-2 transition-all bg-[#091b0f]"
                >
                  Explore How It Works →
                </a>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-emerald-200 font-mono">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-funngro-neon" />
                  <span className="font-medium">100% Safe & verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-funngro-neon" />
                  <span className="font-medium">Instant UPI payouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-funngro-neon" />
                  <span className="font-medium">5,000+ Active Brands</span>
                </div>
              </div>

            </div>

            {/* Right Column Graphics */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              <div className="absolute w-72 h-72 bg-funngro-neon/15 rounded-full blur-3xl -z-10"></div>
              
              <div className="lg:absolute lg:-left-12 lg:top-8 z-20 mb-6 lg:mb-0 transform lg:-rotate-2 hover:rotate-0 transition-transform">
                <LivePayoutWidget />
              </div>

              <div className="z-10 transform hover:scale-[1.01] transition-transform">
                <PhoneMockup />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. How it works */}
      <DeepDiveSteps />

      {/* Interactive Teen Earning Calculator */}
      <section id="calculator" className="py-20 bg-[#06120a] border-t border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TeenCalculator />
        </div>
      </section>

      {/* 4. What you can do & 5. Income / growth */}
      <IncomeLadder />

      {/* 6. Benefits */}
      <section id="benefits" className="py-20 bg-[#07190d] border-t border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-funngro-neon font-semibold inline-flex items-center gap-2">
              <span>•</span> WHY TEENS CHOOSE EARNGEN <span>•</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white">
              Built for your growth, <br />
              <span className="font-serif-italic text-funngro-neon">designed for your financial independence.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            <div className="bg-[#091f11] border border-emerald-900/40 rounded-2xl p-8 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-funngro-neon/10 border border-funngro-neon/30 flex items-center justify-center text-funngro-neon font-bold text-xl">
                💰
              </div>
              <h3 className="text-xl font-serif-heading font-bold text-white">Zero Capital Required</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Start earning without any upfront fees or registration charges. Everything you need is on your smartphone.
              </p>
            </div>

            <div className="bg-[#091f11] border border-emerald-900/40 rounded-2xl p-8 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-funngro-neon/10 border border-funngro-neon/30 flex items-center justify-center text-funngro-neon font-bold text-xl">
                📜
              </div>
              <h3 className="text-xl font-serif-heading font-bold text-white">Official Brand Certificates</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Build a real work portfolio with verified certificates signed by top companies to boost your college applications.
              </p>
            </div>

            <div className="bg-[#091f11] border border-emerald-900/40 rounded-2xl p-8 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-funngro-neon/10 border border-funngro-neon/30 flex items-center justify-center text-funngro-neon font-bold text-xl">
                ⚡
              </div>
              <h3 className="text-xl font-serif-heading font-bold text-white">Instant UPI Withdrawals</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                No waiting for monthly paychecks. Transfer your approved earnings directly to your UPI ID in under 24 hours.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. FAQ */}
      <FAQAccordion type="teen" />

      {/* 8. CTA */}
      <section id="download-app" className="py-20 bg-[#05140b] bg-radial-gradient-emerald border-t border-emerald-900/40 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-funngro-neon font-bold">
            • START YOUR ONLINE EARNING JOURNEY •
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif-heading font-bold text-white leading-tight">
            Ready to work with India's <br />
            <span className="font-serif-italic text-funngro-neon text-glow">biggest brands?</span>
          </h2>
          <p className="text-emerald-100 text-base max-w-xl mx-auto font-sans">
            Download the app now on Android or iOS and unlock 5,000+ live campaigns in under 2 minutes.
          </p>
          <div className="pt-4 flex justify-center">
            <a
              href="#"
              className="bg-funngro-neon hover:bg-[#00ffa3] text-black font-extrabold text-base px-10 py-4 rounded-full flex items-center gap-3 shadow-neon-glow-lg hover:scale-105 active:scale-95 transition-all"
            >
              Get Started on EarnGen App
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}

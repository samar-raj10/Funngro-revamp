import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import CompanyROICalculator from '../components/CompanyROICalculator';
import FAQAccordion from '../components/FAQAccordion';
import { 
  Building2, Target, Rocket, DollarSign, ShieldCheck, 
  CheckCircle2, ArrowRight
} from 'lucide-react';

const topBrands = [
  { name: "HDFC Bank", category: "Fintech" },
  { name: "Coca-Cola", category: "FMCG" },
  { name: "Swiggy", category: "Foodtech" },
  { name: "Paytm", category: "Payments" },
  { name: "Noise", category: "Electronics" },
  { name: "boAt", category: "Audio" },
  { name: "Cult.fit", category: "Fitness" },
  { name: "Unacademy", category: "Edtech" }
];

const solutions = [
  {
    title: "Content Creation",
    desc: "Authentic Gen-Z reels, TikToks, shorts, and unboxing videos crafted by native digital creators.",
    icon: "🎥",
    metrics: "10x Higher Engagement"
  },
  {
    title: "Social Media Buzz",
    desc: "Amplify brand campaigns across Instagram, YouTube, and Snapchat through organic micro-influencers.",
    icon: "🔥",
    metrics: "Viral Reach at Scale"
  },
  {
    title: "App Reviews & QA Testing",
    desc: "Get real user feedback, bug reporting, and store reviews from tech-savvy young demographics.",
    icon: "📱",
    metrics: "4.8+ Rating Impact"
  },
  {
    title: "Surveys & Market Research",
    desc: "Gather fast, unbiased consumer insights directly from youth across Tier 1, 2, and 3 cities.",
    icon: "📊",
    metrics: "1,000+ Survey Hits in 24h"
  },
  {
    title: "Campus Ambassador Programs",
    desc: "Activate college and school student leaders to drive offline & online word-of-mouth adoption.",
    icon: "🎓",
    metrics: "500+ Campuses Covered"
  },
  {
    title: "User Acquisition & Referrals",
    desc: "Drive quality sign-ups, transactions, and app installs with performance-backed referral tasks.",
    icon: "🚀",
    metrics: "Pay Only On Verified Action"
  }
];

export default function CompanyPage() {
  const [formData, setFormData] = useState({ name: '', email: '', brand: '', budget: '₹25,000 - ₹50,000' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EarnGen for Brands",
    "url": "https://www.earngen.com/company",
    "description": "Hire top 100k+ Teen Freelancers and Content Creators for your brand campaigns.",
    "sameAs": ["https://linkedin.com/company/earngen"]
  };

  return (
    <div className="min-h-screen bg-[#06120a] text-emerald-50 selection:bg-funngro-neon selection:text-black">
      <SEO 
        title="For Brands | Hire 100,000+ Gen-Z Teen Freelancers & Creators"
        description="Accelerate your brand with India's largest network of verified teen talent. Launch micro-campaigns, content creation, app reviews, and surveys."
        canonical="https://www.earngen.com/company"
        schemaData={schemaData}
      />

      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero */}
      <section className="relative pt-16 pb-24 overflow-hidden bg-[#06120a] bg-radial-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0b2214] border border-[#1b482b] font-mono text-xs text-funngro-neon tracking-widest uppercase font-semibold">
                <Building2 className="w-3.5 h-3.5" /> FOR ENTERPRISES & GROWING BRANDS
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-heading font-extrabold text-white leading-[1.08] tracking-tight">
                Hire top <span className="font-serif-italic text-funngro-neon text-glow font-normal">100k+ Teen</span> <br />
                freelancers & creator <br />
                <span className="font-serif-italic text-funngro-neon text-glow font-normal">talent.</span>
              </h1>

              <p className="text-base sm:text-lg text-emerald-100 max-w-xl font-sans leading-relaxed">
                Connect with India's most energetic youth demographic. Execute high-ROI marketing campaigns, content creation, sampling, and market feedback with speed.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href="#contact-sales"
                  className="bg-funngro-neon hover:bg-[#00ffa3] text-black font-extrabold text-base px-8 py-4 rounded-full flex items-center justify-center gap-3 shadow-neon-glow hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Launch a Campaign
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#roi-calculator"
                  className="border border-emerald-800 hover:border-funngro-neon text-emerald-200 hover:text-white font-mono text-xs px-6 py-4 rounded-full flex items-center justify-center gap-2 transition-all bg-[#091b0f]"
                >
                  Calculate Campaign ROI →
                </a>
              </div>

              {/* Quick Stats Banner */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-emerald-900/40 text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-serif-italic font-bold text-funngro-neon">5,000+</div>
                  <div className="font-mono text-[10px] sm:text-xs text-emerald-200 uppercase font-semibold">Partner Brands</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif-italic font-bold text-funngro-neon">70L+</div>
                  <div className="font-mono text-[10px] sm:text-xs text-emerald-200 uppercase font-semibold">Gen-Z Talent</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif-italic font-bold text-funngro-neon">3.5M+</div>
                  <div className="font-mono text-[10px] sm:text-xs text-emerald-200 uppercase font-semibold">Tasks Delivered</div>
                </div>
              </div>

            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-5 bg-[#091f11] border-2 border-emerald-800/60 rounded-3xl p-8 shadow-2xl relative">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-emerald-900/50">
                  <span className="font-mono text-xs uppercase tracking-widest text-funngro-neon font-bold">
                    🚀 Contact Sales
                  </span>
                  <span className="font-mono text-[10px] text-emerald-200">Response in 2 Hours</span>
                </div>

                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-funngro-neon/20 border border-funngro-neon text-funngro-neon flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif-heading font-bold text-white">Campaign Request Received!</h3>
                    <p className="text-xs text-emerald-100">Our enterprise brand team will reach out with a custom campaign proposal within 2 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="font-mono text-[11px] text-emerald-200 font-semibold block mb-1">Company / Brand Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Swiggy, Nykaa, HDFC"
                        value={formData.brand}
                        onChange={(e) => setFormData({...formData, brand: e.target.value})}
                        className="w-full bg-[#06140b] border border-emerald-900 focus:border-funngro-neon rounded-xl p-3 text-sm text-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[11px] text-emerald-200 font-semibold block mb-1">Work Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-[#06140b] border border-emerald-900 focus:border-funngro-neon rounded-xl p-3 text-sm text-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[11px] text-emerald-200 font-semibold block mb-1">Estimated Campaign Budget</label>
                      <select 
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="w-full bg-[#06140b] border border-emerald-900 focus:border-funngro-neon rounded-xl p-3 text-sm text-white focus:outline-none font-sans"
                      >
                        <option>₹10,000 - ₹25,000</option>
                        <option>₹25,000 - ₹50,000</option>
                        <option>₹50,000 - ₹2,00,000</option>
                        <option>₹2,00,000+</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-funngro-neon hover:bg-[#00ffa3] text-black font-extrabold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-neon-glow transition-all mt-2"
                    >
                      Get Campaign Proposal →
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Brand Trust / Statistics */}
      <section id="brand-trust" className="py-16 bg-[#040d07] border-y border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-300 font-semibold">
            TRUSTED BY 5,000+ LEADING BRANDS ACROSS INDIA
          </span>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {topBrands.map((brand, i) => (
              <div 
                key={i} 
                className="bg-[#081b0e] border border-emerald-900/40 rounded-xl p-4 flex flex-col items-center justify-center hover:border-funngro-neon/40 transition-colors"
              >
                <span className="font-serif-heading font-bold text-lg text-white">{brand.name}</span>
                <span className="font-mono text-[10px] text-funngro-neon font-semibold">{brand.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Funngro / Why Us */}
      <section id="why-us" className="py-24 bg-[#06120a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-funngro-neon font-semibold inline-flex items-center gap-2">
              <span>•</span> WHY US <span>•</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white">
              Why top brands rely on <br />
              <span className="font-serif-italic text-funngro-neon">Gen-Z power.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            <div className="bg-[#081c0f] border border-emerald-900/40 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-funngro-neon/10 border border-funngro-neon/30 flex items-center justify-center text-funngro-neon">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif-heading font-bold text-white">Hyper-Targeted Reach</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Filter creators and freelancers by city tier, age bracket, campus, and specialized skills.
              </p>
            </div>

            <div className="bg-[#081c0f] border border-emerald-900/40 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-funngro-neon/10 border border-funngro-neon/30 flex items-center justify-center text-funngro-neon">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif-heading font-bold text-white">24-Hour Execution</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Go from brief to live submissions in under 24 hours with our automated task dispatch system.
              </p>
            </div>

            <div className="bg-[#081c0f] border border-emerald-900/40 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-funngro-neon/10 border border-funngro-neon/30 flex items-center justify-center text-funngro-neon">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif-heading font-bold text-white">100% Pay-on-Performance</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Only pay for verified, approved task proofs. Zero hidden setup fees or retainer costs.
              </p>
            </div>

            <div className="bg-[#081c0f] border border-emerald-900/40 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-funngro-neon/10 border border-funngro-neon/30 flex items-center justify-center text-funngro-neon">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif-heading font-bold text-white">Managed Compliance</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                We handle creator contracts, parental approvals, and automated UPI payouts for full peace of mind.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Campaign Solutions */}
      <section id="campaign-solutions" className="py-24 bg-[#071a0e] border-t border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-funngro-neon font-semibold inline-flex items-center gap-2">
              <span>•</span> CAMPAIGN SOLUTIONS <span>•</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white">
              End-to-End Solutions for <br />
              <span className="font-serif-italic text-funngro-neon">Every Marketing Goal.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {solutions.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#092212] border border-emerald-900/50 hover:border-funngro-neon/50 rounded-2xl p-8 transition-all hover:-translate-y-1 group space-y-4"
              >
                <div className="flex justify-between items-start">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="font-mono text-[10px] text-funngro-neon bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 font-semibold">
                    {item.metrics}
                  </span>
                </div>

                <h3 className="text-2xl font-serif-heading font-bold text-white group-hover:text-funngro-neon transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-emerald-100 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. How it works for Companies */}
      <section id="how-it-works-company" className="py-24 bg-[#06120a] border-t border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-funngro-neon font-semibold inline-flex items-center gap-2">
              <span>•</span> HOW IT WORKS FOR BRANDS <span>•</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white">
              4 Steps to Launching <span className="font-serif-italic text-funngro-neon">Your Campaign.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            
            <div className="bg-[#081c0f] border border-emerald-900/40 rounded-2xl p-6 space-y-3">
              <span className="font-mono text-xl font-bold text-funngro-neon">01</span>
              <h3 className="text-xl font-serif-heading font-bold text-white">Submit Campaign Brief</h3>
              <p className="text-xs text-emerald-100">Define task requirements, target audience, and set your budget.</p>
            </div>

            <div className="bg-[#081c0f] border border-emerald-900/40 rounded-2xl p-6 space-y-3">
              <span className="font-mono text-xl font-bold text-funngro-neon">02</span>
              <h3 className="text-xl font-serif-heading font-bold text-white">Talent Match & Assignment</h3>
              <p className="text-xs text-emerald-100">Our system matches and dispatches your brief to verified creators.</p>
            </div>

            <div className="bg-[#081c0f] border border-emerald-900/40 rounded-2xl p-6 space-y-3">
              <span className="font-mono text-xl font-bold text-funngro-neon">03</span>
              <h3 className="text-xl font-serif-heading font-bold text-white">Proof Review & Audit</h3>
              <p className="text-xs text-emerald-100">Review submitted screenshots, links, and engagement metrics live.</p>
            </div>

            <div className="bg-[#081c0f] border border-emerald-900/40 rounded-2xl p-6 space-y-3">
              <span className="font-mono text-xl font-bold text-funngro-neon">04</span>
              <h3 className="text-xl font-serif-heading font-bold text-white">Approve & Pay</h3>
              <p className="text-xs text-emerald-100">Pay only for verified task approvals with zero administrative hassle.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Benefits */}
      <section id="benefits-company" className="py-20 bg-[#07190d] border-t border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-funngro-neon font-semibold inline-flex items-center gap-2">
              <span>•</span> COMPANY BENEFITS <span>•</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white">
              Unmatched Value for <br />
              <span className="font-serif-italic text-funngro-neon">Enterprise & Growing Brands.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-[#091f11] border border-emerald-900/40 rounded-2xl p-8 space-y-3">
              <h3 className="text-xl font-serif-heading font-bold text-white">On-Demand Scale</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Activate 10 or 10,000 creators instantly without managing individual vendor contracts or agency retainers.
              </p>
            </div>

            <div className="bg-[#091f11] border border-emerald-900/40 rounded-2xl p-8 space-y-3">
              <h3 className="text-xl font-serif-heading font-bold text-white">High Organic ROI</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Gen-Z creators produce authentic word-of-mouth content that outperforms traditional paid ad banners by up to 4x.
              </p>
            </div>

            <div className="bg-[#091f11] border border-emerald-900/40 rounded-2xl p-8 space-y-3">
              <h3 className="text-xl font-serif-heading font-bold text-white">Full Compliance</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Every task submission undergoes verification and automated audit prior to releasing creator payouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator */}
      <section id="roi-calculator" className="py-20 bg-[#06120a] border-t border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CompanyROICalculator />
        </div>
      </section>

      {/* 8. CTA */}
      <section id="contact-sales" className="py-20 bg-[#05140b] border-t border-emerald-900/40 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-funngro-neon font-bold">
            • GROW YOUR BRAND WITH GEN-Z TALENT •
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif-heading font-bold text-white leading-tight">
            Ready to scale your next <br />
            <span className="font-serif-italic text-funngro-neon text-glow">viral campaign?</span>
          </h2>
          <p className="text-emerald-100 text-base max-w-xl mx-auto font-sans">
            Talk to our brand strategist team today and receive a custom campaign strategy tailored to your business goals.
          </p>
          <div className="pt-4 flex justify-center">
            <a
              href="#contact-sales"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-funngro-neon hover:bg-[#00ffa3] text-black font-extrabold text-base px-10 py-4 rounded-full flex items-center gap-3 shadow-neon-glow-lg hover:scale-105 transition-all"
            >
              Book Brand Strategy Call
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

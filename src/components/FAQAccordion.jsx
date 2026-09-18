import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

const teenFaqs = [
  {
    q: "Is Funngro safe for teenagers under 18?",
    a: "Yes! Funngro is 100% safe and legal for teens aged 13-19. We strictly comply with Indian labor guidelines for youth freelancers. All projects are curated from verified top brands, and parents can oversee earnings."
  },
  {
    q: "How and when do I get paid?",
    a: "You get paid directly via UPI (Google Pay, PhonePe, Paytm) or direct bank transfer immediately after your task proof is reviewed and approved by the brand. Payouts are usually processed within 24 hours."
  },
  {
    q: "Do I need any past work experience or investment?",
    a: "No investment or prior experience required! Funngro is designed to help you earn your first real income while building actual portfolio skills. We provide simple guidance for every campaign."
  },
  {
    q: "What types of tasks can I complete?",
    a: "You can choose from social media reels creation, product testing, survey feedback, app reviews, brand recommendations, campus ambassador initiatives, and graphic design."
  },
  {
    q: "How much money can I earn per month?",
    a: "Beginners typically earn ₹1,000–₹3,000/month. Active teen creators who complete multiple influencer and referral campaigns earn ₹7,000–₹15,000+/month."
  }
];

const companyFaqs = [
  {
    q: "How does Funngro help companies scale campaigns?",
    a: "Funngro connects your brand with a vibrant network of over 100,000+ verified Gen-Z teen freelancers and content creators across India. You can launch micro-campaigns, app testing, social buzz, and market surveys in minutes."
  },
  {
    q: "How are task submissions verified?",
    a: "Our automated dashboard + manual curation team verifies screenshot proofs, engagement analytics, link submissions, and survey responses before any payout is released to creators."
  },
  {
    q: "What is the minimum budget required to start a campaign?",
    a: "You can start brand campaigns with budgets as low as ₹5,000. Pay only for successful, approved submissions with zero fixed overhead."
  },
  {
    q: "Can we target specific age groups, cities, or interests?",
    a: "Yes! Filter talent by city (Tier 1, Tier 2, Tier 3), age (13-17, 18-22), language, college campus, or specific interest clusters."
  }
];

export default function FAQAccordion({ type = "teen" }) {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = type === "company" ? companyFaqs : teenFaqs;

  return (
    <section id="faq" className="py-20 bg-[#06120a] border-t border-emerald-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 space-y-3">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-funngro-neon font-semibold inline-flex items-center gap-2">
            <span>•</span> FREQUENTLY ASKED QUESTIONS <span>•</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-white">
            Got questions? <span className="font-serif-italic text-funngro-neon">We've got answers.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#091f11] border-funngro-neon/50 shadow-neon-glow' 
                    : 'bg-[#07190d] border-emerald-900/40 hover:border-emerald-700/60'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif-heading font-semibold text-lg text-white">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-emerald-800 flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-funngro-neon text-black border-funngro-neon' : 'text-emerald-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-emerald-100/80 leading-relaxed font-sans border-t border-emerald-900/30">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

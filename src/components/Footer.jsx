import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Star, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#040d07] border-t border-[#102b17] text-emerald-100 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#102b17]">
          
          {/* Left Brand Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-funngro-neon p-0.5 shadow-neon-glow flex items-center justify-center">
                <div className="w-full h-full bg-[#06120a] rounded-[6px] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-funngro-neon" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                EarnGen
              </span>
            </Link>

            <p className="font-serif-italic text-sm text-emerald-300 leading-relaxed max-w-md">
              Connecting India's youth with top brand campaigns. Earn real income in UPI or bank transfer for remote work.
            </p>

            {/* Social SVGs */}
            <div className="flex items-center gap-3 pt-2 text-emerald-400">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#0a1e12] border border-[#163c22] flex items-center justify-center hover:text-funngro-neon hover:border-funngro-neon transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#0a1e12] border border-[#163c22] flex items-center justify-center hover:text-funngro-neon hover:border-funngro-neon transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#0a1e12] border border-[#163c22] flex items-center justify-center hover:text-funngro-neon hover:border-funngro-neon transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#0a1e12] border border-[#163c22] flex items-center justify-center hover:text-funngro-neon hover:border-funngro-neon transition-colors" aria-label="WhatsApp">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Clean Columns (7 cols) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-7 gap-8">
            
            {/* TEENS */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-funngro-neon mb-4 font-bold">For Teens</h3>
              <ul className="space-y-2.5 text-xs text-emerald-200">
                <li><a href="#how-it-works" className="hover:text-funngro-neon transition-colors">How it works</a></li>
                <li><a href="#what-you-can-do" className="hover:text-funngro-neon transition-colors">What you can do</a></li>
                <li><a href="#income-ladder" className="hover:text-funngro-neon transition-colors">Income / growth</a></li>
                <li><a href="#benefits" className="hover:text-funngro-neon transition-colors">Benefits</a></li>
                <li><a href="#faq" className="hover:text-funngro-neon transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* COMPANIES */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-funngro-neon mb-4 font-bold">For Companies</h3>
              <ul className="space-y-2.5 text-xs text-emerald-200">
                <li><Link to="/company" className="hover:text-funngro-neon transition-colors">Why us</Link></li>
                <li><a href="#campaign-solutions" className="hover:text-funngro-neon transition-colors">Campaign solutions</a></li>
                <li><a href="#how-it-works-company" className="hover:text-funngro-neon transition-colors">How it works</a></li>
                <li><a href="#benefits-company" className="hover:text-funngro-neon transition-colors">Benefits</a></li>
                <li><a href="#contact-sales" className="hover:text-funngro-neon transition-colors">Contact sales</a></li>
              </ul>
            </div>

            {/* PLATFORM TRUST */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-mono text-xs uppercase tracking-widest text-funngro-neon mb-4 font-bold">Platform Safety</h3>
              <ul className="space-y-2.5 text-xs text-emerald-200">
                <li><span className="text-emerald-300">✓ 100% Verified Brands</span></li>
                <li><span className="text-emerald-300">✓ Instant UPI Payouts</span></li>
                <li><span className="text-emerald-300">✓ Youth Safety Compliant</span></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Trust & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] text-emerald-300">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 flex items-center font-bold">
              <Star className="w-3.5 h-3.5 fill-current inline mr-1" /> 4.8 / 5 USER RATING
            </span>
            <span>·</span>
            <span className="text-emerald-100 font-semibold">70 LAKH+ YOUNG INDIANS</span>
          </div>

          <div className="text-center md:text-right text-emerald-300 font-semibold">
            © 2026 EARNGEN PLATFORM · ALL RIGHTS RESERVED
          </div>
        </div>

      </div>
    </footer>
  );
}

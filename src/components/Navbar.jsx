import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, UserCheck, Building2, Zap } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isCompany = location.pathname === '/company';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#06120a]/95 backdrop-blur-md border-b border-[#14361e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-funngro-neon p-0.5 shadow-neon-glow flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#06120a] rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-funngro-neon" />
              </div>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white font-sans flex items-center">
              EarnGen
              <span className="inline-block w-2 h-2 rounded-full bg-funngro-neon ml-1.5 animate-pulse"></span>
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-emerald-100">
            {isCompany ? (
              <>
                <a href="#brand-trust" className="hover:text-funngro-neon transition-colors">Brand Stats</a>
                <a href="#why-us" className="hover:text-funngro-neon transition-colors">Why Us</a>
                <a href="#campaign-solutions" className="hover:text-funngro-neon transition-colors">Solutions</a>
                <a href="#how-it-works-company" className="hover:text-funngro-neon transition-colors">How It Works</a>
                <a href="#benefits-company" className="hover:text-funngro-neon transition-colors">Benefits</a>
              </>
            ) : (
              <>
                <a href="#how-it-works" className="hover:text-funngro-neon transition-colors">How it works</a>
                <a href="#what-you-can-do" className="hover:text-funngro-neon transition-colors">What you can do</a>
                <a href="#income-ladder" className="hover:text-funngro-neon transition-colors">Income / growth</a>
                <a href="#benefits" className="hover:text-funngro-neon transition-colors">Benefits</a>
                <a href="#faq" className="hover:text-funngro-neon transition-colors">FAQ</a>
              </>
            )}
          </nav>

          {/* Mode Switcher & CTA */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* View Switcher Pill */}
            <div className="bg-[#0b2114] p-1 rounded-full border border-[#1b482b] flex items-center gap-1">
              <button
                onClick={() => navigate('/')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                  !isCompany
                    ? 'bg-funngro-neon text-black shadow-neon-glow'
                    : 'text-emerald-200 hover:text-white'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5" />
                For Teens
              </button>
              <button
                onClick={() => navigate('/company')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                  isCompany
                    ? 'bg-funngro-neon text-black shadow-neon-glow'
                    : 'text-emerald-200 hover:text-white'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                For Companies
              </button>
            </div>

            {/* Primary Action Button */}
            <a
              href={isCompany ? "#contact-sales" : "#download-app"}
              className="bg-funngro-neon hover:bg-[#00ffa3] text-black font-extrabold text-sm px-6 py-2.5 rounded-full flex items-center gap-2 shadow-neon-glow hover:scale-[1.02] active:scale-95 transition-all"
            >
              {isCompany ? 'Hire Talent' : 'Get Started'}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => navigate(isCompany ? '/' : '/company')}
              className="bg-emerald-500/20 text-funngro-neon border border-emerald-500/40 text-xs px-3 py-1 rounded-full font-mono font-bold"
            >
              {isCompany ? '→ Teens' : '→ Companies'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-emerald-100 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-funngro-neon" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07170c] border-b border-[#14361e] px-4 pt-4 pb-6 space-y-4 animate-fadeIn">
          <div className="flex justify-between items-center pb-2 border-b border-emerald-900/40">
            <span className="text-xs font-mono text-emerald-300 uppercase tracking-wider font-semibold">Switch Mode</span>
            <div className="flex gap-2">
              <button
                onClick={() => { navigate('/'); setMobileMenuOpen(false); }}
                className={`px-3 py-1 rounded-full text-xs font-bold ${!isCompany ? 'bg-funngro-neon text-black' : 'bg-emerald-900/40 text-emerald-200'}`}
              >
                Teens
              </button>
              <button
                onClick={() => { navigate('/company'); setMobileMenuOpen(false); }}
                className={`px-3 py-1 rounded-full text-xs font-bold ${isCompany ? 'bg-funngro-neon text-black' : 'bg-emerald-900/40 text-emerald-200'}`}
              >
                Companies
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 font-semibold text-emerald-100 text-sm">
            {isCompany ? (
              <>
                <a href="#brand-trust" onClick={() => setMobileMenuOpen(false)}>Brand Statistics</a>
                <a href="#why-us" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
                <a href="#campaign-solutions" onClick={() => setMobileMenuOpen(false)}>Campaign Solutions</a>
                <a href="#how-it-works-company" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
                <a href="#benefits-company" onClick={() => setMobileMenuOpen(false)}>Benefits</a>
              </>
            ) : (
              <>
                <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How it works</a>
                <a href="#what-you-can-do" onClick={() => setMobileMenuOpen(false)}>What you can do</a>
                <a href="#income-ladder" onClick={() => setMobileMenuOpen(false)}>Income / growth</a>
                <a href="#benefits" onClick={() => setMobileMenuOpen(false)}>Benefits</a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              </>
            )}
          </div>

          <div className="pt-2">
            <a
              href={isCompany ? "#contact-sales" : "#download-app"}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-funngro-neon text-black font-extrabold text-center py-3 rounded-full flex items-center justify-center gap-2 shadow-neon-glow"
            >
              {isCompany ? 'Hire Talent Now' : 'Get Started Now'}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

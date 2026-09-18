import React, { useState } from "react";
import { Calculator, Sparkles, Zap, Award, ArrowRight } from "lucide-react";

export default function TeenCalculator() {
  const [hours, setHours] = useState(6);
  const [taskType, setTaskType] = useState("mixed");

  // Calculation logic
  const hourlyRate =
    taskType === "content" ? 450 : taskType === "promotion" ? 350 : 280;
  const estimatedMonthly = Math.round((hours * hourlyRate * 4.2) / 100) * 100;
  const matchedBrands = Math.min(80, Math.floor(hours * 3.5) + 12);

  return (
    <div className="bg-[#091f11] border-2 border-emerald-800/60 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-funngro-neon/10 rounded-full blur-3xl"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 font-mono text-xs text-funngro-neon uppercase tracking-wider font-semibold">
            <Calculator className="w-3.5 h-3.5" /> INTERACTIVE EARNING
            CALCULATOR
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-white leading-tight">
            How much can you earn <br />
            <span className="font-serif-italic text-funngro-neon">
              on your own schedule?
            </span>
          </h3>

          {/* Task Type Buttons */}
          <div className="space-y-2">
            <label className="font-mono text-xs text-emerald-200 font-semibold block uppercase tracking-wider">
              1. Select Preferred Task Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setTaskType("mixed")}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  taskType === "mixed"
                    ? "bg-funngro-neon text-black font-bold shadow-neon-glow"
                    : "bg-[#06140b] text-emerald-200 border border-emerald-900 hover:border-emerald-700"
                }`}
              >
                🌟 All Tasks
              </button>
              <button
                onClick={() => setTaskType("content")}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  taskType === "content"
                    ? "bg-funngro-neon text-black font-bold shadow-neon-glow"
                    : "bg-[#06140b] text-emerald-200 border border-emerald-900 hover:border-emerald-700"
                }`}
              >
                🎥 Reels & Content
              </button>
              <button
                onClick={() => setTaskType("promotion")}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  taskType === "promotion"
                    ? "bg-funngro-neon text-black font-bold shadow-neon-glow"
                    : "bg-[#06140b] text-emerald-200 border border-emerald-900 hover:border-emerald-700"
                }`}
              >
                📢 Promotions
              </button>
            </div>
          </div>

          {/* Hours Slider */}
          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center font-mono text-xs text-emerald-200">
              <label
                htmlFor="teen-hours"
                className="font-semibold uppercase tracking-wider"
              >
                2. Available Hours Per Week
              </label>
              <span className="text-funngro-neon font-bold text-sm bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800">
                {hours} Hours / Week
              </span>
            </div>

            <input
              id="teen-hours"
              type="range"
              min="2"
              max="20"
              step="1"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              aria-label="Available hours per week"
              className="w-full h-2 bg-[#06140b] rounded-lg appearance-none cursor-pointer accent-funngro-neon"
            />
            <div className="flex justify-between text-[10px] font-mono text-emerald-300">
              <span>2 hrs (Casual)</span>
              <span>10 hrs (Active)</span>
              <span>20 hrs (Pro Creator)</span>
            </div>
          </div>
        </div>

        {/* Right Output Box */}
        <div className="lg:col-span-5 bg-[#06140b] border border-emerald-800/80 rounded-2xl p-6 text-center space-y-4 shadow-inner">
          <span className="font-mono text-xs text-emerald-300 font-semibold uppercase tracking-widest block">
            ESTIMATED MONTHLY PAYOUT
          </span>

          <div className="text-4xl sm:text-5xl font-serif-italic font-extrabold text-funngro-neon text-glow my-2">
            ₹{estimatedMonthly.toLocaleString("en-IN")}
            <span className="text-xs font-sans text-emerald-300 font-normal">
              {" "}
              / month
            </span>
          </div>

          <div className="pt-2 grid grid-cols-2 gap-3 text-left font-mono text-[11px] border-t border-emerald-900/60">
            <div className="bg-[#0b2214] p-2.5 rounded-lg border border-emerald-900/40">
              <span className="text-emerald-300 block text-[10px]">
                ACTIVE BRANDS MATCHED
              </span>
              <strong className="text-white text-sm">
                {matchedBrands}+ Brands
              </strong>
            </div>

            <div className="bg-[#0b2214] p-2.5 rounded-lg border border-emerald-900/40">
              <span className="text-emerald-300 block text-[10px]">
                VERIFIED PAYOUT METHOD
              </span>
              <strong className="text-funngro-neon text-xs">
                Direct UPI / Bank
              </strong>
            </div>
          </div>

          <a
            href="#download-app"
            className="w-full bg-funngro-neon hover:bg-[#00ffa3] text-black font-extrabold text-sm py-3 rounded-xl flex items-center justify-center gap-2 shadow-neon-glow transition-all mt-4"
          >
            Start Earning This Payout →
          </a>
        </div>
      </div>
    </div>
  );
}

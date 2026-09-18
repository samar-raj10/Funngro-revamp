import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const initialPayouts = [
  { id: 1, name: "L***", city: "Nagpur", amount: "980", time: "Just now" },
  { id: 2, name: "J***", city: "Patna", amount: "110", time: "2m ago" },
  { id: 3, name: "T***", city: "Kolkata", amount: "1,820", time: "5m ago" },
  { id: 4, name: "H***", city: "Lucknow", amount: "120", time: "8m ago" },
  { id: 5, name: "R***", city: "Mumbai", amount: "3,400", time: "12m ago" },
];

export default function LivePayoutWidget() {
  const [payouts, setPayouts] = useState(initialPayouts);
  const [totalPaid, setTotalPaid] = useState(1607907);

  // Simulated live ticker addition
  useEffect(() => {
    const interval = setInterval(() => {
      const cities = ["Delhi", "Pune", "Jaipur", "Hyderabad", "Ahmedabad", "Surat", "Chandigarh", "Kochi"];
      const initials = ["K***", "M***", "P***", "S***", "A***", "V***"];
      const newAmount = Math.floor(Math.random() * 2500) + 150;
      
      const newEntry = {
        id: Date.now(),
        name: initials[Math.floor(Math.random() * initials.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        amount: newAmount.toLocaleString('en-IN'),
        time: "Just now"
      };

      setPayouts(prev => [newEntry, ...prev.slice(0, 4)]);
      setTotalPaid(prev => prev + newAmount);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0b1b11]/95 border border-[#1b482b] rounded-2xl p-5 shadow-2xl backdrop-blur-md max-w-xs w-full text-left">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#14361e]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-funngro-neon animate-ping"></span>
          <span className="font-mono text-xs font-bold tracking-widest text-funngro-neon uppercase">Live TST</span>
        </div>
        <span className="font-mono text-[10px] text-funngro-subtle uppercase">Instant UPI</span>
      </div>

      {/* Main Total Paid */}
      <div className="my-4">
        <span className="font-mono text-[10px] tracking-widest text-emerald-300/70 uppercase block mb-1">
          Paid This Week
        </span>
        <div className="text-3xl font-extrabold font-serif-italic text-funngro-neon tracking-tight text-glow">
          ₹{totalPaid.toLocaleString('en-IN')}
        </div>
      </div>

      {/* Ticker List */}
      <div className="space-y-2 font-mono text-xs pt-1">
        {payouts.map((payout) => (
          <div 
            key={payout.id} 
            className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-[#07170c] border border-emerald-900/30 transition-all animate-fadeIn"
          >
            <div className="flex items-center gap-2 text-emerald-100">
              <span className="font-semibold text-emerald-300">{payout.name}</span>
              <span className="text-[11px] text-funngro-subtle">{payout.city}</span>
            </div>
            <div className="flex items-center gap-1 text-funngro-neon font-bold">
              <span>+₹{payout.amount}</span>
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

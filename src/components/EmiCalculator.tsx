"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function EmiCalculator() {
  const [price, setPrice] = useState(50000000); // 5Cr Default
  const [downPayment, setDownPayment] = useState(10000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    const loanAmount = price - downPayment;
    const monthlyRate = rate / 12 / 100;
    const totalMonths = tenure * 12;
    
    if (loanAmount > 0 && monthlyRate > 0) {
      const emiCalc = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
      setEmi(Math.round(emiCalc));
    } else {
      setEmi(0);
    }
  }, [price, downPayment, rate, tenure]);

  return (
    <section className="py-24 bg-gradient-to-b from-luxury-black to-luxury-darkGray/40">
      <div className="max-w-5xl mx-auto px-6 bg-luxury-glass backdrop-blur-xl border border-luxury-glassBorder p-8 md:p-12 rounded-3xl shadow-2xl">
        <div className="text-center mb-12">
          <span className="text-luxury-gold tracking-widest text-xs uppercase">Financial Intelligence</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-1">Investment & EMI Planner</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2"><label>Property Price (₹)</label><span className="text-luxury-gold font-bold">₹{(price / 10000000).toFixed(2)} Cr</span></div>
              <input type="range" min="10000000" max="1000000000" step="5000000" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full accent-luxury-gold" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2"><label>Down Payment (₹)</label><span className="text-luxury-gold font-bold">₹{(downPayment / 10000000).toFixed(2)} Cr</span></div>
              <input type="range" min="2000000" max={price * 0.8} step="2000000" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full accent-luxury-gold" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400 block mb-1">Interest Rate (%)</label>
                <input type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full bg-luxury-black/50 border border-luxury-glassBorder rounded-xl p-3 text-white focus:outline-none focus:border-luxury-gold" />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1">Duration (Years)</label>
                <input type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full bg-luxury-black/50 border border-luxury-glassBorder rounded-xl p-3 text-white focus:outline-none focus:border-luxury-gold" />
              </div>
            </div>
          </div>

          <div className="bg-luxury-black/60 border border-luxury-glassBorder p-8 rounded-2xl text-center">
            <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-2">Estimated Monthly Outflow</h4>
            <div className="font-serif text-4xl md:text-5xl font-bold text-luxury-gold mb-4">
              ₹{emi.toLocaleString("en-IN")} <span className="text-xs font-sans text-gray-400">/ month</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">Calculations are indicative based on premium variable lending tiers. Consult your assigned private wealth manager for exact schedules.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, Calculator, TrendingDown, Info } from 'lucide-react';

export default function QuoteAuditor() {
  const navigate = useNavigate();
  const [projectValue, setProjectValue] = useState<number>(25000);
  const dealerFeePercent = 12; // Average hidden fee

  const cashPrice = projectValue;
  const hiddenFee = (projectValue * dealerFeePercent) / 100;
  const financePrice = projectValue + hiddenFee;

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 text-red-600 mb-4">
              <AlertCircle size={24} />
              <span className="font-black uppercase tracking-[0.3em] text-sm">Industry Warning</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 uppercase leading-[1.1] max-w-md">The <br /> Financing <br /> Trap</h1>
            <p className="text-xl text-brand-slate mb-8 leading-relaxed">
              Most GTA window companies offer "0% Financing" or "No Payments for 12 Months." What they don't tell you is the <span className="text-brand-black font-bold">Dealer Fee</span>. 
            </p>
            <div className="space-y-6 text-brand-slate">
              <p>
                Lenders charge window companies between <span className="text-brand-black font-bold">10% and 15%</span> to provide these financing terms. To protect their margins, competitors bake this fee directly into your window price.
              </p>
              <div className="bg-red-50 p-6 border-l-4 border-red-600">
                <p className="text-sm font-bold text-red-900 uppercase mb-2">The Hidden Math:</p>
                <p className="text-sm text-red-800 italic">
                  If your project is $25,000, you are likely paying an extra $3,000 just for the "privilege" of financing, even if the interest rate is 0%.
                </p>
              </div>
              <p>
                At NorthLux, we believe in <span className="text-brand-black font-bold">Truth-in-Pricing</span>. We show you the raw cash price and let you decide how to fund your modernization without hidden markups.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-brand-black text-white p-8 md:p-12 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <Calculator className="text-brand-gold" size={32} />
              <h2 className="text-2xl font-black uppercase tracking-widest">Transparent Quote Auditor</h2>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-white/60 mb-4">
                  Estimated Project Value: ${projectValue.toLocaleString()}
                </label>
                <input 
                  type="range" 
                  min="5000" 
                  max="100000" 
                  step="1000"
                  value={projectValue}
                  onChange={(e) => setProjectValue(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <div className="flex justify-between text-[10px] uppercase font-bold mt-2 opacity-40">
                  <span>$5k</span>
                  <span>$100k</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="p-6 border border-white/10 bg-white/5">
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">NorthLux Cash Price</div>
                  <div className="text-3xl font-black text-white">${cashPrice.toLocaleString()}</div>
                </div>
                
                <div className="p-6 border border-red-900/30 bg-red-900/10">
                  <div className="text-[10px] uppercase tracking-widest text-red-400/60 mb-1">Competitor "Finance" Price</div>
                  <div className="text-3xl font-black text-red-400">${financePrice.toLocaleString()}</div>
                  <div className="text-[10px] uppercase tracking-widest text-red-400/40 mt-2">Includes ~{dealerFeePercent}% Hidden Dealer Fee</div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-brand-gold">
                    <TrendingDown size={20} />
                    <span className="font-black uppercase tracking-widest text-sm">Potential Savings</span>
                  </div>
                  <div className="text-3xl font-black text-brand-gold">${hiddenFee.toLocaleString()}</div>
                </div>
                <p className="text-xs text-white/40 italic">
                  *Based on industry average dealer fees for 0% interest programs.
                </p>
              </div>

              <button 
                onClick={() => navigate('/visual-audit')}
                className="w-full py-4 px-8 bg-gradient-to-r from-brand-gold to-[#D4AF37] text-brand-black font-black uppercase tracking-[0.2em] text-sm rounded-[6px] shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 mt-4"
              >
                Request a Transparent Audit
              </button>
            </div>
          </motion.div>
        </div>

        {/* Comparison Row */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Cash-First Approach", 
              desc: "We provide the absolute lowest price possible by removing all financing overhead.",
              icon: <Info className="text-brand-gold" />
            },
            { 
              title: "No Hidden Fees", 
              desc: "Every dollar you pay goes into the quality of your windows, not a bank's pocket.",
              icon: <Info className="text-brand-gold" />
            },
            { 
              title: "Direct Sourcing", 
              desc: "By eliminating middle-man financing, we pass 100% of the value to the homeowner.",
              icon: <Info className="text-brand-gold" />
            }
          ].map((item, i) => (
            <div key={i} className="p-8 border border-black/5 bg-gray-50">
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-black uppercase mb-2">{item.title}</h3>
              <p className="text-sm text-brand-slate leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

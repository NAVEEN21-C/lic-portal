
import React, { useState } from 'react';
import { PiggyBank, Coins, Calendar, ShieldCheck, Wallet, ChevronRight, Info } from 'lucide-react';

const ILLUSTRATIONS = [
  {
    name: "Jeevan Labh (736-25-16)",
    sumAssured: "10,00,000",
    term: "25 Years",
    premiumPayment: "16 Years",
    totalPremium: "8,60,782",
    totalBenefit: "26,25,000",
    accidentalCover: "10,00,000",
    yearlyPremium: "54,907",
    subseqYear: "53,725"
  },
  {
    name: "New Jeevan Anand (715-31-31)",
    sumAssured: "15,00,000",
    term: "31 Years",
    premiumPayment: "31 Years",
    totalPremium: "17,38,256",
    totalBenefit: "70,89,000",
    accidentalCover: "15,00,000",
    yearlyPremium: "57,266",
    subseqYear: "56,033"
  }
];

const SampleIllustration: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = ILLUSTRATIONS[activeIndex];

  return (
    <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 max-w-4xl mx-auto">
      <div className="bg-[#1a2b4a] p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h3 className="text-white font-black text-xl flex items-center">
            <ShieldCheck className="w-6 h-6 mr-3 text-yellow-400" />
            LIVE PLAN ILLUSTRATION
        </h3>
        <div className="flex bg-white/10 p-1 rounded-xl">
            {ILLUSTRATIONS.map((ill, i) => (
                <button 
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`px-4 py-2 rounded-lg text-xs font-black transition-all ${activeIndex === i ? 'bg-white text-blue-900 shadow-lg' : 'text-blue-200 hover:text-white'}`}
                >
                    {ill.name.split(' ')[1]}
                </button>
            ))}
        </div>
      </div>

      <div className="p-8 md:p-12">
        <div className="mb-10 text-center sm:text-left">
            <h4 className="text-3xl font-black text-blue-900 mb-2">{active.name}</h4>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Premium And Benefit Illustration</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Plan Details</p>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="flex items-center text-slate-600 font-bold text-sm"><Wallet className="w-4 h-4 mr-2 text-blue-600" /> Sum Assured</span>
                            <span className="text-blue-900 font-black">₹ {active.sumAssured}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="flex items-center text-slate-600 font-bold text-sm"><Calendar className="w-4 h-4 mr-2 text-blue-600" /> Policy Term</span>
                            <span className="text-blue-900 font-black">{active.term}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="flex items-center text-slate-600 font-bold text-sm"><ChevronRight className="w-4 h-4 mr-2 text-blue-600" /> Premium Payment</span>
                            <span className="text-blue-900 font-black">{active.premiumPayment}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                    <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-4">Other Benefits</p>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-700 font-bold text-sm">Accidental Death & Disability Cover</span>
                        <span className="text-orange-700 font-black">₹ {active.accidentalCover}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center gap-6">
                <div className="relative border-4 border-blue-100 rounded-[2.5rem] p-8 bg-white flex items-center shadow-lg transition-transform hover:scale-[1.02]">
                    <div className="bg-blue-50 p-4 rounded-2xl mr-6">
                        <PiggyBank className="w-10 h-10 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-blue-600 font-black text-xs uppercase tracking-widest">You Pay</p>
                        <p className="text-[10px] text-slate-400 font-bold">Total Premium Of</p>
                        <p className="text-3xl font-black text-blue-950">₹ {active.totalPremium}</p>
                    </div>
                </div>

                <div className="relative border-4 border-emerald-100 rounded-[2.5rem] p-8 bg-white flex items-center shadow-lg transition-transform hover:scale-[1.02]">
                    <div className="bg-emerald-50 p-4 rounded-2xl mr-6">
                        <Coins className="w-10 h-10 text-emerald-600" />
                    </div>
                    <div>
                        <p className="text-emerald-600 font-black text-xs uppercase tracking-widest">You Get</p>
                        <p className="text-[10px] text-slate-400 font-bold">Total Benefit Of</p>
                        <p className="text-3xl font-black text-emerald-950">₹ {active.totalBenefit}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="border-t border-slate-100 pt-8">
            <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-400 shrink-0" />
                <p className="text-[10px] text-slate-400 leading-relaxed italic font-medium">
                    *Above calculations are based on current bonus rates and final addition bonus (FAB). 
                    Yearly premium for first year: ₹{active.yearlyPremium}, Subsequent years: ₹{active.subseqYear}.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SampleIllustration;

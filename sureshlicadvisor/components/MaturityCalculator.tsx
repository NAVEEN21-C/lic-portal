import React, { useState, useEffect } from 'react';
import { Calculator, Info, User, Briefcase, Target, TrendingUp, Shield, Heart, GraduationCap, Home, PiggyBank } from 'lucide-react';
import { AGENT_PHONE, PLANS } from '../constants';

type FinancialGoal = 'wealth' | 'child_edu' | 'property' | 'retirement' | 'protection';

const MaturityCalculator: React.FC = () => {
  const [age, setAge] = useState<number>(30);
  const [annualIncome, setAnnualIncome] = useState<number>(800000);
  const [goal, setGoal] = useState<FinancialGoal>('wealth');
  const [premiumBudget, setPremiumBudget] = useState<number>(5000); // Monthly budget
  
  // Derived estimations
  const [estimatedSumAssured, setEstimatedSumAssured] = useState<number>(0);
  const [estimatedMaturity, setEstimatedMaturity] = useState<number>(0);
  const [recommendedPlan, setRecommendedPlan] = useState(PLANS[1]); 

  useEffect(() => {
    // Basic logical mapping for demonstration purposes
    let term = 20;
    let bonusRate = 45; // per 1000 sum assured
    let multiplier = 12 * 15; 

    switch (goal) {
      case 'wealth':
        setRecommendedPlan(PLANS.find(p => p.id === 'jeevan-labh') || PLANS[1]);
        term = 21;
        bonusRate = 48;
        multiplier = 12 * 18;
        break;
      case 'child_edu':
        setRecommendedPlan(PLANS.find(p => p.id === 'amritbaal') || PLANS[2]);
        term = 18;
        bonusRate = 42;
        multiplier = 12 * 15;
        break;
      case 'property':
        setRecommendedPlan(PLANS.find(p => p.id === 'money-back-20') || PLANS[3]);
        term = 20;
        bonusRate = 38;
        multiplier = 12 * 14;
        break;
      case 'retirement':
        setRecommendedPlan(PLANS.find(p => p.id === 'jeevan-shanti') || PLANS[5]);
        term = 12; // Deferment period
        bonusRate = 0; 
        multiplier = 12 * 10;
        break;
      case 'protection':
        setRecommendedPlan(PLANS.find(p => p.id === 'jeevan-amar') || PLANS[4]);
        term = 30;
        bonusRate = 0;
        multiplier = 12 * 120; // High coverage for low premium
        break;
    }

    const sa = premiumBudget * multiplier;
    const maturity = goal === 'protection' ? 0 : sa + (sa / 1000 * bonusRate * term);
    
    setEstimatedSumAssured(sa);
    setEstimatedMaturity(maturity);
  }, [age, goal, premiumBudget]);

  const goalConfigs: Record<FinancialGoal, { icon: React.ReactNode, label: string, sub: string }> = {
    wealth: { 
        icon: <PiggyBank className="w-5 h-5" />, 
        label: 'Wealth Creation', 
        sub: 'Long-term Growth' 
    },
    child_edu: { 
        icon: <GraduationCap className="w-5 h-5" />, 
        label: 'Child Education', 
        sub: 'Secure College Fund' 
    },
    property: { 
        icon: <Home className="w-5 h-5" />, 
        label: 'Property Deposit', 
        sub: 'Down Payment Plan' 
    },
    retirement: { 
        icon: <Heart className="w-5 h-5" />, 
        label: 'Retirement Target', 
        sub: 'Guaranteed Pension' 
    },
    protection: { 
        icon: <Shield className="w-5 h-5" />, 
        label: 'Family Security', 
        sub: 'Pure Life Cover' 
    }
  };

  const formatCurrency = (val: number) => {
    if (val >= 10000000) return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹ ${(val / 100000).toFixed(2)} Lakh`;
    return `₹ ${val.toLocaleString()}`;
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Input Side */}
        <div className="lg:col-span-3 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
          <div className="flex items-center mb-8">
            <div className="bg-blue-600 p-3 rounded-2xl mr-4">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Personalized Policy Planner</h3>
              <p className="text-slate-500">Calculate your ideal coverage and future benefits</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">
                  <User className="w-4 h-4 mr-2 text-blue-600" /> Your Current Age: {age}
                </label>
                <input
                  type="range"
                  min="18"
                  max="65"
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
              <div>
                <label className="flex items-center text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">
                  <Briefcase className="w-4 h-4 mr-2 text-blue-600" /> Annual Income Range
                </label>
                <select 
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(parseInt(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none font-medium text-slate-800"
                >
                  <option value={300000}>Up to ₹3 Lakh</option>
                  <option value={800000}>₹3 Lakh - ₹10 Lakh</option>
                  <option value={2000000}>₹10 Lakh - ₹25 Lakh</option>
                  <option value={5000000}>Above ₹25 Lakh</option>
                </select>
              </div>
            </div>

            <div>
              <label className="flex items-center text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">
                <Target className="w-4 h-4 mr-2 text-blue-600" /> Select Your Specific Goal
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3">
                {(Object.keys(goalConfigs) as FinancialGoal[]).map((g) => (
                  <button
                    key={g}
                    onClick={() => setGoal(g)}
                    className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all ${
                      goal === g 
                        ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-md scale-[1.02]' 
                        : 'border-slate-100 bg-white text-slate-400 hover:border-slate-200'
                    }`}
                  >
                    <div className={`mb-2 p-2 rounded-full ${goal === g ? 'bg-blue-100 text-blue-600' : 'bg-slate-50 text-slate-400'}`}>
                        {goalConfigs[g].icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-tight text-center leading-none mb-1">{goalConfigs[g].label}</span>
                    <span className="text-[9px] opacity-70 font-medium text-center leading-none">{goalConfigs[g].sub}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="flex items-center text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 mr-2 text-blue-600" /> Monthly Savings Commitment: ₹{premiumBudget.toLocaleString()}
              </label>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={premiumBudget}
                onChange={(e) => setPremiumBudget(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                <span>₹1,000</span>
                <span>₹1 Lakh+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Side */}
        <div className="lg:col-span-2 bg-slate-50 p-8 md:p-12 flex flex-col border-l border-slate-100">
          <h4 className="text-slate-900 font-bold mb-6 uppercase text-sm tracking-widest border-b border-slate-200 pb-2 flex items-center">
            Your Tailored Solution
          </h4>
          
          <div className="space-y-6 flex-grow">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-[10px] font-black text-blue-600 mb-2 uppercase tracking-tighter">Recommended For You</p>
              <h5 className="text-xl font-extrabold text-slate-900 leading-tight mb-2">
                {recommendedPlan.name}
              </h5>
              <div className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded mb-3">
                PLAN NO. {recommendedPlan.planNumber}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 italic">
                "{recommendedPlan.description}"
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-700 text-white p-5 rounded-2xl shadow-lg border-b-4 border-blue-900 transform transition-transform hover:translate-y-[-2px]">
                <p className="text-[10px] font-black opacity-80 mb-1 uppercase tracking-tighter">Total Life Cover Benefit</p>
                <p className="text-3xl font-black tracking-tight">{formatCurrency(estimatedSumAssured)}</p>
              </div>

              {goal !== 'protection' && (
                <div className="bg-emerald-600 text-white p-5 rounded-2xl shadow-lg border-b-4 border-emerald-800 transform transition-transform hover:translate-y-[-2px]">
                  <p className="text-[10px] font-black opacity-80 mb-1 uppercase tracking-tighter">
                    {goal === 'retirement' ? 'Estimated Maturity Value' : 'Maturity Corpus Target'}
                  </p>
                  <p className="text-3xl font-black tracking-tight">{formatCurrency(estimatedMaturity)}</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200">
            <div className="flex items-start mb-6 text-[10px] text-slate-400 leading-tight italic">
              <Info className="w-3 h-3 mr-2 text-blue-400 shrink-0 mt-0.5" />
              <span>Figures shown are illustrative. Actual results depend on plan term, policyholder profile, and LIC profit declared annually.</span>
            </div>
            
            <button 
              onClick={() => {
                const message = `Hi Suresh, I generated an LIC Plan Quote:
Goal: ${goalConfigs[goal].label}
Age: ${age}
Income Group: ₹${annualIncome}
Monthly Savings: ₹${premiumBudget}
System Recommendation: ${recommendedPlan.name} (Plan ${recommendedPlan.planNumber})
Please provide me with a specific benefit illustration.`;
                window.open(`https://wa.me/91${AGENT_PHONE}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl active:scale-95"
            >
              <PiggyBank className="w-5 h-5 mr-2" />
              <span>Discuss This Plan with Suresh</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaturityCalculator;
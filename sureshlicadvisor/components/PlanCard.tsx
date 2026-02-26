
import React from 'react';
import { LICPlan } from '../types';
import { ChevronRight, Calendar, User, Wallet, CheckCircle2 } from 'lucide-react';

interface PlanCardProps {
  plan: LICPlan;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 overflow-hidden flex flex-col">
      <div className="bg-blue-50 p-6 flex justify-between items-start">
        <div>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
            Plan {plan.planNumber} • {plan.category}
          </span>
          <h3 className="text-xl font-bold text-slate-900 leading-tight">{plan.name}</h3>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-sm">
          <Wallet className="w-5 h-5 text-blue-600" />
        </div>
      </div>
      <div className="p-6 flex-grow">
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{plan.description}</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-xs text-slate-500">
            <User className="w-4 h-4 mr-2 text-blue-500" />
            <span>Age: {plan.entryAge}</span>
          </div>
          <div className="flex items-center text-xs text-slate-500">
            <Calendar className="w-4 h-4 mr-2 text-blue-500" />
            <span>Term: {plan.term}</span>
          </div>
          {plan.minSumAssured && (
            <div className="flex items-center text-[10px] font-black text-amber-700 bg-amber-50 px-2 py-1.5 rounded-lg border border-amber-200 w-fit uppercase tracking-wider">
              <Wallet className="w-3.5 h-3.5 mr-1.5 text-amber-600" />
              <span>Min Sum Assured: {plan.minSumAssured}</span>
            </div>
          )}
        </div>

        <ul className="space-y-2">
          {plan.benefits.slice(0, 3).map((benefit, idx) => {
            const isFirst = idx === 0;
            return (
              <li key={idx} className={`flex items-start text-sm ${isFirst ? 'text-blue-900 font-bold' : 'text-slate-700'}`}>
                {isFirst ? (
                  <CheckCircle2 className="w-4 h-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                ) : (
                  <span className="mr-2 text-blue-500 font-bold w-4 text-center shrink-0">•</span>
                )}
                {benefit}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-6 pt-0 mt-auto border-t border-slate-50">
        <a
          href={`https://wa.me/919908968539?text=I'm interested in ${plan.name} (Plan ${plan.planNumber})`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors group"
        >
          Check Eligibility
          <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default PlanCard;


import React, { useState } from 'react';
import { PLANS } from '../constants';
import PlanCard from '../components/PlanCard';
import MaturityCalculator from '../components/MaturityCalculator';
import { Search, Filter } from 'lucide-react';

const categories = ['All', 'Endowment', 'Money Back', 'Term', 'ULIP', 'Pension', 'Special'];

const Plans: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlans = PLANS.filter((plan) => {
    const matchesCategory = activeCategory === 'All' || plan.category === activeCategory;
    const matchesSearch = plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.planNumber?.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">LIC Insurance Plans</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose from a wide range of plans tailored to your savings, protection, and retirement needs.
          </p>
        </header>

        {/* Maturity Calculator Integration */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Find Your Perfect Plan</h2>
            <p className="text-slate-500">Input your details below to see how LIC can secure your financial future.</p>
          </div>
          <MaturityCalculator />
        </section>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === cat
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search plan name or number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>
        </div>

        {filteredPlans.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-slate-400 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No plans found</h3>
            <p className="text-slate-500">Try adjusting your filters or search terms.</p>
          </div>
        )}

        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">Optional Policy Riders</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-8">
            You can enhance your base policy coverage by adding these optional riders for extra protection:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Accidental Death & Disability Benefit Rider</h3>
              <p className="text-sm text-blue-700">Provides additional sum assured in case of accidental death or disability, ensuring comprehensive protection.</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Critical Illness Health Rider</h3>
              <p className="text-sm text-blue-700">Offers financial support with a lump sum payout upon diagnosis of specified critical illnesses.</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Premium Waiver Benefit Rider</h3>
              <p className="text-sm text-blue-700">Waives future premiums if the proposer passes away, ensuring the policy continues (highly recommended for child plans).</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-blue-900 mb-2">New Term Assurance Rider</h3>
              <p className="text-sm text-blue-700">Provides an additional life cover over and above the base policy amount at a nominal cost.</p>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-blue-900 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need help choosing?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Not sure which plan is right for you? Ask our expert advisor Suresh for a personalized recommendation.
          </p>
          <a
            href={`https://wa.me/919908968539?text=Hi Suresh, I'm confused about which LIC plan to choose. Can you help?`}
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-10 py-4 rounded-xl transition-all"
          >
            Get Expert Advice on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Plans;

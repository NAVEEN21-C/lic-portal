
import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle, Shield, Briefcase, Heart } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Expertise & Personalized Care</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Beyond just selling policies, I provide end-to-end assistance to ensure your financial security is iron-clad.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div>
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Personalized Advisory</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  Every family has different needs. I perform a deep-dive "Need Analysis" to understand your income, expenses, and future liabilities before suggesting any plan.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-700"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Financial gap analysis</li>
                  <li className="flex items-center text-slate-700"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Tax optimization strategies</li>
                  <li className="flex items-center text-slate-700"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Goal-based planning</li>
                </ul>
              </div>

              <div>
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Policy Review & Management</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  Already have LIC policies but don't know their current status? I help you track your entire LIC portfolio in one place.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-700"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Premium payment alerts</li>
                  <li className="flex items-center text-slate-700"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Nomination & address updates</li>
                  <li className="flex items-center text-slate-700"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Policy loan assistance</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 self-start">
               <div className="bg-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Claims Assistance</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The real test of an insurance agent is at the time of claim. I pride myself on providing compassionate, priority support during difficult times.
              </p>
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">Maturity Claims</h4>
                  <p className="text-sm text-slate-500">I ensure your maturity amounts are credited to your bank account on the exact date of maturity.</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">Death Claims</h4>
                  <p className="text-sm text-slate-500">Handling all documentation with care and urgency to support the nominee during their loss.</p>
                </div>
              </div>
              <a 
                href="/#/contact" 
                className="mt-8 block text-center bg-blue-700 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-all"
              >
                Book Your Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

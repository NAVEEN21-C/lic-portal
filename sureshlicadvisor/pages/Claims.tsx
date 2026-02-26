
import React from 'react';
import { FileText, ClipboardList, CheckCircle2, PhoneCall } from 'lucide-react';
import { AGENT_PHONE } from '../constants';

const Claims: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Claims & Policy Support</h1>
          <p className="text-lg text-slate-600">
            A step-by-step guide to ensure your insurance benefits reach you and your loved ones without delay.
          </p>
        </div>

        <div className="space-y-12">
          {/* Maturity Claim */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-2xl mr-4">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Maturity Claims</h2>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              When your policy completes its term, the maturity amount is payable. It's a simple process if handled early.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold mb-4 flex items-center text-slate-800">
                  <ClipboardList className="w-5 h-5 mr-2 text-blue-600" /> Documents Needed
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Original Policy Bond</li>
                  <li>• Discharge Form (Form 3825)</li>
                  <li>• NEFT Mandate Form</li>
                  <li>• Copy of PAN & Aadhaar</li>
                  <li>• Cancelled Cheque / Passbook Copy</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold mb-4 flex items-center text-slate-800">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" /> Process
                </h4>
                <ol className="space-y-2 text-sm text-slate-600 list-decimal pl-4">
                  <li>Submit documents 1 month before maturity.</li>
                  <li>Agent verifies and submits to LIC branch.</li>
                  <li>Amount credited directly on maturity date.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Death Claim */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-2xl mr-4">
                <HeartHandshake className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Death Claims Support</h2>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed italic">
              "We understand the pain. My priority is to ensure the nominee gets the financial support they deserve with zero stress."
            </p>
            <div className="bg-slate-900 text-white p-6 rounded-2xl mb-8">
              <h4 className="font-bold mb-4">Required Documents Checklist:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                <div className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-green-400 shrink-0 mt-1" /> Original Policy Bond</div>
                <div className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-green-400 shrink-0 mt-1" /> Death Certificate (Original)</div>
                <div className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-green-400 shrink-0 mt-1" /> Claim Form 'A'</div>
                <div className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-green-400 shrink-0 mt-1" /> Nominee Identity Proof</div>
                <div className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-green-400 shrink-0 mt-1" /> Medical Attendant Report (if required)</div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-slate-600 mb-4">Please call me immediately if such a situation arises. I will visit your home to help with the paperwork.</p>
              <a href={`tel:+91${AGENT_PHONE}`} className="inline-flex items-center justify-center bg-blue-700 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-800 transition-all">
                <PhoneCall className="w-5 h-5 mr-2" /> Call Suresh Directly
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// Helper Icon
const HeartHandshake = ({className}: {className: string}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.82 2.96 0"/><path d="m12 5 2.96 2.96a2.17 2.17 0 0 1 0 3.08 2.1 2.1 0 0 1-2.96 0"/></svg>
);

export default Claims;

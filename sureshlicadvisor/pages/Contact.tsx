
import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, Home, Briefcase, Fingerprint } from 'lucide-react';
import { AGENT_PHONE, AGENT_EMAIL, AGENT_WHATSAPP, AGENT_CODE, AGENT_ADDRESS_RESI, AGENT_ADDRESS_OFF, AGENT_NAME } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-slate-50 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-orange-100 text-[#eb5c26] rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
            Authorized LIC Advisor • Code: {AGENT_CODE}
          </div>
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">Reach Out to T. Suresh</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Based in Jogulamba Gadwal district, serving clients with integrity and professional care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 mb-10 tracking-tight">Quick Connect</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-orange-50 p-4 rounded-2xl mr-5">
                    <Phone className="w-6 h-6 text-[#eb5c26]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Direct Line</p>
                    <a href={`tel:+91${AGENT_PHONE}`} className="text-xl font-black text-slate-900 hover:text-[#eb5c26] transition-colors">
                      +91 {AGENT_PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-50 p-4 rounded-2xl mr-5">
                    <MessageCircle className="w-6 h-6 text-[#1e965e]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">WhatsApp</p>
                    <a href={AGENT_WHATSAPP} target="_blank" className="text-xl font-black text-slate-900 hover:text-[#1e965e] transition-colors">
                      Instant Chat
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-4 rounded-2xl mr-5">
                    <Fingerprint className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Agent Code</p>
                    <p className="text-xl font-black text-slate-900">{AGENT_CODE}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a2b4a] text-white p-10 rounded-[2.5rem] shadow-xl">
               <h4 className="text-xl font-black mb-6 flex items-center">
                   <MapPin className="mr-3 w-6 h-6 text-[#eb5c26]" /> Locations
               </h4>
               <div className="space-y-8">
                   <div className="flex items-start">
                       <Home className="w-5 h-5 mr-4 text-[#eb5c26] shrink-0 mt-1" />
                       <div>
                           <p className="text-[10px] font-black text-blue-300 uppercase mb-1">Residential Address</p>
                           <p className="text-sm font-medium text-slate-300 leading-relaxed">{AGENT_ADDRESS_RESI}</p>
                       </div>
                   </div>
                   <div className="flex items-start">
                       <Briefcase className="w-5 h-5 mr-4 text-[#1e965e] shrink-0 mt-1" />
                       <div>
                           <p className="text-[10px] font-black text-blue-300 uppercase mb-1">Office Address</p>
                           <p className="text-sm font-medium text-slate-300 leading-relaxed">{AGENT_ADDRESS_OFF}</p>
                       </div>
                   </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-slate-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="w-12 h-12 text-[#1e965e]" />
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 mb-4">Request Received!</h3>
                  <p className="text-lg text-slate-500 font-medium">Thank you. {AGENT_NAME} will review your inquiry and call you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-10 bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">Secure Your Appointment</h3>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="Ex: Rajesh Reddy"
                          className="w-full px-6 py-4 rounded-2xl border border-slate-100 focus:outline-none focus:ring-4 focus:ring-orange-500/10 bg-slate-50 font-bold transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Mobile Number</label>
                        <input
                          required
                          type="tel"
                          placeholder="Ex: 9876543210"
                          className="w-full px-6 py-4 rounded-2xl border border-slate-100 focus:outline-none focus:ring-4 focus:ring-orange-500/10 bg-slate-50 font-bold transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Select Goal</label>
                      <select className="w-full px-6 py-4 rounded-2xl border border-slate-100 focus:outline-none focus:ring-4 focus:ring-orange-500/10 bg-slate-50 font-bold transition-all appearance-none">
                        <option>Child's Future Planning</option>
                        <option>Retirement (Pension) Strategy</option>
                        <option>Tax-Saving Investment</option>
                        <option>High Maturity Endowment</option>
                        <option>Pure Term Life Cover</option>
                        <option>Claim Assistance Request</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Message Details</label>
                      <textarea
                        rows={4}
                        placeholder="Tell me a bit about your current age and monthly savings budget..."
                        className="w-full px-6 py-4 rounded-2xl border border-slate-100 focus:outline-none focus:ring-4 focus:ring-orange-500/10 bg-slate-50 font-bold transition-all"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#eb5c26] text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-[#d44d1d] transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center"
                    >
                      <Send className="w-6 h-6 mr-3" />
                      Book Free Consultation
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

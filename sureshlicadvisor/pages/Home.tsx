
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, CheckCircle2, ListChecks, MessageSquare, Calculator as CalcIcon, Fingerprint, Umbrella, Award, Handshake } from 'lucide-react';
import { AGENT_NAME, AGENT_PHONE, AGENT_WHATSAPP, AGENT_CODE, AGENT_EXPERIENCE, POLICIES_ISSUED, CLAIMS_SETTLED, CLAIM_RATIO } from '../constants';
import MaturityCalculator from '../components/MaturityCalculator';
import GeneratedHeroImage from '../components/GeneratedHeroImage';
import SampleIllustration from '../components/SampleIllustration';

const Home: React.FC = () => {
  const calculatorRef = useRef<HTMLDivElement>(null);

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a2b4a] via-[#0f172a] to-slate-900 text-white py-20 lg:py-28 overflow-hidden">
        {/* Background Decorative Circles with Card Colors */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-[#eb5c26] rounded-full blur-[160px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[500px] h-[500px] bg-[#1e965e] rounded-full blur-[140px] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex items-center gap-20">
            <div className="lg:w-7/12 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-blue-100 text-xs font-black uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
                <Fingerprint className="w-4 h-4 mr-2 text-[#eb5c26]" />
                Agent Code: {AGENT_CODE}
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
                <span className="text-[#eb5c26]">{AGENT_NAME}</span><br />
                <span className="text-white">LIC EXPERT</span>
              </h1>
              <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                With <span className="text-white font-bold">{AGENT_EXPERIENCE} years</span> of expertise. Delivering promises to families in Yerravalli and beyond.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <button
                  onClick={scrollToCalculator}
                  className="bg-[#eb5c26] hover:bg-[#d44d1d] text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center group"
                >
                  <CalcIcon className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Free Maturity Quote
                </button>
                <a
                  href={AGENT_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1e965e] hover:bg-[#167a4d] text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl flex items-center justify-center group"
                >
                  <MessageSquare className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                  Chat with Suresh
                </a>
              </div>

              {/* Updated Stats with User Data */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-90">
                <div className="text-center lg:text-left">
                  <p className="text-3xl font-black text-white">{AGENT_EXPERIENCE}</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#eb5c26]">Years Exp.</p>
                </div>
                <div className="text-center lg:text-left border-l border-white/10 pl-6">
                  <p className="text-3xl font-black text-white">{POLICIES_ISSUED}</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1e965e]">Policies Made</p>
                </div>
                <div className="text-center lg:text-left border-l border-white/10 pl-6">
                  <p className="text-3xl font-black text-white">{CLAIMS_SETTLED}</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-400">Claims Done</p>
                </div>
                <div className="text-center lg:text-left border-l border-white/10 pl-6">
                  <p className="text-3xl font-black text-white">{CLAIM_RATIO}</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-yellow-500">Claim Ratio</p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block lg:w-5/12">
               <GeneratedHeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges - Why LIC Section from Screenshot */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-12">Why LIC of India is your Best Choice</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 border-2 border-blue-100">
                        <Award className="w-8 h-8 text-blue-700" />
                    </div>
                    <p className="text-xs font-black text-blue-950 uppercase mb-1">Govt. Owned</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase leading-none">Sovereign Guarantee</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4 border-2 border-emerald-100">
                        <Umbrella className="w-8 h-8 text-emerald-700" />
                    </div>
                    <p className="text-xs font-black text-blue-950 uppercase mb-1">{CLAIM_RATIO}</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase leading-none">Settlement Ratio</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4 border-2 border-orange-100">
                        <ShieldCheck className="w-8 h-8 text-orange-700" />
                    </div>
                    <p className="text-xs font-black text-blue-950 uppercase mb-1">Section 37</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase leading-none">LIC Act 1956</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-4 border-2 border-purple-100">
                        <Handshake className="w-8 h-8 text-purple-700" />
                    </div>
                    <p className="text-xs font-black text-blue-950 uppercase mb-1">Most Trusted</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase leading-none">Insurance Company</p>
                </div>
            </div>
        </div>
      </section>

      {/* Live Sample Illustrations Section - Replica of provided PDF visuals */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-blue-950 mb-4 tracking-tighter">Real-World Examples</h2>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">See how LIC policies transform small savings into major financial legacies for families like yours.</p>
            </div>
            <SampleIllustration />
        </div>
      </section>

      {/* Embedded Calculator Section */}
      <section ref={calculatorRef} id="calculator" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter italic">"Zindagi Ke Saath Bhi, Zindagi Ke Baad Bhi"</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
              Find the perfect plan for your goals. Secure, guaranteed, and tailored by Suresh.
            </p>
          </div>
          <MaturityCalculator />
        </div>
      </section>

      {/* Footer-styled CTA Banner mimicking the card */}
      <section className="bg-slate-950 py-16 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex items-center gap-8">
                  <div className="bg-[#eb5c26] text-white p-5 rounded-2xl shadow-xl shadow-orange-500/10">
                      <Fingerprint className="w-10 h-10" />
                  </div>
                  <div>
                      <p className="text-[#eb5c26] font-black text-2xl tracking-tighter uppercase">Authorized Agent: {AGENT_CODE}</p>
                      <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mt-1">100% Verified License Holder</p>
                  </div>
              </div>
              <div className="h-16 w-px bg-white/10 hidden md:block"></div>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="text-center sm:text-right">
                      <p className="text-white font-black text-3xl tracking-tight">+91 {AGENT_PHONE}</p>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Connect with Suresh Directly</p>
                  </div>
                  <a href={`tel:+91${AGENT_PHONE}`} className="bg-[#1e965e] text-white p-5 rounded-3xl hover:scale-110 transition-transform shadow-2xl shadow-green-500/20">
                      <MessageSquare className="w-8 h-8" />
                  </a>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Home;

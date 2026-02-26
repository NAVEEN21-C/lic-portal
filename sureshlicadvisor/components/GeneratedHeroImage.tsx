
import React, { useState, useEffect } from 'react';
import { generateAgentHeroImage } from '../services/geminiService';
import { Shield, Loader2, BadgeCheck } from 'lucide-react';
import { AGENT_CODE } from '../constants';

const GeneratedHeroImage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImage() {
      const url = await generateAgentHeroImage();
      if (url) {
        setImageUrl(url);
      }
      setLoading(false);
    }
    fetchImage();
  }, []);

  if (loading) {
    return (
      <div className="relative w-full h-[550px] bg-white/5 rounded-3xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center overflow-hidden">
        <Loader2 className="w-12 h-12 text-yellow-400 animate-spin mb-4" />
        <p className="text-blue-100 font-medium animate-pulse">Syncing with Suresh's Official Profile...</p>
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Decorative borders mimicking the card's orange/green theme */}
      <div className="absolute -inset-1 bg-gradient-to-b from-[#eb5c26] via-white to-[#1e965e] rounded-[2.5rem] opacity-30 blur-sm"></div>

      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
        <img
          src="/business-card.jpg"
          alt="Expert LIC Consulting"
          className="w-full h-auto max-h-[600px] object-contain"
        />

        {/* Top Orange Overlay mimicking the card */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-[#eb5c26]/90 backdrop-blur-sm flex flex-col items-center justify-center">
          <span className="text-white font-black text-lg tracking-widest leading-tight">LIC AUTHORIZED</span>
          <span className="text-white/90 font-medium text-sm">Welcome to T. Suresh's Official LIC Portal</span>
        </div>

        {/* Bottom Green Overlay mimicking the card */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#1e965e]/90 backdrop-blur-sm flex items-center justify-center px-6">
          <p className="text-white text-xs font-bold leading-tight text-center">
            Serving Yerravalli, Jogulamba Gadwal District & Hyderabad
          </p>
        </div>
      </div>

      {/* Floating Badge for Agent Code */}
      <div className="absolute top-20 -right-6 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 animate-float hidden xl:block">
        <div className="flex items-center space-x-2 mb-1">
          <BadgeCheck className="w-5 h-5 text-[#eb5c26]" />
          <p className="text-slate-800 font-black text-sm uppercase tracking-tighter">Verified License</p>
        </div>
        <p className="text-blue-900 font-black text-lg">#{AGENT_CODE}</p>
      </div>

      <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 hidden xl:block animate-float" style={{ animationDelay: '1s' }}>
        <div className="flex items-center space-x-2 mb-1">
          <Shield className="w-5 h-5 text-[#1e965e]" />
          <p className="text-blue-900 font-black text-2xl tracking-tighter">18+ Years</p>
        </div>
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Industry Expertise</p>
      </div>
    </div>
  );
};

export default GeneratedHeroImage;


import React from 'react';
import { Shield, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import { AGENT_NAME, AGENT_PHONE, AGENT_EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold tracking-tight text-white">{AGENT_NAME} <span className="text-yellow-500">LIC</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Securing futures since 2012. We provide expert advice on LIC policies, helping families achieve financial independence and protection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/#/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/#/plans" className="hover:text-white transition-colors">LIC Plans</a></li>
              <li><a href="/#/claims" className="hover:text-white transition-colors">Claims Guide</a></li>
              <li><a href="/#/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Plan Categories</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/#/plans" className="hover:text-white transition-colors">Endowment Plans</a></li>
              <li><a href="/#/plans" className="hover:text-white transition-colors">Children Plans</a></li>
              <li><a href="/#/plans" className="hover:text-white transition-colors">Money Back Plans</a></li>
              <li><a href="/#/plans" className="hover:text-white transition-colors">Pension & ULIPs</a></li>
              <li><a href="/#/plans" className="hover:text-white transition-colors">Term Insurance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-blue-500" />
                +91 {AGENT_PHONE}
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-blue-500" />
                {AGENT_EMAIL}
              </li>
              <li>
                <p className="font-semibold text-white mt-4 mb-2">Support Hours:</p>
                <p>Mon - Sun: 9:00 AM - 9:00 PM</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-xs text-center">
          <p>© {new Date().getFullYear()} {AGENT_NAME} LIC Advisor. All Rights Reserved.</p>
          <p className="mt-2 text-slate-600 italic">
            Disclaimer: Insurance is the subject matter of solicitation. Plan details are based on current LIC terms and conditions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

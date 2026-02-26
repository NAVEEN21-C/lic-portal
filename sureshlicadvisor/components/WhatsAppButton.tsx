
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { AGENT_WHATSAPP } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center justify-end animate-float">
      <a
        href={AGENT_WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group flex items-center space-x-2 animate-soft-pulse"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out font-semibold whitespace-nowrap">
          Chat with Suresh
        </span>
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
};

export default WhatsAppButton;

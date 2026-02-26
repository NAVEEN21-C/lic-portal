
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, ExternalLink, Globe, TrendingUp, Zap } from 'lucide-react';
import { askExpert, GroundingSource } from '../services/geminiService';

interface Message {
  role: 'ai' | 'user';
  text: string;
  sources?: GroundingSource[];
}

const QUICK_SUGGESTIONS = [
  "Current trending LIC plans",
  "Best high-return policies 2024",
  "Top LIC plans for child education",
  "Compare Jeevan Labh vs Anand",
  "Latest LIC tax saving news"
];

const AskExpertChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'ai', 
      text: "Hello! I'm your Smart LIC Assistant. I'm currently tracking the latest market trends to find the best policy leads for you. What financial goal can I help you reach today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async (customPrompt?: string) => {
    const textToSend = customPrompt || input;
    if (!textToSend.trim() || isLoading) return;
    
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsLoading(true);

    try {
      const response = await askExpert(textToSend);
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: response.text,
        sources: response.sources
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "I'm having trouble searching right now. Please call Suresh directly at 9908968539 for the latest updates." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 bg-blue-700 text-white p-4 rounded-full shadow-2xl hover:bg-blue-800 hover:scale-110 transition-all border-2 border-white/20 group"
        title="Find Trending LIC Leads"
      >
        <div className="relative">
          <Bot className="w-6 h-6" />
          <div className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-[8px] font-black px-1.5 py-0.5 rounded-full shadow-sm animate-bounce group-hover:animate-none">
            LIVE
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[480px] h-[650px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-gradient-to-r from-blue-700 to-indigo-900 p-5 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2.5 rounded-2xl">
                <TrendingUp className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <span className="font-bold block text-sm leading-none">Market Intelligence Bot</span>
                <span className="text-[10px] text-blue-200 flex items-center mt-1">
                  <Globe className="w-2.5 h-2.5 mr-1 animate-pulse" /> Real-time Lead Discovery
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[92%] p-4 rounded-2xl shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-700 text-white rounded-br-none' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center">
                        <Zap className="w-3 h-3 mr-1 text-yellow-500" /> Verified Market Sources
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {msg.sources.map((source, idx) => (
                          <a 
                            key={idx}
                            href={source.uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[9px] bg-slate-50 text-blue-700 px-2 py-1.5 rounded-lg hover:bg-blue-100 transition-colors border border-slate-100 flex items-center max-w-full overflow-hidden"
                          >
                            <Globe className="w-2 h-2 mr-1 shrink-0" />
                            <span className="truncate">{source.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 rounded-bl-none shadow-sm flex items-center space-x-3">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-300"></div>
                  </div>
                  <span className="text-[10px] font-black text-blue-800 uppercase tracking-tighter">Analysing Google Search Trends...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            {/* Quick Suggestions */}
            {!isLoading && messages.length < 4 && (
              <div className="flex overflow-x-auto pb-3 gap-2 no-scrollbar">
                {QUICK_SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(s)}
                    className="whitespace-nowrap bg-blue-50 text-blue-700 text-[10px] font-bold px-3 py-2 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors flex items-center"
                  >
                    <TrendingUp className="w-3 h-3 mr-1.5" />
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask for current best policy leads..."
                className="flex-grow p-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium"
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="bg-blue-700 text-white p-3.5 rounded-2xl hover:bg-blue-800 transition-all disabled:opacity-50 shadow-xl shadow-blue-100 flex items-center justify-center min-w-[50px]"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AskExpertChat;

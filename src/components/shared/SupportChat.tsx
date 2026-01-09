"use client";
import { useState } from 'react';
import { MessageCircle, X, Send, ShieldCheck } from 'lucide-react';

export default function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-manrope">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-tof-navy text-white p-4 rounded-full shadow-2xl hover:bg-tof-blue transition-all group relative"
        >
          <MessageCircle size={28} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-tof-blue border-2 border-white rounded-full"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[380px] h-[500px] rounded-[32px] shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-tof-navy p-6 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-heading text-xl font-bold">TofHost Support</h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 bg-tof-green rounded-full"></span>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Typically replies in 5m</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-6 overflow-y-auto bg-gray-50/50 space-y-4">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
              <p className="text-sm text-gray-600">Peace be with you! How can we help you with your spiritual marketplace experience today?</p>
            </div>
            
            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase px-2">
              <ShieldCheck size={12} className="text-tof-blue" /> Protected by TofHost Escrow
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-2xl border border-gray-100 focus-within:border-tof-blue transition-all">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 bg-transparent px-3 py-2 text-sm outline-none"
              />
              <button className="bg-tof-blue text-white p-2 rounded-xl hover:bg-tof-navy transition-all">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
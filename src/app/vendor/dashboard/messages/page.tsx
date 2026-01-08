"use client";
import { Send, User, CheckCheck } from "lucide-react";

const chats = [
  { id: 1, user: "Kemi Ade", lastMsg: "Is the Queens Garment still available?", time: "2m ago", unread: true },
  { id: 2, user: "Brother Samuel", lastMsg: "Thank you, I received the Bible.", time: "1h ago", unread: false },
];

export default function VendorMessages() {
  return (
    <div className="h-[calc(100vh-160px)] flex bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm">
      
      {/* Chat List Sidebar */}
      <div className="w-80 border-r border-gray-100 flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <h2 className="font-heading text-xl font-bold">Messages</h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div key={chat.id} className={`p-4 flex gap-3 cursor-pointer hover:bg-gray-50 transition-colors ${chat.unread ? 'bg-tof-blue-light/30' : ''}`}>
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                <User size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-sm truncate">{chat.user}</h4>
                  <span className="text-[10px] text-gray-400">{chat.time}</span>
                </div>
                <p className="text-xs text-gray-500 truncate">{chat.lastMsg}</p>
              </div>
              {chat.unread && <div className="w-2 h-2 bg-tof-blue rounded-full self-center"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-tof-blue-light rounded-full flex items-center justify-center text-tof-blue font-bold">K</div>
          <div>
            <h3 className="font-bold text-sm">Kemi Ade</h3>
            <p className="text-[10px] text-green-500 font-bold">● Online</p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50/50 space-y-4">
          <div className="flex justify-start">
            <div className="max-w-[70%] bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm">
              Is the Queens Garment still available in size Large?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[70%] bg-tof-blue text-white p-4 rounded-2xl rounded-tr-none shadow-sm text-sm">
              Yes, we have it in stock! I can ship it today if you order now.
              <div className="flex justify-end mt-1 opacity-70"><CheckCheck size={14} /></div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex gap-2 items-center bg-gray-50 p-2 rounded-2xl border border-gray-100">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 bg-transparent px-4 py-2 outline-none text-sm"
            />
            <button className="bg-tof-blue text-white p-3 rounded-xl hover:bg-tof-navy transition-all">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
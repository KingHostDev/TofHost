"use client";
import { Bell, Package, ShieldCheck, CreditCard, X } from "lucide-react";

interface NotificationCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

const notifications = [
  {
    id: 1,
    title: "Payment Secured",
    desc: "Your payment for Order #TOF-9201 is now held in escrow.",
    icon: <ShieldCheck className="text-tof-blue" />,
    time: "2 mins ago",
    isUnread: true
  },
  {
    id: 2,
    title: "Order Shipped",
    desc: "Ultimate Spiritual Store has dispatched your CCC Garment.",
    icon: <Package className="text-tof-green" />,
    time: "1 hour ago",
    isUnread: true
  },
  {
    id: 3,
    title: "Payout Approved",
    desc: "Admin has released ₦30,000 to your linked bank account.",
    icon: <CreditCard className="text-orange-500" />,
    time: "Yesterday",
    isUnread: false
  }
];

export default function NotificationCenter({ isOpen, onClose }: NotificationCenterProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-tof-navy/20 backdrop-blur-sm" onClick={onClose} />
      
      {/* Panel */}
      <aside className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-8 border-b border-gray-100 flex justify-between items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold text-tof-navy">Notifications</h2>
            <p className="font-manrope text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Stay Updated</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {notifications.map((notif) => (
            <div 
              key={notif.id} 
              className={`p-6 rounded-[24px] transition-all cursor-pointer flex gap-4 border ${
                notif.isUnread ? "bg-blue-50/30 border-blue-100" : "bg-white border-transparent hover:bg-gray-50"
              }`}
            >
              <div className="w-10 h-10 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                {notif.icon}
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-tof-navy text-sm font-manrope">{notif.title}</h4>
                  <span className="text-[10px] text-gray-400 font-bold">{notif.time}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed font-manrope">{notif.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 border-t border-gray-100">
          <button className="w-full py-4 text-sm font-bold text-tof-blue hover:text-tof-navy transition-colors font-manrope">
            Mark all as read
          </button>
        </div>
      </aside>
    </div>
  );
}
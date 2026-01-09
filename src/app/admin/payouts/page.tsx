"use client";
import { Banknote, CheckCircle, Clock, ExternalLink } from "lucide-react";

const payouts = [
  { id: "P-102", store: "Ultimate Spiritual", amount: "₦ 120,500", bank: "GTBank - 0123456789", status: "Pending" },
  { id: "P-101", store: "Divine Supplies", amount: "₦ 45,000", bank: "Zenith - 9876543210", status: "Completed" },
];

export default function AdminPayouts() {
  return (
    <div className="max-w-6xl font-manrope">
      <div className="mb-10">
        <h1 className="font-heading text-3xl font-bold text-tof-navy">Payout Requests</h1>
        <p className="text-gray-500">Approve and track fund transfers to verified vendors.</p>
      </div>

      <div className="grid gap-6">
        {payouts.map((pay) => (
          <div key={pay.id} className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4 hover:border-tof-blue transition-all">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${pay.status === 'Pending' ? 'bg-orange-50 text-orange-500' : 'bg-green-50 text-green-500'}`}>
                <Banknote size={24} />
              </div>
              <div>
                <h4 className="font-bold text-tof-navy">{pay.store}</h4>
                <p className="text-xs text-gray-400 font-bold uppercase">{pay.bank}</p>
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="text-xl font-bold text-tof-navy">{pay.amount}</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1">
                {pay.status === 'Pending' ? <Clock size={12} /> : <CheckCircle size={12} />} {pay.status}
              </p>
            </div>

            <div className="flex gap-2">
              {pay.status === 'Pending' && (
                <button className="bg-tof-blue text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-100 hover:bg-tof-navy transition-all">
                  Release Funds
                </button>
              )}
              <button className="p-3 bg-gray-50 text-gray-400 rounded-xl hover:text-tof-blue">
                <ExternalLink size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
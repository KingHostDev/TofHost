"use client";
import { Landmark, Store, Bell } from "lucide-react";

export default function VendorSettings() {
  return (
    <div className="max-w-4xl space-y-8 font-sans">
      <h1 className="font-heading text-3xl font-bold">Store Settings</h1>

      {/* Profile Settings */}
      <section className="bg-white p-8 rounded-[32px] border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Store className="text-tof-blue" />
          <h3 className="font-bold text-xl">Public Profile</h3>
        </div>
        <div className="grid gap-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gray-100 rounded-full border-2 border-white shadow-md overflow-hidden relative">
               <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-gray-400">LOGO</div>
            </div>
            <button className="text-sm font-bold text-tof-blue border-2 border-tof-blue/10 px-4 py-2 rounded-xl hover:bg-tof-blue-light transition-all">
              Change Logo
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Store Display Name" className="p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 ring-tof-blue" defaultValue="Ultimate Spiritual Store" />
            <input type="text" placeholder="Contact WhatsApp" className="p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 ring-tof-blue" />
          </div>
          <textarea placeholder="Store Bio (Shown to customers)" rows={3} className="p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 ring-tof-blue" />
        </div>
      </section>

      {/* Banking Settings */}
      <section className="bg-white p-8 rounded-[32px] border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Landmark className="text-tof-green" />
          <h3 className="font-bold text-xl">Withdrawal Account</h3>
        </div>
        <div className="p-4 bg-green-50 border border-green-100 rounded-2xl mb-6 flex justify-between items-center">
           <div>
             <p className="text-[10px] font-bold text-green-600 uppercase">Primary Bank</p>
             <p className="font-bold text-tof-navy">GTBank • **** 8920</p>
           </div>
           <button className="text-xs font-bold text-green-600 underline">Edit Bank</button>
        </div>
      </section>
    </div>
  );
}
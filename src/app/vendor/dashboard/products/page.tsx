"use client";
import { TrendingUp, Users, ShoppingCart, Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function VendorDashboard() {
  const stats = [
    { label: "Total Revenue", value: "₦450,000", icon: <Wallet />, trend: "+12.5%", isUp: true },
    { label: "Escrow Balance", value: "₦85,000", icon: <ShieldCheck />, trend: "Pending", isUp: true, color: "text-orange-500" },
    { label: "Active Orders", value: "12", icon: <ShoppingCart />, trend: "+2 today", isUp: true },
    { label: "Store Visits", value: "1,240", icon: <Users />, trend: "-3.1%", isUp: false },
  ];

  return (
    <div className="space-y-8 font-sans">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-heading text-4xl font-bold text-tof-navy">Welcome back, Ultimate Spiritual!</h1>
          <p className="text-gray-500 mt-1">Here is what's happening with your store today.</p>
        </div>
        <div className="bg-white p-2 rounded-2xl border border-gray-100 flex gap-2">
          <button className="px-4 py-2 bg-tof-blue-light text-tof-blue rounded-xl text-sm font-bold">Last 30 Days</button>
          <button className="px-4 py-2 text-gray-400 rounded-xl text-sm font-bold hover:bg-gray-50">90 Days</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-gray-50 rounded-2xl text-tof-blue">{stat.icon}</div>
              <div className={`flex items-center text-[10px] font-bold px-2 py-1 rounded-full ${stat.isUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {stat.isUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {stat.trend}
              </div>
            </div>
            <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            <h3 className={`text-2xl font-bold mt-1 ${stat.color || 'text-tof-navy'}`}>{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders Table */}
        <div className="lg:col-span-2 bg-white rounded-[40px] border border-gray-100 p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-heading text-xl font-bold">Recent Orders</h3>
            <button className="text-tof-blue text-sm font-bold hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((order) => (
              <div key={order} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center font-bold text-tof-blue">#00{order}</div>
                  <div>
                    <p className="font-bold text-sm">Queens Garment (L)</p>
                    <p className="text-xs text-gray-400">Paid via Card • 2h ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm">₦30,000</p>
                  <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-bold uppercase">Processing</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Store Health / KYC Status */}
        <div className="bg-tof-navy rounded-[40px] p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-heading text-xl font-bold mb-4">Store Verification</h3>
            <p className="text-white/60 text-sm mb-6">Your store is currently 80% verified. Complete KYC to unlock faster payouts.</p>
            
            <div className="w-full bg-white/10 h-2 rounded-full mb-8">
              <div className="bg-tof-blue w-[80%] h-full rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            </div>

            <button className="w-full bg-white text-tof-navy font-bold py-4 rounded-2xl hover:bg-tof-blue hover:text-white transition-all">
              Complete KYC
            </button>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-tof-blue/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}

// Sub-component for icons
function ShieldCheck(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
  );
}
"use client";
import { TrendingUp, Users, ShoppingBag, Banknote, Clock, ArrowUpRight } from "lucide-react";

const stats = [
  { label: "Total Revenue", value: "₦ 1,420,000", change: "+12.5%", icon: <Banknote /> },
  { label: "Active Vendors", value: "48", change: "+3", icon: <Users /> },
  { label: "Pending Orders", value: "12", change: "Action Req.", icon: <Clock /> },
  { label: "Marketplace Sales", value: "320", change: "+18%", icon: <ShoppingBag /> },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-10 font-manrope">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-heading text-4xl font-bold text-tof-navy">Marketplace Pulse</h1>
          <p className="text-gray-500 mt-2">Real-time overview of TofHost operations.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-gray-100 rounded-2xl font-bold text-sm shadow-sm">Export Report</button>
          <button className="px-6 py-3 bg-tof-blue text-white rounded-2xl font-bold text-sm shadow-lg shadow-blue-100">Broadcast Message</button>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative overflow-hidden group hover:border-tof-blue transition-all">
            <div className="text-gray-400 mb-4 group-hover:text-tof-blue transition-colors">
              {stat.icon}
            </div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-2xl font-bold text-tof-navy mt-1">{stat.value}</h3>
            <span className="text-[10px] font-bold text-tof-green flex items-center gap-1 mt-2">
              <TrendingUp size={12} /> {stat.change}
            </span>
          </div>
        ))}
      </div>

      {/* Main Admin View: Two Columns */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Platform Activity */}
        <div className="lg:col-span-2 bg-tof-navy rounded-[40px] p-10 text-white relative overflow-hidden">
          <h3 className="font-heading text-2xl font-bold mb-6">Recent Sales Activity</h3>
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-tof-blue rounded-full flex items-center justify-center font-bold">U</div>
                  <div>
                    <p className="font-bold text-sm">New Order from Ultimate Spiritual</p>
                    <p className="text-[10px] text-white/40 uppercase font-bold">2 minutes ago</p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-tof-blue" />
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-tof-blue/10 rounded-full blur-[100px] -mr-32 -mb-32"></div>
        </div>

        {/* System Health */}
        <div className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-sm">
          <h3 className="font-heading text-xl font-bold text-tof-navy mb-6">System Status</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-500">Escrow System</span>
              <span className="w-3 h-3 bg-tof-green rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-500">Paystack Gateway</span>
              <span className="w-3 h-3 bg-tof-green rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-500">Vendor API</span>
              <span className="w-3 h-3 bg-tof-green rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
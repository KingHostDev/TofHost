"use client";
import Header from "@/components/layout/Header";
import { Package, Heart, Settings, LogOut, MapPin } from "lucide-react";

export default function CustomerProfile() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1 space-y-4">
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 text-center">
              <div className="w-20 h-20 bg-tof-blue-light rounded-full flex items-center justify-center text-tof-blue text-2xl font-bold mx-auto mb-4">
                JD
              </div>
              <h2 className="font-heading text-xl font-bold text-tof-navy">John Doe</h2>
              <p className="text-sm text-gray-400 font-manrope">Lagos, Nigeria</p>
            </div>
            
            <nav className="bg-white rounded-[32px] p-4 shadow-sm border border-gray-100 font-manrope font-bold text-sm text-gray-500">
              <button className="w-full flex items-center gap-3 p-4 bg-gray-50 text-tof-blue rounded-2xl transition-all">
                <Package size={20} /> My Orders
              </button>
              <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all">
                <Heart size={20} /> Wishlist
              </button>
              <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all">
                <MapPin size={20} /> Addresses
              </button>
              <button className="w-full flex items-center gap-3 p-4 text-red-400 hover:bg-red-50 rounded-2xl transition-all mt-8">
                <LogOut size={20} /> Logout
              </button>
            </nav>
          </aside>

          {/* Main Content: Recent Orders */}
          <div className="lg:col-span-3 space-y-6">
            <h1 className="font-heading text-3xl font-bold text-tof-navy">Recent Orders</h1>
            
            {[1, 2].map((order) => (
              <div key={order} className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gray-100 rounded-2xl overflow-hidden">
                     {/* Image Placeholder */}
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Order #TOF-9201</p>
                    <h4 className="font-bold text-tof-navy font-manrope">Premium White Sutana (CCC)</h4>
                    <p className="text-sm text-tof-blue font-bold">₦ 22,500</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right hidden md:block">
                    <p className="text-xs font-bold text-gray-400 uppercase">Status</p>
                    <p className="text-sm font-bold text-tof-green">In Transit</p>
                  </div>
                  <button className="px-6 py-3 border border-gray-100 rounded-xl font-bold text-sm hover:bg-gray-50">View Details</button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
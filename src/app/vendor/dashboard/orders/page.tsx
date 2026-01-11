"use client";
import { Package, Truck, CheckCircle, Clock, ShieldCheck } from "lucide-react";

const orders = [
  {
    id: "TOF-9201",
    customer: "Sister Mary",
    item: "Premium White Sutana (CCC)",
    amount: "₦ 22,500",
    date: "Jan 09, 2026",
    status: "Escrow Secured", // This is the status after Paystack success
    isPaid: true
  },
  {
    id: "TOF-9155",
    customer: "Brother John",
    item: "Anglican Hymn Book",
    amount: "₦ 4,500",
    date: "Jan 08, 2026",
    status: "Shipped",
    isPaid: true
  }
];

export default function VendorOrders() {
  return (
    <div className="font-manrope max-w-6xl">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="font-heading text-3xl font-bold text-tof-navy">Order Management</h1>
          <p className="text-gray-500">Track shipments and release escrow funds.</p>
        </div>
        <div className="bg-blue-50 text-tof-blue px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-blue-100">
          <ShieldCheck size={16} /> Escrow Protection Active
        </div>
      </div>

      <div className="grid gap-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-tof-blue transition-all">
            
            {/* Order Info */}
            <div className="flex items-center gap-6 w-full md:w-auto">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold ${
                order.status === 'Escrow Secured' ? 'bg-green-50 text-tof-green' : 'bg-gray-50 text-gray-400'
              }`}>
                {order.status === 'Escrow Secured' ? <ShieldCheck /> : <Truck />}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-lg text-tof-navy">{order.item}</h3>
                  <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-md uppercase">{order.id}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Customer: <span className="font-bold text-tof-navy">{order.customer}</span> • {order.date}
                </p>
              </div>
            </div>

            {/* Status & Action */}
            <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
              <div className="text-right">
                <p className="font-heading text-xl font-bold text-tof-blue">{order.amount}</p>
                <p className={`text-[10px] font-bold uppercase tracking-widest flex items-center justify-end gap-1 ${
                  order.status === 'Escrow Secured' ? 'text-tof-green' : 'text-orange-500'
                }`}>
                  {order.status}
                </p>
              </div>

              {order.status === 'Escrow Secured' ? (
                <button className="bg-tof-navy text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-tof-blue transition-all shadow-lg shadow-blue-100 flex items-center gap-2">
                  <Package size={18} /> Mark Shipped
                </button>
              ) : (
                <button className="bg-gray-50 text-gray-400 px-6 py-3 rounded-xl font-bold text-sm cursor-not-allowed">
                  In Transit
                </button>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
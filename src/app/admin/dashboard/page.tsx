import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import { 
  Users, 
  ShoppingBag, 
  ShieldCheck, 
  Banknote, 
  CheckCircle, 
  XCircle 
} from "lucide-react";

const prisma = new PrismaClient();

export default async function AdminDashboard() {
  const session = await auth();

  // 1. Security Check: Ensure only Admins can view this page
  if (!session || session.user.role !== "ADMIN") {
    redirect("/login");
  }

  // 2. Data Fetching (Parallel)
  const [vendors, orders, escrowStats] = await Promise.all([
    prisma.vendorProfile.findMany({ include: { user: true } }),
    prisma.order.findMany({ take: 5, orderBy: { createdAt: 'desc' } }),
    prisma.order.aggregate({
      _sum: { amount: true },
      where: { status: "ESCROW_SECURED" }
    })
  ]);

  const stats = [
    { label: "Total Vendors", value: vendors.length, icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Active Orders", value: orders.length, icon: ShoppingBag, color: "text-orange-600", bg: "bg-orange-50" },
    { label: "In Escrow", value: `₦${(escrowStats._sum.amount || 0).toLocaleString()}`, icon: ShieldCheck, color: "text-green-600", bg: "bg-green-50" },
    { label: "Platform Rev.", value: "₦182,500", icon: Banknote, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-manrope p-8">
      {/* Header */}
      <header className="flex justify-between items-end mb-10">
        <div>
          <h1 className="font-heading text-4xl font-bold text-[#0A0A0A] tracking-tight">
            TofHost Command Center
          </h1>
          <p className="text-gray-500 mt-2">Welcome back, {session.user.name}. Monitoring platform health.</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">System Live</span>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className={`${stat.bg} ${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}>
              <stat.icon size={24} />
            </div>
            <p className="text-xs font-bold uppercase text-gray-400 tracking-widest">{stat.label}</p>
            <h2 className="text-2xl font-bold text-[#0A0A0A] mt-1">{stat.value}</h2>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Vendor Approval Section */}
        <section className="lg:col-span-2 bg-white rounded-[40px] border border-gray-100 p-8 shadow-sm">
          <h3 className="font-heading text-xl font-bold text-[#0A0A0A] mb-6">Vendor Verification</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-[10px] uppercase font-bold tracking-[0.2em] border-b border-gray-50">
                  <th className="pb-4">Store Details</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {vendors.map((vendor) => (
                  <tr key={vendor.id} className="group">
                    <td className="py-5">
                      <div className="font-bold text-[#0A0A0A]">{vendor.storeName}</div>
                      <div className="text-xs text-gray-400">{vendor.user.email}</div>
                    </td>
                    <td className="py-5">
                      {vendor.isVerified ? (
                        <span className="flex items-center gap-1 text-green-600 text-xs font-bold">
                          <CheckCircle size={14} /> Verified
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-orange-500 text-xs font-bold">
                          <XCircle size={14} /> Pending
                        </span>
                      )}
                    </td>
                    <td className="py-5 text-right">
                      <button className="bg-gray-50 hover:bg-[#0A0A0A] hover:text-white text-[#0A0A0A] px-4 py-2 rounded-xl text-xs font-bold transition-all">
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="bg-white rounded-[40px] border border-gray-100 p-8 shadow-sm">
          <h3 className="font-heading text-xl font-bold text-[#0A0A0A] mb-6">Recent Orders</h3>
          <div className="space-y-6">
            {orders.length > 0 ? orders.map((order) => (
              <div key={order.id} className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-[#0A0A0A] text-white rounded-2xl flex items-center justify-center font-bold text-xs">
                    #
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#0A0A0A]">Order {order.id.slice(-5)}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-tighter">₦{order.amount.toLocaleString()}</p>
                  </div>
                </div>
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
              </div>
            )) : (
              <p className="text-gray-400 text-sm text-center py-10">No recent orders found.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
import Link from 'next/link';
import { LayoutDashboard, Users, ShieldCheck, ShoppingCart, Settings } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-tof-navy text-white p-6 flex flex-col gap-8">
        <h2 className="font-heading text-2xl font-bold px-4">Admin Console</h2>
        <nav className="flex flex-col gap-2 text-sm font-bold">
          <Link href="/admin" className="flex items-center gap-3 p-4 hover:bg-white/10 rounded-2xl transition-all">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="/admin/vendors" className="flex items-center gap-3 p-4 hover:bg-white/10 rounded-2xl transition-all">
            <Users size={20} /> Manage Vendors
          </Link>
          <Link href="/admin/kyc" className="flex items-center gap-3 p-4 hover:bg-white/10 rounded-2xl transition-all text-tof-blue">
            <ShieldCheck size={20} /> Verification Requests
          </Link>
          <Link href="/admin/orders" className="flex items-center gap-3 p-4 hover:bg-white/10 rounded-2xl transition-all">
            <ShoppingCart size={20} /> All Orders
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
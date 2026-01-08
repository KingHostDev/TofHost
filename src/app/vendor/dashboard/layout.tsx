"use client";
import Link from 'next/link';
import { LayoutDashboard, Package, MessageSquare, Settings, LogOut, ShieldCheck } from 'lucide-react';

export default function VendorLayout({ children }: { children: React.ReactNode }) {
  const sidebarLinks = [
    { icon: <LayoutDashboard size={20} />, label: 'Overview', href: '/vendor/dashboard' },
    { icon: <Package size={20} />, label: 'My Products', href: '/vendor/dashboard/products' },
    { icon: <MessageSquare size={20} />, label: 'Customer Chats', href: '/vendor/dashboard/messages' },
    { icon: <ShieldCheck size={20} />, label: 'KYC Verification', href: '/vendor/dashboard/kyc' },
    { icon: <Settings size={20} />, label: 'Settings', href: '/vendor/dashboard/settings' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-tof-navy text-white flex flex-col p-6 fixed h-full">
        <h1 className="font-heading text-2xl font-bold mb-10">TofHost <span className="text-xs block text-tof-blue">VENDOR HUB</span></h1>
        <nav className="flex-1 space-y-2">
          {sidebarLinks.map((link) => (
            <Link key={link.label} href={link.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors">
              {link.icon}
              <span className="font-medium">{link.label}</span>
            </Link>
          ))}
        </nav>
        <button className="flex items-center gap-3 p-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors">
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 flex-1 p-10">
        {children}
      </main>
    </div>
  );
}
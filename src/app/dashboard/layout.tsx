export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Dashboard Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-100">
          <h2 className="font-heading text-xl font-bold tracking-tight">Vendor Hub</h2>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <a href="/dashboard" className="block px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-manrope font-bold text-sm">Overview</a>
          <a href="/dashboard/products" className="block px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 font-manrope text-sm transition-colors">My Products</a>
          <a href="/dashboard/sales" className="block px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 font-manrope text-sm transition-colors">Sales & Earnings</a>
          <a href="/dashboard/settings" className="block px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 font-manrope text-sm transition-colors">Store Settings</a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <span className="font-manrope text-sm text-slate-500">Welcome back, Vendor</span>
          <button className="bg-black text-white px-4 py-1.5 rounded-lg font-manrope text-sm font-bold">
            Add New Product
          </button>
        </header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
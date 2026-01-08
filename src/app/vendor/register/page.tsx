"use client";
import Link from 'next/link';

export default function VendorRegister() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2 font-sans">
      {/* Left: Branding/Marketing */}
      <div className="hidden lg:flex bg-tof-blue p-12 flex-col justify-between text-white">
        <Link href="/" className="font-heading text-3xl font-bold">TofHost</Link>
        <div>
          <h1 className="font-heading text-5xl font-bold mb-6">Grow your spiritual business with us.</h1>
          <p className="text-xl text-white/80">Join 500+ verified vendors selling to the global CCC and Christian community.</p>
        </div>
        <p className="text-sm opacity-60">© 2026 TofHost Marketplace</p>
      </div>

      {/* Right: Register Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="font-heading text-3xl font-bold text-tof-navy">Create Vendor Account</h2>
            <p className="text-gray-500 mt-2">Start selling your church items today.</p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase text-gray-400">First Name</label>
                <input type="text" className="w-full p-4 mt-1 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 ring-tof-blue outline-none" placeholder="John" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-gray-400">Last Name</label>
                <input type="text" className="w-full p-4 mt-1 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 ring-tof-blue outline-none" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold uppercase text-gray-400">Store Name</label>
              <input type="text" className="w-full p-4 mt-1 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 ring-tof-blue outline-none" placeholder="Ultimate Spiritual Store" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase text-gray-400">Email Address</label>
              <input type="email" className="w-full p-4 mt-1 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 ring-tof-blue outline-none" placeholder="vendor@email.com" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase text-gray-400">Password</label>
              <input type="password" className="w-full p-4 mt-1 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 ring-tof-blue outline-none" placeholder="••••••••" />
            </div>
            
            <button className="w-full bg-tof-blue text-white font-bold py-4 rounded-2xl hover:bg-tof-navy transition-all shadow-lg shadow-blue-200">
              CREATE ACCOUNT
            </button>
          </form>

          <p className="text-center text-sm text-gray-500">
            Already a vendor? <Link href="/vendor/login" className="text-tof-blue font-bold">Login here</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
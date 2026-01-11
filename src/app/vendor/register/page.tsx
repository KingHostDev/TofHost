"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Store, Mail, Lock, User, ArrowRight, Loader2, XCircle } from "lucide-react"; // XCircle fixed
import Link from "next/link";
import { Button } from "@/components/shared/Button"; // Using new shared component
import { cn } from "@/lib/utils"; // Using fixed utility

export default function VendorRegister() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    storeName: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/vendor/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Registration failed");

      router.push("/login?message=Account created. Please sign in.");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD] flex items-center justify-center p-4 font-manrope">
      <div className="max-w-[480px] w-full">
        {/* Brand Header using Vastago Grotesk [cite: 2026-01-08] */}
        <div className="text-center mb-8">
          <h1 className="font-heading text-5xl font-bold text-[#0A0A0A] tracking-tight mb-3">
            TofHost
          </h1>
          <p className="text-gray-500 font-medium">Start your spiritual business journey.</p>
        </div>

        {/* Form Container with custom rounding */}
        <div className={cn(
          "bg-white rounded-[40px] shadow-xl shadow-gray-100/50 border border-gray-100 p-8 md:p-10"
        )}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-bold flex items-center gap-2">
                <XCircle size={16} /> {error}
              </div>
            )}

            <div className="space-y-4">
              {/* Store Name */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-400 tracking-[0.2em] ml-2">Store Name</label>
                <div className="relative group">
                  <input
                    required
                    type="text"
                    placeholder="Celestial Apothecary"
                    className="w-full p-4 bg-gray-50 rounded-2xl border border-transparent outline-none focus:bg-white focus:border-[#0A0A0A] transition-all"
                    onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                  />
                  <Store className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#0A0A0A]" size={20} />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-400 tracking-[0.2em] ml-2">Email Address</label>
                <div className="relative group">
                  <input
                    required
                    type="email"
                    placeholder="merchant@tofhost.com"
                    className="w-full p-4 bg-gray-50 rounded-2xl border border-transparent outline-none focus:bg-white focus:border-[#0A0A0A] transition-all"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#0A0A0A]" size={20} />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-400 tracking-[0.2em] ml-2">Secure Password</label>
                <div className="relative group">
                  <input
                    required
                    type="password"
                    placeholder="••••••••"
                    className="w-full p-4 bg-gray-50 rounded-2xl border border-transparent outline-none focus:bg-white focus:border-[#0A0A0A] transition-all"
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#0A0A0A]" size={20} />
                </div>
              </div>
            </div>

            {/* Using the shared Button component */}
            <Button
              type="submit"
              size="xl"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  Launch Store <ArrowRight size={20} />
                </>
              )}
            </Button>
          </form>

          <p className="text-center mt-8 text-sm text-gray-400">
            Already have a store?{" "}
            <Link href="/login" className="text-[#0A0A0A] font-bold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shared/Button";
import { Zap, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      // The middleware will handle the redirection based on role
      router.push("/dashboard/products");
      router.refresh();
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 font-manrope">
      <div className="max-w-md w-full p-8 bg-white rounded-[40px] shadow-xl border border-slate-100">
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-slate-500 font-medium">Log in to manage your TofHost assets</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-sm font-bold text-center">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                name="email"
                type="email"
                required
                placeholder="vendor@tofhose.com"
                className="w-full pl-12 pr-5 py-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                name="password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full pl-12 pr-5 py-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-black text-white py-5 rounded-2xl font-heading text-lg shadow-lg hover:bg-blue-600 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            <Zap size={20} fill="currentColor" /> Access Dashboard
          </Button>
        </form>
      </div>
    </div>
  );
}
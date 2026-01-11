"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-all font-manrope font-bold w-full group"
    >
      <LogOut size={20} className="group-hover:rotate-12 transition-transform" />
      <span>Sign Out</span>
    </button>
  );
}
"use client";
import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Truck, Banknote, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Verify Your Identity",
    desc: "To protect our buyers, all vendors must upload a valid government ID (NIN, PVC, or Passport). Once verified, you get the 'Verified' badge.",
    icon: <ShieldCheck size={48} className="text-tof-blue" />,
    color: "bg-blue-50"
  },
  {
    title: "List Your Items",
    desc: "Upload high-quality photos of your spiritual garments. Set your price and specify the denomination (e.g., CCC, Anglican).",
    icon: <CheckCircle2 size={48} className="text-tof-green" />,
    color: "bg-green-50"
  },
  {
    title: "Secure Escrow Sales",
    desc: "When a customer buys, TofHost holds the money safely. You ship the item, and once the customer receives it, the funds are released to you.",
    icon: <Banknote size={48} className="text-orange-500" />,
    color: "bg-orange-50"
  }
];

export default function VendorOnboarding() {
  const [current, setCurrent] = useState(0);

  return (
    <main className="min-h-screen bg-white font-manrope flex items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-12">
        <div className="text-center space-y-4">
          <div className={`w-24 h-24 ${steps[current].color} rounded-[32px] flex items-center justify-center mx-auto transition-colors duration-500`}>
            {steps[current].icon}
          </div>
          <h1 className="font-heading text-4xl font-bold text-tof-navy">{steps[current].title}</h1>
          <p className="text-gray-500 text-lg leading-relaxed">{steps[current].desc}</p>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2">
          {steps.map((_, i) => (
            <div key={i} className={`h-2 rounded-full transition-all duration-300 ${current === i ? "w-8 bg-tof-blue" : "w-2 bg-gray-200"}`} />
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {current < steps.length - 1 ? (
            <button 
              onClick={() => setCurrent(current + 1)}
              className="w-full bg-tof-navy text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-tof-blue transition-all"
            >
              Next Step <ArrowRight size={20} />
            </button>
          ) : (
            <Link 
              href="/vendor/register" 
              className="w-full bg-tof-blue text-white py-5 rounded-2xl font-bold text-center hover:bg-tof-navy transition-all shadow-xl shadow-blue-100"
            >
              Get Started Now
            </Link>
          )}
          <button 
            onClick={() => current > 0 && setCurrent(current - 1)}
            className={`text-sm font-bold text-gray-400 hover:text-tof-navy ${current === 0 ? "invisible" : "visible"}`}
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}
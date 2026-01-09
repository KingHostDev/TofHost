"use client";
import { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { useCart } from "@/context/CartContext";
import { ShieldCheck, Lock, CreditCard } from "lucide-react";
import Header from "@/components/layout/Header";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  // These will now resolve correctly without errors
  const { cartTotal, cartItems } = useCart(); 
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const config = {
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: cartTotal * 100, // Naira to Kobo
    publicKey: 'pk_test_your_public_key_here', // Replace with your real key
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = () => {
    router.push("/checkout/success");
  };

  const onClose = () => {
    alert("Payment closed. Your spiritual items are still safe in your cart.");
  };

  return (
    <main className="min-h-screen bg-gray-50 font-manrope">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          <div className="space-y-8">
            <div>
              <h1 className="font-heading text-4xl font-bold text-tof-navy mb-2">Checkout</h1>
              <p className="text-gray-500">Secure your items with TofHost Escrow Protection.</p>
            </div>

            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400 tracking-widest px-1">Full Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 ring-tof-blue outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400 tracking-widest px-1">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 ring-tof-blue outline-none transition-all"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[48px] shadow-xl shadow-gray-200/50 h-fit space-y-8 sticky top-32">
            <h3 className="font-heading text-2xl font-bold text-tof-navy">Order Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-500">
                <span>Items ({cartItems.length})</span>
                <span className="font-bold text-tof-navy">₦{cartTotal.toLocaleString()}</span>
              </div>
              <div className="h-px bg-gray-100 my-4"></div>
              <div className="flex justify-between items-end">
                <span className="font-bold text-tof-navy">Total to Pay</span>
                <span className="font-heading text-3xl font-bold text-tof-blue">₦{cartTotal.toLocaleString()}</span>
              </div>
            </div>

            <button 
              onClick={() => {
                if(!email || !name) return alert("Please provide your name and email.");
                initializePayment({onSuccess, onClose});
              }}
              className="w-full bg-tof-navy text-white py-6 rounded-3xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-tof-blue transition-all"
            >
              <CreditCard size={22} /> Pay with Paystack
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
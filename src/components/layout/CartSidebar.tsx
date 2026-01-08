"use client";
import { useCart } from "@/context/CartContext";
import { X, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";

export default function CartSidebar() {
  const { cart, isCartOpen, toggleCart, removeFromCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={toggleCart} />
      
      {/* Sidebar Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="font-heading text-2xl font-bold">Your Basket</h2>
          <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag size={48} className="mx-auto text-gray-200 mb-4" />
              <p className="text-gray-400 font-bold">Your basket is empty</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex gap-4 items-center">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                  <Image src={item.img} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-tof-navy">{item.name}</h4>
                  <p className="text-tof-blue font-bold">{item.price}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50">
          <button className="w-full bg-tof-blue text-white font-bold py-4 rounded-2xl hover:bg-tof-navy transition-all shadow-lg">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
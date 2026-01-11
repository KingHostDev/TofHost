"use client";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/utils";

export function ProductCard({ product }: any) {
  const { addToCart } = useCart(); // Connect to the cart logic

  return (
    <div className="group cursor-pointer font-manrope">
      <div className="aspect-square bg-gray-100 rounded-[32px] mb-4 overflow-hidden relative">
        {/* Hover overlay for Add to Cart */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all flex items-center justify-center">
           <button 
             onClick={(e) => {
               e.stopPropagation(); // Prevents clicking the card from triggering other actions
               addToCart(product);
             }}
             className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 bg-white text-black px-6 py-3 rounded-full font-bold shadow-lg transition-all hover:scale-105 active:scale-95"
           >
             Add to Cart
           </button>
        </div>
      </div>
      
      {/* Product Title - Switched to Vastago Grotesk via font-heading */}
      <h3 className="text-lg font-bold text-[#0A0A0A] font-heading">{product.name}</h3>
      
      <p className="text-gray-500 text-sm mb-2 font-manrope">{product.vendorName}</p>
      
      <p className="text-xl font-black font-manrope">{formatCurrency(product.price)}</p>
    </div>
  );
}
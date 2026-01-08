"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

// Updated with Unsplash Spiritual/Church specific images
const products = [
  { 
    id: "1", 
    name: "Queens Garment", 
    price: "₦ 30,000", 
    vendor: "Ultimate Spiritual", 
    img: "https://images.unsplash.com/photo-1548685913-a55d7f3e8b15?q=80&w=800&auto=format&fit=crop", 
    tag: "CCC" 
  },
  { 
    id: "2", 
    name: "Altar Cloth", 
    price: "₦ 5,000", 
    vendor: "Faith Works", 
    img: "https://images.unsplash.com/photo-1579450325049-7c87c06a3e23?q=80&w=800&auto=format&fit=crop", 
    tag: "Anglican" 
  },
  { 
    id: "3", 
    name: "Standard Sutana", 
    price: "₦ 15,000", 
    vendor: "Ultimate Spiritual", 
    img: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?q=80&w=800&auto=format&fit=crop", 
    tag: "CCC" 
  },
  { 
    id: "4", 
    name: "Hymn Book", 
    price: "₦ 2,500", 
    vendor: "Divine Supply", 
    img: "https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?q=80&w=800&auto=format&fit=crop", 
    tag: "Catholic" 
  },
];

export default function PopularItems() {
  const { addToCart } = useCart();

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-heading font-bold text-tof-navy">Popular items</h2>
        <button className="text-sm font-bold text-gray-400 hover:text-tof-blue transition-colors">See all ›</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          // SAFETY GATE: If product data is broken, skip this card instead of crashing
          if (!product || !product.id) return null;

          return (
            <div key={product.id} className="group bg-white rounded-[32px] p-4 border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
              
              {/* 1. CLICKABLE IMAGE: Goes to Product Detail */}
              <Link 
                href={`/product/${product.id}`} 
                className="block relative h-64 w-full mb-4 rounded-[24px] overflow-hidden bg-gray-100"
              >
                <Image 
                  src={product.img} 
                  alt={product.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <span className="bg-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase">
                    {product.tag}
                  </span>
                </div>
              </Link>

              <div className="space-y-1 px-2">
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-heading font-bold text-lg hover:text-tof-blue transition-colors cursor-pointer line-clamp-1">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-gray-400 text-xs italic">Verified spiritual quality</p>
                <p className="font-bold text-tof-navy mt-2 text-xl">{product.price}</p>
                
                <div className="flex items-center gap-2 py-2">
                   <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
                   <span className="text-[10px] font-bold text-gray-600 underline cursor-pointer">{product.vendor}</span>
                   <span className="text-[10px] text-green-500 font-bold">● verified</span>
                </div>

                {/* 2. ADD TO CART BUTTON */}
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-tof-blue text-white font-bold py-3 rounded-xl mt-2 
                             hover:bg-tof-navy hover:shadow-lg active:scale-95 transition-all duration-300"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
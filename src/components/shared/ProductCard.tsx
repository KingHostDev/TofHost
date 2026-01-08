"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();

  if (!product || !product.id) return null;

  return (
    <div className="group bg-white rounded-[32px] p-4 border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
      
      {/* Click image to go to Product Detail Page */}
      <Link href={`/product/${product.id}`} className="block relative h-64 w-64 mb-4 rounded-[24px] overflow-hidden bg-gray-100">
        <Image 
          src={product.img || '/images/placeholder.jpg'} 
          alt={product.name} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute top-3 right-3">
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
        <p className="font-bold text-tof-navy mt-2 text-xl">{product.price}</p>
        
        <div className="flex items-center gap-2 py-2">
           <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
           <span className="text-[10px] font-bold text-gray-600 underline">{product.vendor}</span>
           <span className="text-[10px] text-green-500 font-bold">● verified</span>
        </div>

        <button 
          onClick={() => addToCart(product)}
          className="w-full bg-tof-blue text-white font-bold py-3 rounded-xl mt-4 
                     hover:bg-tof-navy hover:shadow-lg active:scale-95 transition-all duration-300"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
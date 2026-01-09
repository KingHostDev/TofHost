"use client";

import { useState } from "react";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";
import { Badge } from "@/components/shared/Badge";

export function ProductCard({ product }: any) {
  return (
    <div className="group cursor-pointer font-manrope space-y-4">
      <Link href={`/shop/product/${product.id}`}>
        <div className="aspect-[4/5] bg-gray-50 rounded-[40px] border border-gray-100 overflow-hidden relative transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/5">
          <div className="absolute top-6 left-6">
            <Badge className="bg-white/80 backdrop-blur-md border-none text-black font-bold text-[10px] tracking-widest uppercase">
              {product.category?.name}
            </Badge>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-gray-300 italic">No Image</div>
        </div>

        <div className="px-2 mt-4 space-y-1">
          <div className="flex justify-between items-start">
            <h3 className="font-heading text-xl font-bold text-[#0A0A0A] group-hover:underline decoration-2 underline-offset-4">
              {product.name}
            </h3>
            <p className="font-black text-lg text-[#0A0A0A]">
              {formatCurrency(product.price)}
            </p>
          </div>
          <p className="text-sm text-gray-400 font-medium">
            by <span className="text-gray-600">{product.vendor?.storeName}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}
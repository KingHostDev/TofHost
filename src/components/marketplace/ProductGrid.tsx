import { formatCurrency } from "@/lib/utils";

export function ProductCard({ product }: any) {
  return (
    <div className="group cursor-pointer font-manrope">
      <div className="aspect-square bg-gray-100 rounded-[32px] mb-4 overflow-hidden relative">
        {/* Product Image Placeholder */}
      </div>
      <h3 className="text-lg font-bold text-[#0A0A0A]">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-2">{product.vendorName}</p>
      <p className="text-xl font-black">{formatCurrency(product.price)}</p>
    </div>
  );
}
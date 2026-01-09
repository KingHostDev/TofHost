"use client";

import { useRouter } from "next/navigation";
import { sendInquiry } from "../../actions"; // Adjusted path to reach shop/actions.ts
import { formatCurrency } from "@/lib/utils";

export default function ProductDetailPage({ product }: { product: any }) {
  const router = useRouter();

  if (!product) return <div className="p-20 text-center font-manrope text-gray-400">Loading tool...</div>;

  async function handleSubmit(formData: FormData) {
    const result = await sendInquiry(formData);
    if (result.success) {
      router.push("/shop/success");
    } else {
      alert(result.error || "Something went wrong.");
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 font-manrope">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="aspect-square bg-gray-50 rounded-[60px] border border-gray-100 flex items-center justify-center">
          <span className="text-gray-300 italic">Product Image</span>
        </div>

        <div className="flex flex-col justify-center space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
              {product.category?.name}
            </span>
            <h1 className="font-heading text-5xl font-bold mt-2 text-[#0A0A0A]">
              {product.name}
            </h1>
            <p className="text-3xl font-black mt-4">
              {formatCurrency(product.price)}
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg">
            {product.description || "No description provided."}
          </p>

          <div className="bg-gray-50 p-8 rounded-[40px] border border-gray-100">
            <h3 className="font-heading text-xl font-bold mb-4 text-[#0A0A0A]">
              Inquire About This Item
            </h3>
            <form action={handleSubmit} className="space-y-4">
              <input type="hidden" name="productId" value={String(product.id)} />
              <input 
                name="email" 
                type="email" 
                placeholder="Your Email" 
                required
                className="w-full p-4 bg-white rounded-2xl border-none outline-none focus:ring-2 focus:ring-black transition-all"
              />
              <textarea 
                name="message" 
                placeholder="I'm interested in this..." 
                required
                rows={3}
                className="w-full p-4 bg-white rounded-2xl border-none outline-none focus:ring-2 focus:ring-black transition-all"
              />
              <button 
                type="submit" 
                className="w-full py-5 bg-[#0A0A0A] text-white rounded-2xl font-heading uppercase tracking-widest text-sm hover:bg-gray-900 transition-all"
              >
                Send Message to {product.vendor?.storeName}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
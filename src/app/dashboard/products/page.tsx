import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/shared/Button";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";
import { Plus, Package, Edit3, Trash2 } from "lucide-react";
// Make sure this action exists or create it in the same folder
import { deleteProduct } from "./actions"; 

export default async function VendorProductsPage() {
  const session = await auth();
  
  const products = await prisma.product.findMany({
    where: { vendor: { userId: session?.user?.id } },
    include: { category: true },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8 font-manrope">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          {/* Using Vastago Grotesk for the Heading */}
          <h1 className="font-heading text-5xl font-bold tracking-tight text-[#0A0A0A]">
            Inventory
          </h1>
          <p className="text-gray-500 mt-2 text-lg font-manrope">
            Manage your hosting plans, digital assets, and tool availability.
          </p>
        </div>
        <Link href="/dashboard/products/add">
          <Button className="font-heading px-8 py-6 rounded-2xl gap-2 shadow-lg shadow-black/5 bg-blue-600 hover:bg-blue-700 text-white border-none transition-all">
            <Plus size={20} />
            Add New Listing
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
        {products.length === 0 ? (
          <div className="py-24 text-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
              <Package size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 font-heading">No products yet</h3>
            <p className="text-gray-500 mb-8 font-manrope">Start selling by adding your first hosting tool to the marketplace.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-manrope">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="p-6 text-xs font-bold uppercase text-gray-400 tracking-[0.2em] font-heading">Product Details</th>
                  <th className="p-6 text-xs font-bold uppercase text-gray-400 tracking-[0.2em] font-heading">Category</th>
                  <th className="p-6 text-xs font-bold uppercase text-gray-400 tracking-[0.2em] font-heading">Price</th>
                  <th className="p-6 text-xs font-bold uppercase text-gray-400 tracking-[0.2em] font-heading text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {products.map((product) => (
                  <tr key={product.id} className="group hover:bg-gray-50/30 transition-colors">
                    <td className="p-6">
                      <span className="font-bold text-[#0A0A0A] text-lg block font-manrope">{product.name}</span>
                      <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">ID: {product.id.slice(-6)}</span>
                    </td>
                    <td className="p-6">
                      <span className="px-4 py-1.5 bg-blue-50 rounded-full text-xs font-bold text-blue-600 uppercase">
                        {product.category?.name || 'General'}
                      </span>
                    </td>
                    <td className="p-6 font-black text-xl text-[#0A0A0A]">
                      {formatCurrency(product.price)}
                    </td>
                    <td className="p-6">
                      <div className="flex justify-end gap-2">
                        <Link href={`/dashboard/products/${product.id}`}>
                          <button className="p-3 hover:bg-black hover:text-white rounded-xl transition-all text-gray-400">
                            <Edit3 size={18} />
                          </button>
                        </Link>
                        {/* Inline Server Action for Deletion */}
                        <form action={async () => { "use server"; await deleteProduct(product.id); }}>
                          <button className="p-3 hover:bg-red-50 text-red-400 rounded-xl transition-all">
                            <Trash2 size={18} />
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
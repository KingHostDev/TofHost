import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { notFound, redirect } from "next/navigation";
import { Button } from "@/components/shared/Button";
import Link from "next/link";
import { ArrowLeft, Zap, Globe } from "lucide-react";
import { updateProduct } from "../../../dashboard/products/actions";

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) redirect("/login");

  const { id } = await params;

  // Fetch product and categories
  const [product, categories] = await Promise.all([
    prisma.product.findUnique({
      where: { id, vendor: { userId: session.user.id } },
    }),
    prisma.category.findMany()
  ]);

  if (!product) notFound();

  // Create a bound version of the action to include the ID
  const updateProductWithId = updateProduct.bind(null, product.id);

  return (
    <div className="max-w-3xl mx-auto py-10 px-6 font-manrope">
      <div className="mb-10">
        <Link href="/dashboard/products" className="flex items-center gap-2 text-slate-500 hover:text-black mb-6 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-wider">Cancel Editing</span>
        </Link>
        <h1 className="font-heading text-5xl font-bold tracking-tight text-slate-900">Edit Listing</h1>
        <p className="text-slate-500 mt-2">Update your tool's pricing, category, or specs.</p>
      </div>

      <form action={updateProductWithId} className="space-y-8">
        <section className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
          <h2 className="font-heading text-xl font-black uppercase tracking-widest text-blue-600 flex items-center gap-2">
            <Zap size={20} /> Details
          </h2>
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Product Name</label>
            <input 
              name="name"
              defaultValue={product.name}
              required
              className="w-full px-5 py-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Price (USD)</label>
              <input 
                name="price"
                type="number"
                step="0.01"
                defaultValue={product.price}
                required
                className="w-full px-5 py-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Category</label>
              <select 
                name="categoryId"
                defaultValue={product.categoryId}
                className="w-full px-5 py-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 font-medium appearance-none"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
          <h2 className="font-heading text-xl font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
            <Globe size={20} /> Specifications
          </h2>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Description</label>
            <textarea 
              name="description"
              defaultValue={product.description || ""}
              rows={5}
              className="w-full px-5 py-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 font-medium resize-none"
            />
          </div>
        </section>

        <div className="flex justify-end">
          <Button type="submit" className="bg-black text-white px-12 py-7 rounded-2xl font-heading text-lg shadow-xl hover:bg-blue-600 transition-all">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}
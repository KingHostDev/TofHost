import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import { Button } from "@/components/shared/Button";
import { updateProduct } from "../actions";

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const session = await auth();
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: { id },
    include: { category: true }
  });

  // Security: Check if product exists and belongs to the user
  if (!product) notFound();
  
  const vendor = await prisma.vendorProfile.findUnique({ where: { userId: session?.user?.id } });
  if (product.vendorId !== vendor?.id) redirect("/dashboard/products");

  return (
    <div className="max-w-2xl mx-auto space-y-8 font-manrope">
      <h1 className="font-heading text-4xl font-bold tracking-tight">Edit Product</h1>
      <div className="bg-white p-8 rounded-[40px] border border-gray-100">
        <form action={updateProduct} className="space-y-6">
          <input type="hidden" name="id" value={product.id} />
          
          <div className="grid gap-2">
            <label className="text-xs font-bold uppercase text-gray-400">Product Name</label>
            <input name="name" defaultValue={product.name} required className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-black" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label className="text-xs font-bold uppercase text-gray-400">Price (₦)</label>
              <input name="price" type="number" defaultValue={product.price} required className="p-4 bg-gray-50 rounded-2xl outline-none" />
            </div>
            <div className="grid gap-2">
              <label className="text-xs font-bold uppercase text-gray-400">Stock Count</label>
              <input name="stock" type="number" defaultValue={product.stock} required className="p-4 bg-gray-50 rounded-2xl outline-none" />
            </div>
          </div>

          <Button type="submit" size="xl" className="w-full font-heading">
            Update Listing
          </Button>
        </form>
      </div>
    </div>
  );
}
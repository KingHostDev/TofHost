"use client";
import { Button } from "@/components/shared/Button";
import { createProduct } from "../actions";

export default function AddProduct() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 font-manrope">
      <h1 className="font-heading text-4xl font-bold tracking-tight">New Listing</h1>
      <div className="bg-white p-8 rounded-[40px] border border-gray-100">
        <form action={createProduct} className="space-y-6">
          <div className="grid gap-2">
            <label className="text-xs font-bold uppercase text-gray-400">Product Name</label>
            <input name="name" required className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-black" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label className="text-xs font-bold uppercase text-gray-400">Price (₦)</label>
              <input name="price" type="number" required className="p-4 bg-gray-50 rounded-2xl outline-none" />
            </div>
            <div className="grid gap-2">
              <label className="text-xs font-bold uppercase text-gray-400">Category</label>
              <input name="category" required className="p-4 bg-gray-50 rounded-2xl outline-none" placeholder="e.g. Oils" />
            </div>
          </div>

          <Button type="submit" size="xl" className="w-full font-heading">
            Publish to Marketplace
          </Button>
        </form>
      </div>
    </div>
  );
}
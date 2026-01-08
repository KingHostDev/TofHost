"use client";
import { useState } from "react";
import { ImagePlus, Info } from "lucide-react";

export default function AddProduct() {
  const [status, setStatus] = useState("Active");

  return (
    <div className="max-w-4xl">
      <h1 className="font-heading text-3xl font-bold mb-8">Add New Product</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Product Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">Product Name</label>
              <input type="text" className="w-full p-4 mt-1 bg-gray-50 rounded-2xl outline-none focus:ring-2 ring-tof-blue" placeholder="e.g. Premium CCC Sutana" />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">Description</label>
              <textarea rows={4} className="w-full p-4 mt-1 bg-gray-50 rounded-2xl outline-none focus:ring-2 ring-tof-blue" placeholder="Describe the material, size, etc." />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase">Price (₦)</label>
                <input type="number" className="w-full p-4 mt-1 bg-gray-50 rounded-2xl outline-none focus:ring-2 ring-tof-blue" placeholder="30000" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase">Category</label>
                <select className="w-full p-4 mt-1 bg-gray-50 rounded-2xl outline-none focus:ring-2 ring-tof-blue">
                  <option>CCC Items</option>
                  <option>Anglican</option>
                  <option>Catholic</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Media & Status */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-[32px] border border-gray-100">
            <h4 className="font-bold mb-4">Product Image</h4>
            <div className="aspect-square bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center text-gray-400 hover:text-tof-blue hover:border-tof-blue transition-all cursor-pointer">
              <ImagePlus size={40} />
              <span className="text-[10px] mt-2 font-bold uppercase tracking-widest">Upload Image</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-[32px] border border-gray-100">
            <h4 className="font-bold mb-4">Availability</h4>
            <div className="space-y-3">
              {["Active", "Sold Out", "Draft"].map((s) => (
                <label key={s} className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="radio" 
                    name="status" 
                    checked={status === s} 
                    onChange={() => setStatus(s)}
                    className="w-4 h-4 text-tof-blue" 
                  />
                  <span className={`text-sm font-bold ${status === s ? 'text-tof-navy' : 'text-gray-400'}`}>{s}</span>
                </label>
              ))}
            </div>
          </div>
          
          <button className="w-full bg-tof-blue text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-tof-navy transition-all">
            PUBLISH PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
}
"use client";
import { useState } from 'react';
import Header from "@/components/layout/Header";
import ProductCard from "@/components/shared/ProductCard";
import { Filter, Search, SlidersHorizontal } from "lucide-react";

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "CCC", "Anglican", "Catholic", "Pentecostal"];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Search & Filter Bar */}
      <section className="bg-gray-50 py-12 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-heading text-4xl font-bold text-center text-tof-navy">Explore Marketplace</h1>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search for sutanas, bibles, or garments..." 
                  className="w-full pl-12 pr-6 py-4 bg-white rounded-2xl shadow-sm border-none focus:ring-2 ring-tof-blue outline-none font-manrope"
                />
              </div>
              <button className="bg-tof-navy text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-tof-blue transition-all">
                <SlidersHorizontal size={20} /> Filters
              </button>
            </div>

            {/* Quick Category Chips */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                    activeFilter === cat 
                    ? 'bg-tof-blue text-white shadow-lg shadow-blue-100' 
                    : 'bg-white text-gray-400 hover:text-tof-navy border border-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Results */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <p className="text-gray-400 font-manrope font-bold text-sm">Showing 24 products for <span className="text-tof-navy">"{activeFilter}"</span></p>
          <select className="bg-transparent font-bold text-sm outline-none border-none text-tof-navy cursor-pointer">
            <option>Sort by: Newest</option>
            <option>Price: Low to High</option>
            <option>Best Selling</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* We reuse the ProductCard we built yesterday */}
          {/* Sample Product */}
          <ProductCard product={{
            id: "shop-1",
            name: "Lace Trimmed Sutana",
            price: "₦ 25,000",
            img: "https://images.unsplash.com/photo-1548685913-a55d7f3e8b15",
            vendor: "Grace Garments",
            tag: "CCC",
            isNew: true
          }} />
        </div>
      </section>
    </main>
  );
}
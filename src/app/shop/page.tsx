import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Filter, ChevronDown, LayoutGrid, List } from "lucide-react";
import Image from "next/image";

const categories = ["All Items", "CCC", "Anglican", "Catholic", "Methodist", "Pentecostal"];

const products = [
  { id: 1, name: "Queens Garment", price: "₦ 30,000", vendor: "Ultimate Spiritual", img: "/images/prod1.jpg", tag: "CCC" },
  { id: 2, name: "Altar Cloth", price: "₦ 5,000", vendor: "Ultimate Spiritual", img: "/images/prod2.jpg", tag: "CCC" },
  { id: 3, name: "Sutana", price: "₦ 5,000", vendor: "Ultimate Spiritual", img: "/images/prod3.jpg", tag: "Anglican" },
  { id: 4, name: "Hymn Book", price: "₦ 2,500", vendor: "Faith Works", img: "/images/cat2.jpg", tag: "Catholic" },
  // ... add more as needed
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Header for Shop */}
      <section className="bg-tof-blue-light py-12 px-4 md:px-10">
        <div className="container mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-tof-navy mb-4">Marketplace</h1>
          <p className="text-gray-600 max-w-lg">Find everything you need for your spiritual journey, verified for quality and tradition.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* SIDEBAR - Filters */}
          <aside className="w-full lg:w-64 space-y-8">
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Denominations</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-tof-blue focus:ring-tof-blue" />
                    <span className="text-gray-600 group-hover:text-tof-blue transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h3 className="font-heading font-bold text-lg mb-4">Price Range</h3>
              <input type="range" min="0" max="100000" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-tof-blue" />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>₦0</span>
                <span>₦100k+</span>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT - Product Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap justify-between items-center mb-8 gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-sm font-bold bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-tof-blue transition-all">
                  <Filter size={16} /> Filters
                </button>
                <p className="text-sm text-gray-500">Showing {products.length} items</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-white rounded-lg border border-gray-200 p-1">
                  <button className="p-1.5 bg-gray-100 rounded-md"><LayoutGrid size={18} /></button>
                  <button className="p-1.5 text-gray-400 hover:text-tof-navy"><List size={18} /></button>
                </div>
                <button className="flex items-center gap-2 text-sm font-bold bg-white px-4 py-2 rounded-lg border border-gray-200">
                  Sort by: Newest <ChevronDown size={16} />
                </button>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="group bg-white rounded-[32px] p-4 border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 w-full mb-4 rounded-[24px] overflow-hidden bg-gray-100">
                    <Image src={product.img} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-3 right-3">
                      <span className="bg-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase">{product.tag}</span>
                    </div>
                  </div>

                  <div className="space-y-1 px-2">
                    <h3 className="font-heading font-bold text-lg group-hover:text-tof-blue transition-colors">{product.name}</h3>
                    <p className="font-bold text-tof-navy text-xl">{product.price}</p>
                    
                    <div className="flex items-center gap-2 py-2">
                       <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
                       <span className="text-[10px] font-bold text-gray-600 underline decoration-gray-300">{product.vendor}</span>
                       <span className="text-[10px] text-green-500 font-bold">● verified</span>
                    </div>

                    <button className="w-full bg-tof-blue text-white font-bold py-3 rounded-xl mt-2 
                                     hover:bg-tof-navy hover:shadow-lg active:scale-95 transition-all duration-300">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
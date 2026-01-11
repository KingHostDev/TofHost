"use client";
import Header from "@/components/layout/Header";
import ProductCard from "@/components/shared/ProductCard";
import { BadgeCheck, MapPin, Star, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function VendorProfilePage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch vendor data based on the slug
  const store = {
    name: "Ultimate Spiritual Store",
    bio: "Premium CCC garments and spiritual essentials since 2015. We specialize in Turkish fabrics and custom embroidery.",
    location: "Lagos, Nigeria",
    rating: 4.8,
    reviews: 124,
    isVerified: true,
    banner: "https://images.unsplash.com/photo-1548685913-a55d7f3e8b15"
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Store Header */}
      <section className="bg-gray-50 border-b border-gray-100 pb-12">
        <div className="h-48 w-full relative bg-tof-navy overflow-hidden">
           <Image src={store.banner} alt="Banner" fill className="object-cover opacity-40 blur-sm" />
        </div>
        
        <div className="container mx-auto px-4 -mt-16 relative z-10">
          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl shadow-gray-200/50 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 bg-tof-blue-light rounded-3xl flex items-center justify-center text-tof-blue font-heading text-4xl font-bold border-4 border-white shadow-lg">
              {store.name[0]}
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="font-heading text-4xl font-bold text-tof-navy">{store.name}</h1>
                {store.isVerified && (
                  <div className="flex items-center gap-1 bg-green-50 text-tof-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    <BadgeCheck size={14} /> Verified Vendor
                  </div>
                )}
              </div>
              
              <p className="font-manrope text-gray-500 max-w-2xl leading-relaxed">{store.bio}</p>
              
              <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-400 font-manrope">
                <div className="flex items-center gap-2"><MapPin size={16} /> {store.location}</div>
                <div className="flex items-center gap-2 text-tof-navy"><Star size={16} className="text-orange-400 fill-orange-400" /> {store.rating} ({store.reviews} Reviews)</div>
              </div>
            </div>

            <button className="bg-tof-blue text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-tof-navy transition-all shadow-lg shadow-blue-100">
              <MessageCircle size={20} /> Chat with Vendor
            </button>
          </div>
        </div>
      </section>

      {/* Store Products */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-tof-navy">Store Inventory</h2>
          <div className="h-px flex-1 bg-gray-100 mx-8 hidden md:block"></div>
          <p className="font-manrope font-bold text-gray-400 uppercase text-xs tracking-widest">Showing 12 Items</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Reuse ProductCard for consistency */}
          <ProductCard product={{
            id: "v-prod-1",
            name: "Classic White Sutana",
            price: "₦ 18,500",
            img: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88",
            vendor: store.name,
            tag: "CCC",
            isNew: true
          }} />
        </div>
      </section>
    </main>
  );
}
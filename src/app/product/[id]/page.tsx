import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { MessageSquare, ShieldCheck, Truck } from "lucide-react";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  // In the future, we will fetch real data using the 'id'
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-12">
        <div className="relative aspect-square rounded-[40px] overflow-hidden bg-gray-100">
          <Image src="/images/prod1.jpg" alt="Product" fill className="object-cover" />
        </div>
        
        <div className="flex flex-col justify-center">
          <h1 className="font-heading text-5xl font-bold mb-4">Queens Garment</h1>
          <p className="text-3xl font-bold text-tof-blue mb-6">₦ 30,000</p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Beautifully crafted spiritual garment. Verified quality from top vendors.
          </p>
          
          <div className="flex gap-4 mb-8">
            <button className="flex-1 bg-tof-blue text-white font-bold py-4 rounded-2xl hover:bg-tof-navy transition-all">
              ADD TO CART
            </button>
            <button className="px-6 py-4 border-2 border-tof-navy rounded-2xl hover:bg-gray-50 transition-all">
              <MessageSquare />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-xs font-bold bg-gray-50 p-4 rounded-xl">
              <ShieldCheck className="text-tof-blue" /> Escrow Protected
            </div>
            <div className="flex items-center gap-2 text-xs font-bold bg-gray-50 p-4 rounded-xl">
              <Truck className="text-tof-blue" /> Fast Delivery
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
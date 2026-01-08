import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shared/ProductCard";
import { CheckCircle, MapPin, Calendar } from "lucide-react";

export default function PublicVendorProfile() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />
      
      {/* Vendor Header */}
      <div className="bg-tof-blue-light py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-xl overflow-hidden" />
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <h1 className="font-heading text-4xl font-bold text-tof-navy">Ultimate Spiritual Store</h1>
              <CheckCircle className="text-tof-blue fill-tof-blue-light" size={24} />
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium text-gray-500">
              <span className="flex items-center gap-1"><MapPin size={14}/> Lagos, Nigeria</span>
              <span className="flex items-center gap-1"><Calendar size={14}/> Joined Jan 2026</span>
              <span className="text-tof-green font-bold">98% Positive Feedback</span>
            </div>
          </div>
          <button className="md:ml-auto bg-tof-navy text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all">
            Follow Store
          </button>
        </div>
      </div>

      {/* Vendor Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-heading text-2xl font-bold mb-8">All Products from this Vendor</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* We'll use the same ProductCard component we built earlier */}
          <p className="text-gray-400 italic col-span-full">Vendor products will load here...</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
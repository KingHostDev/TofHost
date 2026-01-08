import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import CategoryGrid from "@/components/home/CategoryGrid";
import PopularItems from "@/components/home/PopularItems";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/layout/CartSidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      {/* The Header now contains the functional cart toggle */}
      <Header />
      
      {/* The Sidebar that slides out when you add items */}
      <CartSidebar />

      <HeroSection />
      
      {/* TrustStrip shows the "Verified Vendor" assurance */}
      <TrustStrip />
      
      {/* Grid for Denominations: CCC, Anglican, etc. */}
      <CategoryGrid />
      
      {/* The section where we fixed the Unsplash error */}
      <PopularItems /> 
      
      <Newsletter />
      <Footer />
    </main>
  );
}
import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { notFound } from "next/navigation";

export default async function VendorProfilePage({ 
  params 
}: { 
  params: { storeName: string } 
}) {
  // Use await for params in Next.js 15+
  const { storeName } = await params;
  const decodedName = decodeURIComponent(storeName);

  // Fetch vendor and their products with all necessary relations
  const vendor = await prisma.vendorProfile.findFirst({
    where: { storeName: decodedName },
    include: { 
      products: { 
        where: { isPublished: true }, 
        include: { 
          category: true, // Required by ProductCard props
          vendor: true    // Required so the card knows the store name
        },
        orderBy: { createdAt: 'desc' }
      } 
    }
  });

  if (!vendor) notFound();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-manrope">
      {/* Vendor Header */}
      <div className="text-center py-20 bg-gray-50 rounded-[60px] mb-16 border border-gray-100">
        <span className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400 mb-4 block">
          Verified Practitioner
        </span>
        <h1 className="font-heading text-6xl font-bold text-[#0A0A0A]">
          {vendor.storeName}
        </h1>
        <div className="mt-6 flex justify-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-400">
          <span>{vendor.products.length} Products</span>
          <span>•</span>
          <span>Joined {new Date(vendor.createdAt).getFullYear()}</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {vendor.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {vendor.products.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 italic">This vendor hasn't listed any items yet.</p>
        </div>
      )}
    </div>
  );
}
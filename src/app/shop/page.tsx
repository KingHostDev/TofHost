import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { Search } from "lucide-react";

export default async function ShopPage({ 
  searchParams 
}: { 
  searchParams: { q?: string; category?: string } 
}) {
  const { q, category } = await searchParams;

  const products = await prisma.product.findMany({
    where: {
      isPublished: true,
      name: { contains: q, },
      category: category ? { name: category } : undefined,
    },
    include: { vendor: true, category: true },
    orderBy: { createdAt: 'desc' }
  });

  const categories = await prisma.category.findMany();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-manrope">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 space-y-8">
          <div>
            <h3 className="font-heading text-sm font-black uppercase tracking-widest mb-4">Search</h3>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Find a tool..." 
                className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-black uppercase tracking-widest mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat.id}>
                  <button className="text-gray-500 hover:text-black font-medium transition-colors">
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Grid */}
        <main className="flex-1 space-y-10">
          <h1 className="font-heading text-6xl font-bold tracking-tighter">The Shop</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { Search } from "lucide-react";

// Next.js 15: Props must define searchParams as a Promise
interface ShopPageProps {
  searchParams: Promise<{ q?: string; category?: string }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  // 1. Await the searchParams (Required for Next.js 15)
  const params = await searchParams;
  const query = params.q || "";
  const categoryName = params.category;

  // 2. Fetch data from Prisma
  const [products, categories] = await Promise.all([
    prisma.product.findMany({
      where: {
        isPublished: true,
        // Using basic contains for maximum compatibility
        name: { 
          contains: query 
        },
        category: categoryName ? { name: categoryName } : undefined,
      },
      include: { 
        vendor: true,
        category: true 
      },
      orderBy: { createdAt: 'desc' }
    }),
    prisma.category.findMany()
  ]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-manrope">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Sidebar */}
        <aside className="w-full lg:w-64 space-y-8">
          <div>
            <h3 className="font-heading text-xs font-black uppercase tracking-widest mb-4">Search</h3>
            <div className="relative text-slate-900">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <form action="/shop" method="GET">
                <input 
                  name="q"
                  defaultValue={query}
                  type="text" 
                  placeholder="Find a tool..." 
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-black transition-all"
                />
              </form>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-xs font-black uppercase tracking-widest mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="/shop" className={`block py-1 font-medium transition-colors ${!categoryName ? 'text-black font-bold' : 'text-gray-500 hover:text-black'}`}>
                  All Products
                </a>
              </li>
              {categories.map((cat: any) => (
                <li key={cat.id}>
                  <a 
                    href={`/shop?category=${cat.name}`}
                    className={`block py-1 font-medium transition-colors ${categoryName === cat.name ? 'text-black font-bold' : 'text-gray-500 hover:text-black'}`}
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Grid */}
        <main className="flex-1 space-y-10">
          <h1 className="font-heading text-6xl font-bold tracking-tighter text-slate-900">The Shop</h1>
          
          {products.length === 0 ? (
            <div className="py-20 text-center border-2 border-dashed rounded-[32px]">
              <p className="text-gray-400 font-manrope">No products found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map((product: any) => (
                <ProductCard 
                  key={product.id} 
                  product={{
                    ...product,
                    vendorName: product.vendor?.name || "Official TofHost"
                  }} 
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
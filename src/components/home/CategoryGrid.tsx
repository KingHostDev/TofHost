const categories = [
  { name: "Holy Bibles", size: "small", img: "/images/cat1.jpg" },
  { name: "Hymn Books", size: "small", img: "/images/cat2.jpg" },
  { name: "Garments", size: "large", img: "/images/cat3.jpg" },
  { name: "Altar Supply", size: "large", img: "/images/cat4.jpg" },
  { name: "Church items", size: "small", img: "/images/cat5.jpg" },
  { name: "Thanksgiving items", size: "small", img: "/images/cat6.jpg" },
];

export default function CategoryGrid() {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-heading font-bold text-tof-navy">Shop by denomination ›</h2>
        <div className="flex gap-6 text-gray-400 font-medium text-sm">
          <button className="text-tof-navy border-b-2 border-tof-navy">All Items</button>
          <button>Anglican</button>
          <button>Catholic</button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[280px]">
        {categories.map((cat, i) => (
          <div 
            key={i} 
            className={`relative rounded-3xl overflow-hidden group cursor-pointer ${cat.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}`}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
            {/* Placeholder for images */}
            <div className="absolute inset-0 bg-gray-300 -z-10" /> 
            
            <div className="relative z-20 p-8 h-full flex flex-col justify-start">
              <h3 className="text-white text-3xl font-heading font-bold max-w-[120px] mb-4">
                {cat.name}
              </h3>
              <button className="bg-tof-blue text-white text-[10px] uppercase font-bold px-4 py-2 rounded-lg w-fit mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                Shop now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
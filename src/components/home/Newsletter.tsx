import Image from 'next/image';

export default function Newsletter() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 rounded-[40px] overflow-hidden min-h-[300px] flex items-center">
        <div className="p-8 md:p-16 z-10 w-full md:w-2/3">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-tof-navy leading-tight">
            Be Alerted with <br />
            New item <span className="text-tof-green">Listing!</span>
          </h2>
          
          <div className="mt-8 flex max-w-md bg-white rounded-full p-1 shadow-md border border-gray-200">
            <input 
              type="email" 
              placeholder="Your email" 
              className="flex-1 bg-transparent px-6 py-3 outline-none text-tof-navy font-manrope"
            />
            <button className="bg-tof-navy text-white px-8 py-3 rounded-full font-bold hover:bg-tof-blue transition-colors">
              Submit
            </button>
          </div>
        </div>

        {/* Lady Image on the right */}
        <div className="absolute right-0 bottom-0 h-full w-1/3 hidden md:block">
          <Image 
            src="/images/hero-lady.png" 
            alt="Newsletter" 
            fill 
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
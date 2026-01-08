import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="px-4 py-4 md:px-10 md:py-8">
      {/* Main Blue Container */}
      <div className="bg-tof-blue rounded-[40px] overflow-hidden relative min-h-[520px] md:min-h-[600px] flex items-center">
        
        {/* Subtle background glow/gradient to match design */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 md:px-20 grid md:grid-cols-2 items-center gap-10 relative z-10">
          
          {/* Left Content Column */}
          <div className="py-12 space-y-6">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/10 shadow-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase font-sans">
                Trusted by the CCC Community
              </span>
            </div>

            {/* Headline using Vastago Grotesk */}
            <h1 className="font-heading text-white text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Buy Spiritual and <br /> 
              Church items from <br />
              <span className="text-tof-navy">Verified Vendors</span>
            </h1>

            {/* Subtext using Manrope */}
            <p className="text-white/90 text-lg md:text-xl max-w-md font-sans leading-relaxed">
              Discover trusted Sutanas, Hymn Books, and Altar items. We ensure quality and fast delivery across Nigeria and beyond.
            </p>

            {/* UPDATED BUTTONS with Hover Effects */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Link 
                href="/shop" 
                className="bg-white text-tof-blue px-10 py-4 rounded-full font-bold shadow-lg 
                           hover:bg-tof-navy hover:text-white hover:-translate-y-1 transition-all duration-300 
                           active:scale-95 flex items-center justify-center min-w-[160px]"
              >
                Shop now
              </Link>
              
              <Link 
                href="/vendor/register" 
                className="bg-transparent border-2 border-white/40 text-white px-10 py-4 rounded-full font-bold 
                           hover:bg-white/10 hover:border-white transition-all duration-300 
                           active:scale-95 flex items-center justify-center min-w-[160px]"
              >
                Become a Vendor
              </Link>
            </div>
          </div>

          {/* Right Image Column (The Lady) */}
          <div className="relative h-[450px] md:h-[650px] w-full mt-auto hidden md:block">
            {/* Make sure your image is named 'hero-lady.png' inside 'public/images/' 
               The 'priority' attribute ensures it loads instantly without flickering
            */}
            <Image 
              src="/images/hero-lady.png" 
              alt="TofHost Marketplace Customer" 
              fill 
              className="object-contain object-bottom"
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
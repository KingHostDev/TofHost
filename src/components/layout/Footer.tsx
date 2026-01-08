import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-tof-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b border-gray-800 pb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-heading text-3xl font-bold">TofHost</h2>
            <p className="text-gray-400 max-w-xs font-manrope">
              A trusted spiritual marketplace for spiritual and church items, 
              serving the community with verified vendors.
            </p>
            <div className="space-y-2 text-sm">
              <p>support@tofhost.com</p>
              <p>+234 810 645 2258</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/how-it-works">How it works</Link></li>
              <li><Link href="/vendor/register">Become a Vendor</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Categories</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/shop/bibles">Bibles</Link></li>
              <li><Link href="/shop/hymnbooks">Hymn Books</Link></li>
              <li><Link href="/shop/garments">Garments</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2026 TofHost. All rights reserved.</p>
          <p className="max-w-md text-center md:text-right">
            TofHost is an independent marketplace; we vendor identity and marketplace product. 
            We do not GUARANTEE spiritual outcomes.
          </p>
        </div>
      </div>
    </footer>
  );
}
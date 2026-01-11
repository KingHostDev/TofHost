import Link from "next/link";

export default function InquirySuccessPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 font-manrope">
      <div className="max-w-xl w-full text-center space-y-8">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-10">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl">✓</div>
        </div>

        <h1 className="font-heading text-6xl font-bold tracking-tighter text-[#0A0A0A]">
          Inquiry Sent
        </h1>
        
        <p className="text-gray-500 text-lg leading-relaxed">
          The practitioner has been notified of your interest. They'll reach out to you directly to finalize your purchase.
        </p>

        <div className="pt-8">
          <Link href="/shop">
            <button className="px-10 py-5 bg-[#0A0A0A] text-white rounded-2xl font-heading uppercase tracking-widest text-sm hover:scale-[1.02] transition-transform">
              Return to Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
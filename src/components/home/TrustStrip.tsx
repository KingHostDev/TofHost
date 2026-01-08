import { ShieldCheck, Search, Headphones, Lock } from 'lucide-react';

const trustItems = [
  { icon: ShieldCheck, title: "Verified Vendors", desc: "Every seller on TofHost undergoes strict verification." },
  { icon: Search, title: "Easy Discovery", desc: "Find exactly what you need for your denomination." },
  { icon: Headphones, title: "Online Support", desc: "Instant help when you need it from our support team." },
  { icon: Lock, title: "Secure Payment", desc: "All transactions are protected by escrow." },
];

export default function TrustStrip() {
  return (
    <section className="py-10 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-tof-blue-light flex items-center justify-center rounded-lg">
                <item.icon className="w-6 h-6 text-tof-blue" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-tof-navy text-sm">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";
import Link from 'next/link';
import { ShieldCheck, Zap, Globe, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function VendorLandingPage() {
  const benefits = [
    {
      title: "Secure Escrow",
      desc: "Get paid safely. We hold funds until the customer receives their spiritual items.",
      icon: <ShieldCheck className="w-8 h-8 text-tof-blue" />,
    },
    {
      title: "Global Reach",
      desc: "Sell to the CCC and Christian community across Nigeria and the diaspora.",
      icon: <Globe className="w-8 h-8 text-tof-blue" />,
    },
    {
      title: "Low Commissions",
      desc: "Keep more of your profit. We only take a small fee to maintain the platform.",
      icon: <DollarSign className="w-8 h-8 text-tof-blue" />,
    },
    {
      title: "Instant Setup",
      desc: "List your first product in under 5 minutes with our easy dashboard.",
      icon: <Zap className="w-8 h-8 text-tof-blue" />,
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="bg-tof-navy py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <span className="bg-tof-blue/20 text-tof-blue text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
            TofHost Vendor Program
          </span>
          <h1 className="font-heading text-5xl md:text-7xl text-white mt-6 mb-8 max-w-4xl mx-auto leading-tight">
            Turn your spiritual business into a <span className="text-tof-blue">Global Store.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join the most trusted marketplace for garments, bibles, and church essentials. 
            Reach thousands of verified buyers daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/vendor/register" className="bg-tof-blue text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-tof-navy transition-all shadow-xl">
              Start Selling Today
            </Link>
            <Link href="/vendor/login" className="border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
              Vendor Login
            </Link>
          </div>
        </div>
        
        {/* Abstract Background Decor */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-tof-blue/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-tof-blue/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="p-8 rounded-[40px] bg-gray-50 border border-gray-100 hover:border-tof-blue transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{benefit.icon}</div>
              <h3 className="font-heading text-xl font-bold mb-3 text-tof-navy">{benefit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The "How it Works" Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-4xl font-bold text-tof-navy mb-6">Simple 3-step onboarding</h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Create Account", text: "Register with your store name and email." },
                  { step: "02", title: "Verify KYC", text: "Upload your ID to become a 'Verified Vendor'." },
                  { step: "03", title: "List & Sell", text: "Upload products and start receiving orders." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="font-heading text-4xl font-bold text-tof-blue/20">{item.step}</span>
                    <div>
                      <h4 className="font-bold text-lg text-tof-navy">{item.title}</h4>
                      <p className="text-gray-500">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full aspect-video bg-tof-navy rounded-[40px] shadow-2xl flex items-center justify-center p-8 overflow-hidden relative">
               <div className="text-white text-center">
                  <CheckCircle2 size={64} className="mx-auto text-tof-blue mb-4" />
                  <p className="font-heading text-2xl">Verified Seller Badge</p>
                  <p className="text-white/40 text-sm mt-2 font-manrope">The mark of trust on TofHost</p>
               </div>
               {/* Decorative glow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-tof-blue/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container mx-auto px-4 text-center">
        <div className="bg-tof-blue rounded-[48px] py-16 px-8 text-white">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Ready to scale your store?</h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto">Join the TofHost ecosystem today and give your products the visibility they deserve.</p>
          <Link href="/vendor/register" className="inline-flex items-center gap-2 bg-white text-tof-blue px-10 py-5 rounded-2xl font-bold text-lg hover:bg-tof-navy hover:text-white transition-all group">
            Get Started Now
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
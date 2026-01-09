"use client";
import Header from "@/components/layout/Header";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Choosing the Right Fabric for Your CCC Sutana",
    excerpt: "Not all white fabrics are created equal. Discover the difference between Turkish lace and local cotton...",
    author: "Admin",
    date: "Jan 10, 2026",
    category: "Guides"
  },
  {
    id: 2,
    title: "How TofHost Escrow Protects Your Payments",
    excerpt: "Learn how we keep your money safe until your spiritual items are delivered to your doorstep.",
    author: "Security Team",
    date: "Jan 08, 2026",
    category: "Safety"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Blog Hero */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-tof-navy mb-6">TofHost Insights</h1>
          <p className="font-manrope text-gray-500 text-lg max-w-2xl mx-auto">
            Expert guides on spiritual garments, marketplace safety, and church supplies.
          </p>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-video bg-gray-100 rounded-[40px] mb-8 overflow-hidden transition-all group-hover:shadow-2xl group-hover:shadow-blue-100/50">
                {/* Image Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold text-tof-blue uppercase tracking-widest font-manrope">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="text-gray-400 flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                </div>
                
                <h2 className="font-heading text-3xl font-bold text-tof-navy group-hover:text-tof-blue transition-colors leading-tight">
                  {post.title}
                </h2>
                
                <p className="font-manrope text-gray-500 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 font-bold text-tof-navy hover:gap-4 transition-all pt-2">
                  Read Full Article <ArrowRight size={18} className="text-tof-blue" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
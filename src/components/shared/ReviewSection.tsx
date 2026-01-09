"use client";
import { Star, ThumbsUp, User } from "lucide-react";

const reviews = [
  { id: 1, user: "Brother Samuel", rating: 5, comment: "The Turkish fabric on this CCC garment is top-notch. Highly recommended!", date: "2 days ago" },
  { id: 2, user: "Sister Mary", rating: 4, comment: "Beautiful design, though delivery took an extra day. Still worth it.", date: "1 week ago" },
];

export default function ReviewSection() {
  return (
    <section className="mt-20 border-t border-gray-100 pt-16 font-manrope">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Review Summary */}
        <div className="w-full md:w-1/3 space-y-4">
          <h3 className="font-heading text-3xl font-bold text-tof-navy">Customer Reviews</h3>
          <div className="flex items-center gap-4">
            <span className="text-5xl font-bold text-tof-blue font-heading">4.8</span>
            <div>
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mt-1">Based on 124 ratings</p>
            </div>
          </div>
          <button className="w-full bg-gray-50 text-tof-navy font-bold py-4 rounded-2xl hover:bg-gray-100 transition-all border border-gray-100">
            Write a Review
          </button>
        </div>

        {/* Individual Review List */}
        <div className="w-full md:w-2/3 space-y-8">
          {reviews.map((rev) => (
            <div key={rev.id} className="p-8 rounded-[32px] bg-white border border-gray-50 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-tof-blue-light rounded-full flex items-center justify-center text-tof-blue">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-tof-navy">{rev.user}</p>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">{rev.date}</p>
                  </div>
                </div>
                <div className="flex text-orange-400">
                  {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
              </div>
              <p className="text-gray-500 leading-relaxed italic">"{rev.comment}"</p>
              <button className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-tof-blue transition-colors">
                <ThumbsUp size={14} /> Helpful?
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, Menu, Bell, User } from 'lucide-react';
import { useCart } from "@/context/CartContext";
import NotificationCenter from "./NotificationCenter";

export default function Header() {
  const { cartCount, toggleCart } = useCart();
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo - Vastago Grotesk */}
        <Link href="/" className="font-heading text-2xl font-bold text-tof-navy tracking-tight">
          TofHost<span className="text-tof-blue">.</span>
        </Link>

        {/* Desktop Navigation - Manrope */}
        <nav className="hidden lg:flex items-center gap-8 font-manrope font-bold text-sm text-gray-500">
          <Link href="/shop" className="hover:text-tof-blue transition-colors">Marketplace</Link>
          <Link href="/vendor" className="hover:text-tof-blue transition-colors">Sell on TofHost</Link>
          <Link href="/about" className="hover:text-tof-blue transition-colors">Our Mission</Link>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-2 md:gap-5">
          {/* Search Trigger */}
          <button className="p-2 text-gray-400 hover:text-tof-blue transition-colors">
            <Search size={22} />
          </button>

          {/* Notification Bell with Unread Indicator */}
          <button 
            onClick={() => setIsNotifOpen(true)}
            className="p-2 text-gray-400 hover:text-tof-blue transition-colors relative"
            aria-label="Open Notifications"
          >
            <Bell size={22} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-tof-blue rounded-full border-2 border-white"></span>
          </button>

          {/* Cart Toggle */}
          <button 
            onClick={toggleCart}
            className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-2xl hover:bg-gray-100 transition-all group"
          >
            <ShoppingBag size={20} className="text-tof-navy group-hover:text-tof-blue" />
            <span className="font-manrope font-bold text-sm text-tof-navy">{cartCount}</span>
          </button>

          {/* Profile Link */}
          <Link href="/profile" className="hidden md:flex p-2 text-gray-400 hover:text-tof-blue transition-colors">
            <User size={22} />
          </Link>

          {/* Mobile Menu */}
          <button className="lg:hidden p-2 text-tof-navy">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Slide-over Notification Center Component */}
      <NotificationCenter isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} />
    </header>
  );
}
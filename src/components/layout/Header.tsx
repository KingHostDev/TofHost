"use client"; // This component needs to be a Client Component to use hooks like useState and useContext

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext'; // Import useCart

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, toggleCart } = useCart(); // Use cartCount and toggleCart from context

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Marketplace", href: "/shop" },
    { name: "Vendors", href: "/vendors" }, // Placeholder for future vendors page
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Replace with your actual logo if you have one */}
          <span className="font-heading text-2xl font-bold text-tof-navy">TofHost</span>
          {/* <Image src="/logo.png" alt="TofHost Logo" width={40} height={40} /> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-gray-600 font-medium hover:text-tof-blue transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Icons & Buttons */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:text-tof-blue transition-colors">
            <Search className="w-6 h-6" />
          </button>
          
          {/* Cart Icon - NOW TOGGLES THE SIDEBAR */}
          <button onClick={toggleCart} className="relative p-2 text-gray-600 hover:text-tof-blue transition-colors">
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-tof-green text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse-once">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-tof-blue transition-colors" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center py-10 animate-in slide-in-from-top-4 duration-300">
          <button 
            className="absolute top-4 right-4 p-2 text-gray-600 hover:text-tof-blue" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <nav className="flex flex-col gap-6 text-xl mt-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-tof-navy font-bold hover:text-tof-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
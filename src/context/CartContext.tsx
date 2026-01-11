"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Define the shape of a Cart Item
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// 2. Define the Context interface to clear the red lines in CartSidebar
interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  toggleCart: () => void;
  addToCart: (product: any) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Toggle state for the sidebar visibility
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  // Add item to cart or increment quantity if it exists
  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    // Optional: Open sidebar automatically when adding
    setIsCartOpen(true);
  };

  // Remove specific item
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  // Calculate totals for the Manrope-styled UI
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        toggleCart,
        addToCart,
        removeFromCart,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for easy access
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
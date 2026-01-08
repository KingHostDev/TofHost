"use client";
import React, { createContext, useContext, useState } from 'react';

type CartItem = {
  id: number | string;
  name: string;
  price: string;
  img: string;
};

interface CartContextType {
  cart: CartItem[];
  cartCount: number;
  isCartOpen: boolean;
  addToCart: (item: CartItem) => void;
  toggleCart: () => void;
  removeFromCart: (id: string | number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item]);
    setIsCartOpen(true); // Automatically open sidebar when item is added
  };

  const removeFromCart = (id: string | number) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <CartContext.Provider value={{ 
      cart, 
      cartCount: cart.length, 
      isCartOpen, 
      addToCart, 
      toggleCart,
      removeFromCart 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
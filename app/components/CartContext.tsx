"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  name: string;
  price: string;
  image: string;
  quantity: number;
  color: string;
  size: string;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (name: string, color: string, size: string) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (newItem: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) =>
          item.name === newItem.name &&
          item.color === newItem.color &&
          item.size === newItem.size
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === newItem.name &&
          item.color === newItem.color &&
          item.size === newItem.size
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        return [...prevCart, newItem];
      }
    });
  };

  const removeFromCart = (name: string, color: string, size: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(item.name === name && item.color === color && item.size === size)
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

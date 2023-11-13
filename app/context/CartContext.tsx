"use client";

import { Product } from "@/typings";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const CartContext = createContext<{
  products: Product[];
  loading: boolean;
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
}>({
  products: [],
  loading: true,
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

//create the provider
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        const productsData = await response.json();
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast.success("Item added to cart");
  };
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    toast.success("Item removed from cart");
  };
  return (
    <CartContext.Provider
      value={{ products, loading, cart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// create Use context hook
export function useCart() {
  const context = useContext(CartContext);
  return context;
}

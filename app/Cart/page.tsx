"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import CartContent from "./CartContent";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MegaMenu from "../components/layout/Megamenu";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const handleRemoveFromCart = (productId: string) => {
    removeFromCart(productId);
  };

  return (
    <>
      <Header />
      <MegaMenu />
      <div className="my-24">
      <CartContent cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      </div>
      <Footer />
    </>
  );
};

export default CartPage;

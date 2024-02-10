"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import CartContent from "./CartContent";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MegaMenu from "../components/layout/Megamenu";
import Link from "next/link";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const handleRemoveFromCart = (productId: string) => {
    removeFromCart(productId);
  };

  const productPrice = cart.reduce((total, item) => total + item.price, 0);
  const shippingPrice = 10;
  const totalPrice = productPrice + shippingPrice;

  return (
    <div className="">
      <Header />
      <MegaMenu />
      <div className="w-4/5 my-24 flex flex-col md:flex-row items-center justify-center space-y-4 mx-auto">
        <div className="w-full md:w-2/3 pr-0 md:pr-4">
          <CartContent
            cart={cart}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        </div>
        <div className="w-full md:w-1/3 pl-0 md:pl-4 border-l border-gray-300 ">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Products Price:</span>
              <span>${productPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>${shippingPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <Link href={"/Checkout"} className="productButton mt-4">
              Checkout
            </Link>
          </div>
        </div>
        <hr className="my-2 md:hidden" />
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;

"use client";
import React from "react";
import Header from "../components/layout/Header";
import MegaMenu from "../components/layout/Megamenu";
import Footer from "../components/layout/Footer";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const handleFormSubmit = (formData) => {
    // TODO handle form submission
    console.log(formData);
  };

  const { cart, removeFromCart } = useCart();

  const productPrice = cart.reduce((total, item) => total + item.price, 0);
  const shippingPrice = 10;
  const totalPrice = productPrice + shippingPrice;

  return (
    <>
      <Header />
      <MegaMenu />
      <div className="w-4/5 my-24 flex flex-col md:flex-row items-center justify-center space-y-4 mx-auto">
        <div className="w-full md:w-2/3 pr-0 md:pr-4">
          <CheckoutForm onSubmit={handleFormSubmit} />
        </div>
        <div className="w-full md:w-1/3 pl-0 md:pl-4 border-l border-gray-300 ">
          <OrderSummary
            productPrice={productPrice}
            shippingPrice={shippingPrice}
            totalPrice={totalPrice}
            cartItems={cart}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;

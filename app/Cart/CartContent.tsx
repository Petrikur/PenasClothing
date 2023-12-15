// components/CartContent.js

import React from "react";
import Image from "next/image";
import { Product } from "@/typings";

const CartContent = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="container mx-auto">
      <h1 className="mb-4 font-bold">Your items</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="space-y-6">
          {cart.map((product: Product) => (
            <li key={product.id} className="flex items-center border-b pb-2 mb-2">
              <div className="flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex-grow ml-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-2 md:mb-0">
                    <span>{product.title}</span>
                    <span className="block md:inline-block ml-0 md:ml-4 font-semibold underline">${product.price}</span>
                  </div>
                  <button className="productButton bg-red-600" onClick={() => handleRemoveFromCart(product.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartContent;

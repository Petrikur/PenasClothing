import React from "react";
import { Product } from "@/typings";
import Image from "next/image";

interface OrderSummaryProps {
  productPrice: number;
  shippingPrice: number;
  totalPrice: number;
  cartItems: Product[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  productPrice,
  shippingPrice,
  totalPrice,
  cartItems,
}) => {
  return (
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
      <div className="mt-8 mb-4">Your items </div>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              className="h-12 w-12 object-cover mr-4"
            />
            <span>{item.title}</span>
          </div>
          <span className="text-xs">${item.price.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
};

export default OrderSummary;

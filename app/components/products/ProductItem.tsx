import React from "react";
import type { Product } from "@/typings";

const ProductItem = (props: Product) => {
  return (
    <div className="card w-96 bg-base-100 min-h-[28rem] shadow-xl hover:transform transition duration-300 hover:scale-105 cursor-pointer">
      <figure>
        <img src={props.image} className="object-contain max-w-sm h-48" alt="Shoes" />
        </figure>
      <div className="card-body flex flex-col justify-between">
        <div>
          <h2 className="card-title mb-2">{props.title}</h2>
          <p>⭐ {props.rating.rate} / 5</p>
        </div>
        <div className="card-actions justify-end">
          <p className="text-2xl font-bold">€ {props.price}</p>
          <button className="btn text-white mt-2 bg-blue-500 hover:bg-blue-500">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

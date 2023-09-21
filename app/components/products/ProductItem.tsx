import React from "react";
import type { Product } from "@/typings";

const ProductItem = (props: Product) => {
  return (
    <div
      className="card w-96 max-h-[480px] bg-base-100 shadow-xl hover:transform
    transition duration-300 hover:scale-105"
    >
      <figure>
        <img src={props.image} className="object-cover" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-10">{props.title}</h2>

        <p> ⭐ {props.rating.rate} / 5</p>
        <div className="card-actions justify-end">
          <div className="flex"></div>
          <p className="text-2xl font-bold">€ {props.price} </p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/typings";
import ProductItem from "../components/products/ProductItem";
import Header from "../components/layout/Header";
import MegaMenu from "../components/layout/Megamenu";

function ShopProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<any>({});

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          `/api/products?filters=${JSON.stringify(filters)}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, [filters]);

  // TODO filters

  return (
    <>
    <Header />
    <hr className="border-1 border-black mx-12"></hr>
    <MegaMenu />
    <div className="mt-10"></div>
      <div className="flex items-center">
        <ul className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-12 mx-auto align-middle">
          {products.map((product) => (
            <ProductItem
              id={product.id}
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              rating={product.rating}
              image={product.image}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default ShopProducts;

"use client";
import { useEffect, useState } from "react";
import { Product, Rating } from "@/typings";
import ProductItem from "./ProductItem";

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
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
  }, []);

  return (
      <div className="flex justify-center items-center">
        <ul className="grid grid-cols-4 space-y-4 space-x-4 items-center">
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
  );
}

export default ProductList;

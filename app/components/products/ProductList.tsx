"use client";
import { useEffect, useState } from "react";
import { Product } from "@/typings";
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
    <div className="flex items-center">
      <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12 mx-auto align-middle">
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

"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/typings";
import ProductItem from "../components/products/ProductItem";
import Header from "../components/layout/Header";
import MegaMenu from "../components/layout/Megamenu";
import Link from "next/link";

function ShopProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
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
  
// Calculate the range of products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle page change
  const handlePageChange = (pageNumber:number) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Header />
      <hr className="border-1 border-black mx-12"></hr>
      <MegaMenu />
      <div className="mt-10"></div>
      <div className="flex items-center">
        <ul className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-12 mx-auto align-middle">
          {currentProducts.map((product) => (
            <Link key={product.id} href={`/Products/${product.id}`}>
              <ProductItem
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                rating={product.rating}
                image={product.image}
              />
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex justify-center mt-4">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`px-4 py-2 m-2 bg-gray-300 rounded-md ${
              currentPage === pageNumber ? "bg-gray-500" : ""
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </>
  );
}

export default ShopProducts;

"use client";

import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import MegaMenu from "@/app/components/layout/Megamenu";
import ProductItem from "@/app/components/products/ProductItem";
import React, { useEffect, useState } from "react";

const DynamicProducts = ({ params }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [category, subcategory, item] = params.slug;

        // Fetch data using category, subcategory, and item
        const response = await fetch(
          `/api/products?category=${category}&subcategory=${subcategory}&item=${item}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.slug]);

  return (
    <>
      <Header />
      <MegaMenu />
      <div className="py-4"> </div>
      <div>{params.slug[0]}</div>

      {data?.map((item, index) => {
        <ProductItem
          description={item.description}
          id={""}
          title={""}
          price={0}
          image={""}
          rating={{
            rate: 0,
            count: 0,
          }}
        />;
      })}
      <Footer />
    </>
  );
};

export default DynamicProducts;

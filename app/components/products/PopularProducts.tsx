"use client";
import React, { useEffect, useState,  } from "react";
import { Product } from "@/typings";
import ProductItem from "./ProductItem";
// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";
import "./slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function PopularProducts() {
  const [popularProducts, setPopularProducts] = useState<Product[]>([]);

  const settings = {
    dots: true,

    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1724,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1370,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 982,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    async function fetchPopularProducts() {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPopularProducts(data);
      } catch (error) {
        console.error("Error fetching popular products:", error);
      }
    }

    fetchPopularProducts();
  }, []);

  return (
    <div className="md:mx-24 mx-2">
      <Slider {...settings}>
        {popularProducts.map((product, index) => (
          <Link href={`/Products/${product.id}`} key={index}>
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
      </Slider>
    </div>
  );
}

export default PopularProducts;

"use client";
import { useContext, useEffect, useState } from "react";
import type { Product } from "@/typings";
import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import MegaMenu from "@/app/components/layout/Megamenu";
import { ProductDetails } from "@/app/components/products/ProductDetails";
import SizeSelector from "@/app/components/products/SizeSelector";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useCart } from "@/app/context/CartContext";

function ProductDetail(params: any) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const productId = params.params.id;
  const {addToCart,removeFromCart}  = useCart();

  async function fetchProductDetails() {
    try {
      const response = await fetch(`/api/products/${productId}`);
      if (!response.ok) {
        throw Error("Network response was not ok");
      }
      const data = await response.json();
      setProduct(data.product);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  }

  useEffect(() => {
    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <>
      <Header />
      <hr className="border-1 border-black mx-12"></hr>
      <MegaMenu />
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-sm mx-auto"
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">{product.title}</h1>
            <p className="font-bold my-2">⭐{product.rating.rate} / 5</p>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-2xl text-blue-500 font-semibold mt-4">
              ${product.price}
            </p>

            <SizeSelector
              sizes={["XS", "S", "M", "L", "XL"]}
              onSelectSize={setSelectedSize}
            />
            <div className="flex space-x-4 mt-6">
              <button onClick={ handleAddToCart} className="productButton">
                <FaShoppingCart  /> Add to Cart
              </button>
              <button className="productButton font-normal">
                <FaHeart /> Add to Wishlist
              </button>
            </div>
          </div>
        </div>
        <ProductDetails product={product} />
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;

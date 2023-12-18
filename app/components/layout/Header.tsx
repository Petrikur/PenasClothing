"use client";
import React, { useContext, useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { CartContext } from "@/app/context/CartContext";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { cart } = useContext(CartContext);
  const [cartCount, setCartCount] = useState(cart.length);
  const [animateCart, setAnimateCart] = useState(false);

  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  useEffect(() => {
    setAnimateCart(true);
    const timeout = setTimeout(() => {
      setAnimateCart(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [cartCount]);

  return (
    <header className="p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="logo text-2xl font-bold text-center md:text-left">
          <Link href={"/"}>Penas Clothing</Link>
        </h1>
        <nav className="md:block hidden">
          <ul className="flex space-x-6">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Products">Shop</a>
            </li>
            <li>
              <a href="/categories">Categories</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-2 mt-4 md:mt-0 md:ml-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="border border-gray-400 pl-10 pr-2 py-1 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            <p>Search</p>
          </button>
        </div>
        <div className="flex items-center mt-4 md:mt-0 md:space-x-2 space-x-4 justify-center">
          <Link
            href={"/login"}
            className="rounded p-2 mt-4  md:mt-0 hover:bg-gray-100"
          >
            Signup
          </Link>

          <div className="flex items-center justify-center space-x-6 ">
            <a href="/Cart" className="relative flex items-center">
              <BsCart size={20} />
              <div
                className={`bg-blue-500 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center ${
                  animateCart ? "animate-pulse" : ""
                }`}
              >
                {cartCount}
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

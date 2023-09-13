import React from 'react';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaPinterestSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-6 text-gray-600">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/categories">Categories</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/shipping">Shipping</a></li>
              <li><a href="/returns">Returns</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Social media icons */}
        <div className="flex space-x-4">
          <a
            target="_blank"
            href="https://www.facebook.com"
            className="text-gray-600 hover:text-blue-600"
          >
            <FaFacebookSquare size={24} />
          </a>
          <a
            target="_blank"
            href="https://www.twitter.com"
            className="text-gray-600 hover:text-blue-400"
          >
            <FaTwitterSquare size={24} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com"
            className="text-gray-600 hover:text-pink-600"
          >
            <FaInstagramSquare size={24} />
          </a>
          <a
            target="_blank"
            href="https://www.pinterest.com"
            className="text-gray-600 hover:text-red-600"
          >
            <FaPinterestSquare size={24} />
          </a>
        </div>
      </div>

      {/* Email Updates Section */}
      <div className="bg-white mt-6 py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
          <p className="text-gray-600 text-center md:text-left">
            Subscribe to our newsletter for updates:
          </p>
          <div className="flex-1">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full border border-gray-400 px-3 py-2 focus:outline-none"
            />
          </div>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-gray-800 focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-2 text-center text-sm ">
        <p>&copy; 2023 Penas Clothing. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

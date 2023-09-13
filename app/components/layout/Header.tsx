import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="logo  text-2xl font-bold text-center md:text-left">
          Logo here
        </div>
        <nav className="md:block hidden">
          <ul className="flex space-x-6 ">
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/categories">Categories</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-2 mt-4 md:mt-0 md:ml-4">
          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 rounded px-2 py-1"
          />
          <button
            type="submit"
            className="bg-indigo-500  px-3 py-1 rounded"
          >
            Search
          </button>
        </div>
        <div className="flex items-center mt-4 md:mt-0 md:space-x-2 space-x-4 justify-center">
          <div className="flex items-center space-x-3">
            <a href="/cart" className=" relative flex items-center">
              <TiShoppingCart size={24} /> 
              <div className="bg-red-500 p-2.5  rounded-full w-4 h-4 flex items-center justify-center">0</div>
              {/* cart item count */}
            </a>
          </div>
          
          <button className='rounded border p-2 mt-4  md:mt-0'>Signup</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";
import React, { useState } from 'react';

const MegaMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState<string | null>(null); // Track which menu is open

  const toggleMenu = (menu: string) => {
    setMenuOpen(menu === isMenuOpen ? null : menu);
  };

  const closeMenu = () => {
    setMenuOpen(null);
  };

  const menuData = [
    {
      title: 'Women',
      subcategories: [
        { title: 'Clothing', subitems: ['Jeans', 'Hats', 'Shirts', 'Shorts', 'Sweaters'] },
        { title: 'Shoes', subitems: ['Boots', 'Dress Shoes', 'Slippers'] },
      ],
    },
    {
      title: 'Men',
      subcategories: [
        { title: 'Clothing', subitems: ['Jeans', 'Hats', 'Shirts', 'Shorts', 'Sweaters'] },
        { title: 'Shoes', subitems: ['Boots', 'Dress Shoes', 'Slippers'] },
      ],
    },
    {
      title: 'Sale',
      subcategories: [{ title: 'Discounts', subitems: ['Clearance'] }],
    },
    {
      title: 'Kids',
      subcategories: [{ title: 'Clothing', subitems: ['Boys', 'Girls'] }],
    },
    {
      title: 'Shoes',
      subcategories: [{ title: 'Men', subitems: ['Boots', 'Sneakers'] }],
    },
    {
      title: 'Home',
      subcategories: [{ title: 'Decor', subitems: ['Furniture', 'Lighting'] }],
    },
    {
      title: 'Designer',
      subcategories: [{ title: 'High Fashion', subitems: ['Luxury', 'Couture'] }],
    },
  ];

  return (
    <div className="relative mt-2 text-center">
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-6">
        {menuData.map((category) => (
          <div
            key={category.title}
            className="hover:bg-gray-200 px-4 py-2 cursor-pointer"
            onMouseEnter={() => toggleMenu(category.title)}
          >
            {category.title}
          </div>
        ))}
      </div>

       {isMenuOpen && (
        <div
          className={`mega-menu  absolute top-14 p-8 bg-white shadow-lg z-30 ${
            isMenuOpen === 'Designer' ? 'right-0' : 'left-1/2 transform -translate-x-1/2'
          }`}
          onMouseLeave={closeMenu}
        >
            {/* Map top level categories */}
          {menuData.map((category) => (
            isMenuOpen === category.title && (
              <div key={category.title}>
                <h3 className="text-lg font-semibold mb-4">{category.title}'s Collection</h3>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  {category.subcategories.map((subcategory) => (
                    <div key={subcategory.title}>
                      <h4 className="text-base font-semibold mb-2">{subcategory.title}</h4>
                      <ul className="space-y-2">
                        {subcategory.subitems.map((item) => (
                          <li key={item}>
                            <a href="#">{item}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default MegaMenu;

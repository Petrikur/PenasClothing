"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MegaMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState<string | null>(null); // Track which menu is open
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setMenuOpen((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const closeMenu = () => {
    setMenuOpen(null);
  };

  const menuData = [
    {
      title: "Women",
      subcategories: [
        {
          title: "Clothing",
          subitems: ["Jeans", "Hats", "Shirts", "Shorts", "Sweaters"],
        },
        { title: "Shoes", subitems: ["Boots", "Dress Shoes", "Slippers"] },
      ],
    },
    {
      title: "Men",
      subcategories: [
        {
          title: "Clothing",
          subitems: ["Jeans", "Hats", "Shirts", "Shorts", "Sweaters"],
        },
        { title: "Shoes", subitems: ["Boots", "Dress Shoes", "Slippers"] },
      ],
    },
    {
      title: "Sale",
      subcategories: [{ title: "Discounts", subitems: ["Clearance"] }],
    },
    {
      title: "Kids",
      subcategories: [{ title: "Clothing", subitems: ["Boys", "Girls"] }],
    },
    {
      title: "Shoes",
      subcategories: [{ title: "Men", subitems: ["Boots", "Sneakers"] }],
    },
    {
      title: "Home",
      subcategories: [{ title: "Decor", subitems: ["Furniture", "Lighting"] }],
    },
    {
      title: "Designer",
      subcategories: [
        { title: "High Fashion", subitems: ["Luxury", "Couture"] },
      ],
    },
  ];

  const fetchProducts = async (category: string) => {
    try {
      const response = await fetch(`/api/products?category=${category}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchProducts(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <div className="relative mt-2 text-center">
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-6">
        {menuData.map((category) => (
          <div
            key={category.title}
            onMouseEnter={() => toggleMenu(category.title)}
            onClick={() => setSelectedCategory(category.title)}
          >
            <Link
              href={`/Products?category=${encodeURIComponent(category.title)}`}
            >
              {category.title}
            </Link>
          </div>
        ))}
      </div>
      {isMenuOpen && (
        <div
          className={`mega-menu  absolute top-14 p-8 bg-white shadow-lg z-30 ${
            isMenuOpen === "Designer"
              ? "right-0"
              : "left-1/2 transform -translate-x-1/2"
          }`}
          onMouseLeave={closeMenu}
        >
          {menuData.map(
            (category) =>
              isMenuOpen === category.title && (
                <div key={category.title}>
                  <h3 className="text-lg font-semibold mb-4">
                    {category.title}'s Collection
                  </h3>
                  <div className="flex flex-col md:flex-row md:space-x-4">
                    {category.subcategories.map((subcategory) => (
                      <div key={subcategory.title}>
                        <h4 className="text-base font-semibold mb-2">
                          {subcategory.title}
                        </h4>
                        <ul className="space-y-2">
                          {subcategory.subitems.map((item) => (
                            <li key={item}>
                              <Link
                                href={`/Products/${encodeURIComponent(
                                  category.title
                                )}/${encodeURIComponent(
                                  subcategory.title
                                )}/${encodeURIComponent(item)}`}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default MegaMenu;

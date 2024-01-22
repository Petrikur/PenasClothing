import connectDB from "@/backend/db/db";
import type { NextApiRequest, NextApiResponse } from "next";
import Product from "@/backend/models/product";
// import { Product } from "@/typings";

let cachedData: any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // POST request to create a new product
    try {
      await connectDB();
      const {
        id,
        title,
        description,
        price,
        category,
        brand,
        imageUrl,
        stockQuantity,
      } = req.body;
      const product = {
        id,
        title,
        description,
        price,
        category,
        brand,
        imageUrl,
        stockQuantity,
      };

      await Product.create(product);

      return res.status(201).json({ message: "Product created", product });
    } catch (error) {
      return res.status(500).json({ error: "Error creating a new product" });
    }
  } else if (req.method === "GET") {
    try {
      if (!cachedData) {
        const response = await fetch("https://fakestoreapi.com/products");
        cachedData = await response.json();
      }
      const { category, subcategory, item } = req.query;

      // Apply filtering based on the received parameters
      let filteredProducts = cachedData;
      if (category) {
        filteredProducts = filteredProducts.filter(
          (product) =>
            product.category === category &&
            (!subcategory || product.subcategory === subcategory) &&
            (!item || product.item === item)
        );
      }

      return res.status(200).json(filteredProducts);
    } catch (error) {
      console.error("Error retrieving products:", error);
      return res.status(500).json({ error: "Error retrieving products" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}

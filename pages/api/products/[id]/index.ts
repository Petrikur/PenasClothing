import connectDB from "@/backend/db/db";
import Product from "@/backend/models/product";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // GET request to retrieve product by id
  if (req.method === "GET") {
    try {
      const { id } = req.query;
      if (!id || Array.isArray(id)) {
        return res.status(400).json({ error: "Invalid id" });
      }

      await connectDB();

      const product = await Product.findById(id);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      return res.status(200).json({ product });
    } catch (error) {
      return res.status(500).json({ error: "Error fetching product" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
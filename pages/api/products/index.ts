import connectDB from '@/backend/db/db';
import type { NextApiRequest, NextApiResponse } from 'next';
import Product from '@/backend/models/product';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // POST request to create a new product
    try {
      await connectDB();
      const { id, title, description, price, category, brand, imageUrl, stockQuantity } = req.body;
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

      return res.status(201).json({ message: 'Product created', product });
    } catch (error) {
      return res.status(500).json({ error: 'Error creating a new product' });
    }
  } else if (req.method === 'GET') {
    // GET request to retrieve all products
    try {
      // await connectDB();
      // const products = await Product.find();

      const response = await fetch("https://fakestoreapi.com/products")
      const products = await response.json();
  

      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ error: 'Error retrieving products' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}

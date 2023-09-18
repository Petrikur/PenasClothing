import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  stockQuantity: {
    type: Number,
    required: true,
  },

});

// const Product = mongoose.model('Product', productSchema);
// module.exports = Product;

export default mongoose.models.Product || mongoose.model("Product",productSchema)
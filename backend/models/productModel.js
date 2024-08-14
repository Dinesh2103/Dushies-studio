import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The product must have a name'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'The product must have a description'],
    unique: false,
  },
  rating: {
    type: Number,
    required: [true, 'The product must have a rating'],
    unique: false,
  },
  price: {
    type: Number,
    required: [true, 'The product must have a price'],
    unique: false,
  },
  imageUrl: {
    type: String,
    required: false,
    unique: true,
  },
});

const Product = mongoose.model('Products', productSchema);

export default Product;

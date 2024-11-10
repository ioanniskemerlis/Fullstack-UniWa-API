const mongoose = require('mongoose');

// Product Schema
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  price: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  stock: {
    type: String,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', ProductSchema);

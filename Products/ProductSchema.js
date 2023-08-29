const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  desc: String,
  price: Number
});

const Product = mongoose.model('Product', userSchema);

module.exports = Product;
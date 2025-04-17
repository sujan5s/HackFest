const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    name: String,
  address: String,
  pincode: String,  // <- String instead of Number
  phoneno: String,  // <- String instead of Number
  productName: String,
  productDescription: String,
  productPrice: String,
  productQuantity: String,
  productImage: String
});

const AddressModel = mongoose.model('Address', AddressSchema);
module.exports = AddressModel;
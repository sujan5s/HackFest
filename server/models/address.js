const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    phoneno: {
        type: Number,
        required: true
    }
   

});

const AddressModel = mongoose.model('Address', AddressSchema);
module.exports = AddressModel;
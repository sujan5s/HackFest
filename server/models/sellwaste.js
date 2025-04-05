const mongoose = require('mongoose');
import e from 'express';
import * as buffer from 'vinyl-buffer';
const SellWasteSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    },
    productImage: {
        data:Buffer,
        contentType: String,
        required: false
    },
});

const SellWasteModel = mongoose.model('Sellwaste', SellWasteSchema);
module.exports = SellWasteModel;
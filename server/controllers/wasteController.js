const SellWasteModel = require('../models/sellwaste');

exports.create = async (req, res) => {
  try {
    const newWaste = new SellWasteModel({
      productName: req.body.productName,
      productDescription: req.body.productDescription,
      productPrice: req.body.productPrice,
      productQuantity: req.body.productQuantity,
      productImage: {
        data: req.file.buffer,
        contentType: req.file.mimetype
      }
    });

    const savedWaste = await newWaste.save();
    res.status(201).json(savedWaste);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save waste', details: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const wastes = await SellWasteModel.find();
    res.json(wastes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch wastes', details: err.message });
  }
};

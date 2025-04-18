const AddressModel = require('../models/address');

exports.create = async (req, res) => {
  try {
    const newAddress = new AddressModel(req.body);
    const saved = await newAddress.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save address', details: err.message });
  }
};

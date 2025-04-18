const express = require('express');
const router = express.Router();
const wasteController = require('../controllers/wasteController');

router.post('/', (req, res) => req.upload.single('productImage')(req, res, () => wasteController.create(req, res)));
router.get('/', wasteController.getAll);

module.exports = router;

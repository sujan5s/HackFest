const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const authRoutes = require('./routes/authRoutes');
const wasteRoutes = require('./routes/wasteRoutes');
const addressRoutes = require('./routes/addressRoutes');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/hackfest')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Multer Setup (shared upload middleware)
const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });
app.use((req, res, next) => { req.upload = upload; next(); });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/waste', wasteRoutes);
app.use('/api/address', addressRoutes);

module.exports = app;

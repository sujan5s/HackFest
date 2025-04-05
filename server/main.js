const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv= require('dotenv');
const SellWasteModel = require('./models/sellwaste');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());    
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/hackfest');


app.post('/sellwaste', (req, res) => {
    SellWasteModel.create(req.body)
    .then(sellwaste => res.json(sell_waste))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
})
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const registerModel = require('./models/register.js');
const SellWasteModel = require('./models/sellwaste.js'); // path depends on your file structure
const multer= require('multer');


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/hackfest' );


const storage = multer.memoryStorage();
const upload = multer({ storage: storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    }
 });

app.post('/login',(req,res)=>{
    const {username,password} = req.body;
    registerModel.findOne({username : username})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("OK")
            }else{
                res.json("incorrect password")
            }
        } else {
            res.json("User not found")
        }
    })
    .catch(err => {
        res.status(500).json({ error: "Server error", details: err });
    });
})

app.post('/register',(req,res)=>{
    registerModel.create(req.body)
    .then(register => res.json(register))
    .catch(err => res.json(err))
})


app.post('/sellwaste', upload.single('productImage'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image file provided' });
        }

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
        console.error('Error saving waste:', err);
        res.status(500).json({ error: 'Failed to save waste', details: err.message });
    }
});

app.get('/sellwaste', async (req, res) => {
    try {
        const wastes = await SellWasteModel.find();
        res.json(wastes);
    } catch (err) {
        console.error('Error fetching wastes:', err);
        res.status(500).json({ error: 'Failed to fetch wastes', details: err.message });
    }
}
);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server started on port ${3001}`);
});


/*app.post('/sellwaste', upload.single('productImage'), async (req, res) => {
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
    res.json(savedWaste);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save waste', details: err });
  }
});


app.listen(3001,()=> {
    console.log('server started on port 3001');
})\
*/

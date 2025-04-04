const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/hackfest' );

app.post('register',(req,res)=>{
    
})

app.listen(3001,()=> {
    console.log('server started on port 3001');
})
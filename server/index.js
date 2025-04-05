const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const registerModel = require('./models/register.js');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/hackfest' );

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
})

app.post('/register',(req,res)=>{
    registerModel.create(req.body)
    .then(register => res.json(register))
    .catch(err => res.json(err))
})

app.listen(3001,()=> {
    console.log('server started on port 3001');
})
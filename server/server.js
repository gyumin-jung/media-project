const express = require('express');
//const mongoose = require('mongoose');
const app = express();
//const User = require('./models/user');
const path = require('path');
//const { Mongoose } = require('mongoose');
//require("dotenv").config({path:"variables.env"});
static = require('serve-static')
app.use('/assets/css', express.static(path.join(__dirname, '../assets/css')));
app.use('/assets/js', express.static(path.join(__dirname, '../assets/js')));

app.get('/',(req,res)=>{
    console.log(__dirname);  

    res.sendFile(path.join(__dirname , "../html/index.html"));
    /*const newUser = new User();
    newUser.email = "rbals@gmail.com";
    newUser.save()
    .then((user)=>{
        console.log(user);
        res.json({
            message:'User Created Successfully'
        })
    })
    .catch((err)=>{
        res.json({
            message: "User was not successfully create"
        })
    })
    */
})
app.get('/about',(req,res)=>{
    console.log(__dirname);  

    res.sendFile(path.join(__dirname , "../html/aouvt.html"));
    /*const newUser = new User();
    newUser.email = "rbals@gmail.com";
    newUser.save()
    .then((user)=>{
        console.log(user);
        res.json({
            message:'User Created Successfully'
        })
    })
    .catch((err)=>{
        res.json({
            message: "User was not successfully create"
        })
    })
    */
})
app.post('/', (req, res) => {
    console.log(req.headers);
    console.log(req.body.text1, req.body.text2);
    
});
app.listen(3000,(err)=>{
    if(err) return console.log(err);
    else return console.log("connected to database");
    /*if(err){
        return console.log(err);        
    }else{
        mongoose.connect(process.env.MONGODB_URL, error =>{
            if(error){
                console.log(error);  
            }else{
                
            }
        });
    }*/
})

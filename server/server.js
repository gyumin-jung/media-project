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
})
app.get('/about',(req,res)=>{
    console.log(__dirname);  
    res.sendFile(path.join(__dirname , "../html/index.html"));
    
    
    
})
app.listen(8000,(err)=>{
    if(err) return console.log(err);
    else return console.log("connected to database");
    if(err){
        return console.log(err);        
    }
});

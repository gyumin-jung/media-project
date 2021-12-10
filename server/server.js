const express = require('express');
//const mongoose = require('mongoose');
const app = express();
//const User = require('./models/user');
const path = require('path');
//const { Mongoose } = require('mongoose');
//require("dotenv").config({path:"variables.env"});
static = require('serve-static')
app.use('/assets',express.static(__dirname));
app.use('/assets/css', express.static(path.join(__dirname, '../assets/css')));
app.use('/assets/js', express.static(path.join(__dirname, '../assets/js')));
app.use('/assets/sass', express.static(path.join(__dirname, '../assets/sass')));
app.use('/assets/webfonts', express.static(path.join(__dirname, '../assets/webfonts')));

app.get('/',(req,res)=>{
    console.log(__dirname);  
    res.sendFile(path.join(__dirname , "../html/index.html"));    
})
app.get('/main',(req,res)=>{
    console.log(__dirname);  
    res.sendFile(path.join(__dirname , "../html/index.html"));    
})
app.get('/signIn',(req,res)=>{
    console.log(__dirname);  
    res.sendFile(path.join(__dirname , "../html/signIn.html"));    
})
app.get('/signUp',(req,res)=>{
    console.log(__dirname);  
    res.sendFile(path.join(__dirname , "../html/signUp.html"));    
})
app.listen(3000,(err)=>{
    if(err) return console.log(err);
    else return console.log("connected to database");    
});

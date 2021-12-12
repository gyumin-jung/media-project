const express = require('express');
const app = express();
const path = require('path');
static = require('serve-static');
//var db_config = require('../db/config')
const bodyParser = require('body-parser');
var http = require("http");


var search = require('../router/search');
var signUp = require('../router/signUp');
var main = require('../router/main');
const multer = require('multer');
const connection = require('../db/dbConfig');

app.use(express.urlencoded({ extended: true }))
app.unsubscribe(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
//app.use('/assets',static(path.join(__dirname,'router')));
//static 파일 
app.use('/assets/css', express.static(path.join(__dirname, '../assets/css')));
app.use('/assets/js', express.static(path.join(__dirname, '../assets/js')));
app.use('/assets/sass', express.static(path.join(__dirname, '../assets/sass')));
app.use('/assets/webfonts', express.static(path.join(__dirname, '../assets/webfonts')));
//app.use('/router/router_search', express.static(path.join(__dirname, '../router')));
//router 
app.use('/search', search);
app.use('/signUp', signUp);
app.use('/api/user',require('../router/userRouter.js'))
app.use('/main',main)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname , "../html/index.html"));
})

app.get('/signIn',(req,res)=>{
    res.sendFile(path.join(__dirname , "../html/signIn.html"));    
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname , "../html/logOn.html"));
})

app.listen(3000,(err)=>{
    if(err) return console.log(err);
    else return console.log("connected to server");    
})

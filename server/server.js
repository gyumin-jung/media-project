const express = require('express');
const app = express();
const path = require('path');
static = require('serve-static');
//var db_config = require('../db/config')
var bodyParser = require('body-parser');
var search = require('../router/search')
var signUp = require('../router/signUp')

app.unsubscribe(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.unsubscribe(cors());
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
//app.use('/api/user',require('../router/userRouter.js'))

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

app.get('/login',(req,res)=>{
    console.log(__dirname);  
    res.sendFile(path.join(__dirname , "../html/logOn.html"));
})

app.listen(3000,(err)=>{
    if(err) return console.log(err);
    else return console.log("connected to database");    
})

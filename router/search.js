const express = require('express');
const { sendfile } = require('express/lib/response');
const router = express.Router();
const path = require('path');
const db_config = require('../db/dbConfig')

router.get('/api',(req,res)=>{
    res.sendFile(path.join(__dirname , "../html/signUp.html"));   
})

module.exports = router;
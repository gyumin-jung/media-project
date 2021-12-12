const express = require('express');
const { sendfile } = require('express/lib/response');
const router = express.Router();
const path = require('path');

router.get('/main',(req,res)=>{
    res.sendFile(path.join(__dirname , "../html/index.html"));   
})

module.exports = router;
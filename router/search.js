const express = require('express');
const { sendfile } = require('express/lib/response');
const router = express.Router();
const path = require('path');
const eventCtrl = require('../controller/eventController')

router.post('/',(req,res)=>{
    eventCtrl.getEvent(req,res)
    res.sendFile(path.join(__dirname , "../html/about.html"));
})


module.exports = router;
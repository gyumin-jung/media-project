const express = require('express');
const  router = express.Router()
const userCtrl = require('../controller/userController')

router.post('/')
    .get(userCtrl.getUser)
module.exports = router
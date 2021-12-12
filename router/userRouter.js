const express = require('express');
const  router = express.Router()
const movieCtrl = require('../controller/userController')

router.route('/')
    .get(movieCtrl.getUser)
module.exports = router
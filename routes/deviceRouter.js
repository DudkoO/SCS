const express = require('express');
const router = express.Router();

const deviceService = require('../services/deviceService')


//todo сюда будет приходить контрольное слово в виде '01010783451'
router.get('/me', function (req,res){
    res.send('Авторизирован')
})


module.exports = router
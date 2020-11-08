require('dotenv').config();
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET_KEY;

const {User} = require('../models')


router.use(async function (req, res, next) {
    const header = req.header("Authorization") || '';
    try {
        let decoded = jwt.verify(header.split(' ')[1], secret);

        req.context = { decoded };
        next();
    } catch (error) {
        res.status(401);
        res.send(JSON.stringify(error));

    }
});

module.exports= router
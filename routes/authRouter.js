const express = require('express');
const router = express.Router();
const {User, Role} = require('../models')
const jwt = require('jsonwebtoken');

const options = {
    expiresIn: 3600 * 24 // срок жизни токена
};
const secret = process.env.JWT_SECRET_KEY;

router.post('/login',async (req,res) => {
    const user = await User.findOne({where:{username: req.body.username, password: req.body.password},include:[Role]})
    if(user)
        res.data= jwt.sign({data: user.id, roleId: user.Role.roleId}, secret, options);
    else  res.status(401);
    res.send(JSON.stringify({token:res.data}))
})

module.exports=router
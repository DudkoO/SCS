const {User} = require('../models')

const getUserById = async (id)=> await User.findByPk(id)

//TODO создание юзера с захешированным пролем
module.exports={
    getUserById
}
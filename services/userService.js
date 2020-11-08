const {User} = require('../models')

const getUserById = async (id)=> await User.findByPk(id)

module.exports={
    getUserById
}
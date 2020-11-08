
// const commandModel = require('../../models/command')
const {Command} = require('../models')
const deviceService = require('./deviceService')

const getCommandById = async (id)=> await Command.findOne({where:{id:id}})
const getCommands = async ()=> await Command.findAll()
const createCommand= async (command)=> await Command.create({code:command.code,comment:command.comment})
const updateCommand= async (command)=> await Command.update({code:command.code,comment:command.comment},{where:{id:command.id}})
const deleteCommand= async (id)=> await Command.destroy({where:{id:id}})

const isValidCommand = async (command)=>{
    const minCommentLenght = 5
    //TODO добавить проверку на sql-иньекции в строках
    if(isNaN(command.code))
        throw 'Код команды должен являться числом'
    else if(isNaN(command.deviceId))
        throw 'Некорректный device id'
    else if(!await deviceService.getDeviceById(command.deviceId))
        throw 'Такого устройства не сеществует'
    else if(await Command.findAll({where:{deviceId:command.deviceId,code:command.code}}).length>0)
        throw 'У данного устройства уже существует комманда с таким кодом'
    else if(command.comment==='')
        throw 'У команды должен быть комментарий'
    else if(command.comment.length<minCommentLenght)
        throw `Комментарий должен быть длиннее ${minCommentLenght} символов`
    else return true
}

module.exports={
    getCommandById,
    getCommands,
    createCommand,
    updateCommand,
    deleteCommand,
    isValidCommand
}
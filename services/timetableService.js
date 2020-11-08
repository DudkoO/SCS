const {TimetablePoint} = require('../models')
const deviceService = require('./deviceService')
const commandService = require('./commandService')


const createPoint = async (point)=>await TimetablePoint.create({deviceId:point.deviceId,commandId:point.commandId,from:point.from,to:point.to})
const deletePoint = async (id)=> await TimetablePoint.destroy({where:{id:id}})
//TODO сортировать по времени
const getTimetablePointsByDeviceId=async (deviceId)=> await TimetablePoint.findAll({where:{deviceId:deviceId}})

const isValidPoint=async (point)=> {
    if(isNaN(point.deviceId))
        throw 'Некорректный device id'
    else if(!await deviceService.getDeviceById(point.deviceId))
        throw 'Такого устройства не сеществует'
    else if(isNaN(point.commandId))
        throw 'Некорректный device id'
    else if(!await commandService.getCommandById(point.commandId))
        throw 'Такой команды не сеществует'
    else if (point.to-point.from<=0)
        throw 'Значение поля "С" должно быть ранее значения поля "По" '
//TODO проверка полей с и по на то, что они являются временем

}
module.exports={
    createPoint,
    deletePoint,
    getTimetablePointsByDeviceId,
    isValidPoint
}
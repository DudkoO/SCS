const {Device} = require('../models')

const getDeviceById=async (id)=> await Device.findOne({where:{id:id}})
const getDevices = async ()=> await Device.findAll()
const createDevice = async (device)=>await Device.create({name:device.name,responsePeriod:device.responsePeriod,comment:device.comment})
const updateDevice = async (device) => await Device.update({name:device.name,responsePeriod:device.responsePeriod,comment:device.comment},{where:{id:device.id}})
const deleteDevice = async (id)=> await Device.destroy({where:{id:id}})

const getDeviceByUserId=async (id)=> await Device.findOne({where:{userId:id}})


const response =async (device) =>{
    device.lastResponse = new Date()
    await Device.update({lastResponse:new Date()},{where:{id:device.id}})
    if(isValidLastResponse(device))
        return true
    else return false
}

//TODO не работает, заюзать moment
const isValidLastResponse= (device)=>(device.lastResponse.getTime()+device.responsePeriod.slice(0, 2)*60*60*1000+device.responsePeriod.slice(3, 5)*60*1000>new Date())

const isValidDevice= async (device)=>{
    const minNameLenght = 5
    const minCommentLenght = 5
    //TODO добавить проверку на sql-иньекции в строках

    if(device.name==='')
        throw 'Имя устройства не должно быть пустым'
    else if(device.name.length<minNameLenght)
        throw `Имя устройства должно быть длиннее ${minNameLenght} символов`
    else if(!device.responsePeriod)
        throw 'Некоректный период отклика'
    else if(device.responsePeriod.getHours()===0
        &&device.responsePeriod.getMinutes()===0
        &&device.responsePeriod.getSeconds()===0)
        throw 'Некоректный период отклика'
    else if(device.comment==='')
        throw 'У устройства должен быть комментарий'
    else if(device.comment.length<minCommentLenght)
        throw `Комментарий должен быть длинне ${minCommentLenght} символов`

    else return true
}

module.exports={
    getDeviceById,
    getDevices,
    createDevice,
    updateDevice,
    deleteDevice,
    isValidDevice,
    response,
    getDeviceByUserId
}

const express = require('express');
const router = express.Router();

const deviceService = require('../services/deviceService')
const timetableService = require('../services/timetableService')


//todo сюда будет приходить контрольное слово в виде '01010783451'
router.get('/me', async function (req,res){
    const device = await deviceService.getDeviceByUserId(req.context.user.data)
    const timetable = await timetableService.getTimetablePointsByDeviceId(device.id)

    const info ={responsePeriod: device.responsePeriod,timetable}
    res.json(info)
})

router.post('/response',async function (req,res){
    const device = await deviceService.getDeviceByUserId(req.context.user.data)
    console.log(device);
    const isValidResponse = await deviceService.response(device)
    console.log(isValidResponse);
    if(isValidResponse)
        //TODO проверка на устаревшее расписание
        res.status(202)
    else res.status(203)
    res.send()
})

module.exports = router
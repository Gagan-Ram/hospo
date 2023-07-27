const router = require('express').Router()
const {appointmentsController} = require("../controllers/index.controllers")

router.post('/', appointmentsController.addAppointments)


module.exports = router
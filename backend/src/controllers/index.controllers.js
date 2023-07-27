const authorizationController = require('./authorization.controllers')
const doctorsController = require('./doctors.controllers')
const hospitalsController = require('./hospitals.controllers')
const appointmentsController = require('./appointments.controllers')

module.exports  = {
    authorizationController,
    doctorsController,
    hospitalsController,
    appointmentsController
}
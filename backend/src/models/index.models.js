const authorizationModel = require('./authorization.models.js')
const doctorsModel = require('./doctors.models')
const hospitalsModel = require('./hospitals.models')
const appointmentsModel = require('./appointments.models')

module.exports = {
    authorization: authorizationModel,
    doctors: doctorsModel,
    hospitals: hospitalsModel,
    appointments: appointmentsModel
}
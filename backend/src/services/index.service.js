const { autherizationService }  = require('./autherization.service')

const { findByID, insert, findAndUpdateWithId, searchBySpeciality } = require('./doctors.service')

const { hospitalsService }  = require('./hospitals.service')

const { appointmentsService }  = require('./appointments.service')

module.exports = {
    autherizationService,

    findByID,
    insert,
    findAndUpdateWithId,
    searchBySpeciality,

    hospitalsService,

    appointmentsService
}
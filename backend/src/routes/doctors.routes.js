const router = require('express').Router()

// const { doctors } = require('../models/index.models')

// requiring with { } is important
const { doctorsController } = require('../controllers/index.controllers')


// router.get('/ /', doctorsController.doctorsFilter)

router.get('/', doctorsController.doctorsQuery)

router.post('/new', doctorsController.insertDoctors)

router.get('/:id', doctorsController.searchDoctorsById)

router.patch('/:id', doctorsController.updateDoctorsWithId)

module.exports = router
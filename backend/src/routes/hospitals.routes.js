const router = require('express').Router()

const {hospitalsController} = require('../controllers/index.controllers')


router.get('/',  hospitalsController.hospitalsQuery )

router.post( '/new' , hospitalsController.addHospitals )

router.get( '/:hid' , hospitalsController.findHospitals )

router.patch( '/:hid' , hospitalsController.UpdateHospitalWithId )


module.exports = router
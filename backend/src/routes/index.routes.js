const router = require('express').Router()

const autherization = require('./autherization.routes')

const doctorsRoutes = require('./doctors.routes')

const hospitalsRoutes = require('./hospitals.routes')

const appointmentsRoutes = require('./appointments.routes')


router.get('/', (req,res) => {
    res.json({"message":"default v1 route"})
})

router.use('/auth', autherization )

router.use('/doctors', doctorsRoutes )

router.use('/hospitals', hospitalsRoutes )

router.use('/appointments', appointmentsRoutes )



// router.post("/")

module.exports = router
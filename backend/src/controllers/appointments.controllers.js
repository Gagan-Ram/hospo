
const  {appointmentsService} = require('../services/index.service')

const addAppointments = async ( req, res ) => {

    const bodyObject = req.body

    try{
        const results = await appointmentsService.insert( bodyObject )
        res.json( results )
    }
    catch(error){
        res.status(500)
        .json({
            message: "Can't add appointments"
        })
    }

}

module.exports = {
    addAppointments
}
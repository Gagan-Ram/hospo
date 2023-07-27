const { hospitalsService } = require('../services/index.service')

const hospitalsQuery = async (req, res) => {

    if( req.query.hospitalKey === undefined && req.query.hospital === undefined ){
        res.json({message:"At default hospitals Route"})
        console.log(req.query)
    }
    else{
        try{
            const hospitalKey = req.query
            console.log("doctor id---------->"+hospitalKey)

            const result = await hospitalsService.searchByKey( hospitalKey )
            console.log(result);
            res.json( result )
            
        }
        catch( error ){
            res.status(500)
            .json({
                message : "Couldn't find hospitals" ,
                error
            })
        }
    }
}
const addHospitals = async ( req, res ) =>{
    const body = req.body

    try{

        const results = await hospitalsService.insert( body )

        res.json(results)
    }
    catch( error ){
        res.status(500)
        .json({
            message : "Couldn't add hospitals" ,
            error
        })
    }
} 

const findHospitals = async ( req,res ) => {

    const id = req.params.hid
    console.log(id)
    
    try{
        const results = await hospitalsService.findByIDhosp( id )
        res.json( results )
    }
    catch( error ){
        res.status(500)
        .json({
            message: "Couldn't find hospitals",
            error
        })
    }

} 

const UpdateHospitalWithId = async ( req, res )=>{

    const id = req.params.hid
    const updateObj = req.body

    // add special case for Doctors = to push into the doctors Array

    try{
        const results = await hospitalsService.updateWithId( id, updateObj )
        res.json(results)
    }
    catch( error ){
        res.status(500)
        .json({
            message: "Couldn't update the hospital",
            error
        })
    }
}

module.exports = {
    hospitalsQuery,
    addHospitals,
    findHospitals,
    UpdateHospitalWithId
}
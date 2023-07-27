const { hospitals } = require('../models/index.models')


const searchByKey = async ( key ) => {

    if( key.hospital ){
        const  { location , hospital } = key 

        console.log(location)

        const filter = {
            location : location,
            name : hospital
        }
        // console.log(location).split(",")[1];
        return await hospitals.find( filter )
    }
    else{

        const { hospitalKey } = key
        return await hospitals.find( {doctors: hospitalKey} )
    }


}

const insert = async ( body ) => {

    const hospColl = new hospitals ( body )

    const newHospital = await hospColl.save()

    return newHospital

}


const findByIDhosp = async ( id ) => {

    const foundedId = await hospitals.find({ _id : id })

    return foundedId
}

const updateWithId = async ( id, updateObject ) => {
    const filter = {_id: id}

    const updatedHospital = await hospitals.findOneAndUpdate( filter , updateObject , { new: true })
    return updatedHospital

}

module.exports ={
    hospitalsService : {
            searchByKey,
            insert,
            findByIDhosp,
            updateWithId
        }
}
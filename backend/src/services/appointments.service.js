const { appointments } = require("../models/index.models")


const insert = async ( body ) => {
    const appoinColl = new appointments ( body )
    return await appoinColl.save()
}

module.exports = {
    appointmentsService : {
        insert
    }
}
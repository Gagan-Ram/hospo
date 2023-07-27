const mongoose = require("mongoose")

const authorizationSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true
    },

    email : {
        type: String,
        required: true
    },
    
    password : {
        type: String,
        required: true
    }
})

const authorizationModel = mongoose.model( "authorization" ,authorizationSchema )

module.exports = authorizationModel
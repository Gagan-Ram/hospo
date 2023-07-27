const mongoose = require('mongoose')

const doctorsSchema = new mongoose.Schema({

    name : {
        type : String
        // required : true
    },

    education : {
        type : Array
        // required : true
    },

    specializations : {
        type : Array
        // required : true
    },

    experience : {
        type : Array
        // required : true
    },

    services : {
        type : Array
    },
    
    fee : {
        type : Number
        // required : true
    },

    practices_at : {
        type : String
        // required : true
    },

    description : {
        type : String,
        default: ""
    },

    is_verified : {
        type : Boolean
    },

    gender: {
        type: String
    }

    // available :{
    //     type : Array,
    //     default: []
    // }

})

const doctorsModel = mongoose.model( "doctors" ,doctorsSchema)

module.exports = doctorsModel
const mongoose = require('mongoose')

const hospitalsSchema = new mongoose.Schema({

    name: String,

    address: String,
    
    timing: Array,
    
    emergency_number: Number,
    
    total_beds: Number,
    
    multi_speciality : Boolean,
    
    doctors: {
        type: Array,
        default: []
    },
    
    services: {
        type: Array,
        default: []
    },

    location : {
        type : Array
    },
    
    description : {
        type : String
    }

    // moreDetails: {

    //     history : {
    //         type : String,
    //         default : ""
    //     },

    //     facilities: {
    //         type: Array,
    //         default: []
    //     },
        
    //     specialities: {
    //         type: Array,
    //         default: []
    //     },

    // }

})

const hospitalsModel = mongoose.model('hospitals', hospitalsSchema)

module.exports = hospitalsModel
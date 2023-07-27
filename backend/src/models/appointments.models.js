const mongoose = require('mongoose')

const appointmentsSchema = new mongoose.Schema({

    doctorId : {
        type : String
    },

    doctorName : {
        type : String,
        // required : true
    },

    time : {
        type : String,
        // required : true
    },

    hospitalName : {
        type : String,
        // required : true
    },

    hospitalAddress : {
        type : String,
    },
    
    fee : {
        type : Number,
        // required : true
    }
},
{
     timestamps: true 

}
)

const appointmentsModel = mongoose.model( "appointments" ,appointmentsSchema)

module.exports = appointmentsModel
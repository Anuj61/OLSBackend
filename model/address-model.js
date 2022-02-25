const mongoose = require("mongoose")

//schema

const addressSchema = mongoose.Schema({

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
    }

})


//model

const addressModel = mongoose.model("address", addressSchema)

module.exports = addressModel
const mongoose = require("mongoose")

//Schema

let providerDetailSchema = new mongoose.Schema({
    userId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },

    availability:{
        type:String,
    },

    price:{
        type:Number,
    },

    serviceDetail:{
        type:String,
        required:true
    }

})


//model
let providerDetailModel = mongoose.model("serviceProviderDetail", providerDetailSchema)

module.exports = providerDetailModel
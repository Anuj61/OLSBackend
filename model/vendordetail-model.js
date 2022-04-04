const mongoose = require("mongoose")

//Schema

let vendorSchema = {
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    subCatId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subcategory",
        required:true
    },
    serviceDetails:{
        type:String,
    },
    price:{
        type:Number,
    },
    timing:{
        type:String,
    }

}

module.exports = mongoose.model("vendorDetails",vendorSchema)
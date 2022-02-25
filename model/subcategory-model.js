const mongoose = require("mongoose")

//schema

const SubcategorySchema = new mongoose.Schema({

    serviceName:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:true,
    },
    isActive:{
        type:Boolean,
        default:true,
    }

})


//model

const subcategoryModel = mongoose.model("subcategory", SubcategorySchema)

module.exports = subcategoryModel;
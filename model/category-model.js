const mongoose = require("mongoose")

//schema

let CategorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        require:true
    },
    isActive:{
        type:Boolean,
        default:true
    }
})


//model

let CategoryModel = mongoose.model("category",CategorySchema)


module.exports = CategoryModel
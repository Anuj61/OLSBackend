const mongoose = require("mongoose")
const CategoryModel = require("./category-model")

//schema

let ReviewSchema = new mongoose.Schema({
    serviceId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    // // subcategoryId: {
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"subcategory"
    // },
    reviewDetails:{
        type:String,
        required:true
    },
    stars:{
        type:Number,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    },
    
})

//model
let ReviewModel = mongoose.model("review",ReviewSchema)
module.exports = ReviewModel 
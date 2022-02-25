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
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }

})

//model
let ReviewModel = mongoose.model("review",ReviewSchema)
module.exports = ReviewModel 
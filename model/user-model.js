const mongoose = require("mongoose")


//schema
const UserSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
    },
    contactNumber:{
        type:String,
        required:true
    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"role",
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    },
    otp:{
        type:String
    }
})


const UserModel = mongoose.model("user", UserSchema)

module.exports = UserModel;
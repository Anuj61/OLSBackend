const { add } = require("nodemon/lib/rules")
const addressModel = require("../model/address-model")

//addAddress
module.exports.addAddress = function(req, res){
    
    let userId = req.body.userId
    let addressLocation = req.body.address
    let pincode = req.body.pincode


    //add data by initalizing model object
    let address = new addressModel({
        userId: userId,
        address: addressLocation,
        pincode: pincode
    })

    //saving that collection
    address.save(function(err, data){
        if(err){
            res.json({
                msg:"Not added",
                status:-1,
                data:data
            })

        }
        else{
            res.json({
                msg:"Data Added",
                status:200,
                data:data
            })
        }
    })
}

//view Address 
module.exports.listAddress = function(req, res){

    addressModel.find().populate("userId").exec(function(err,data){
        if(err){
            res.json({
                msg:"Something went wrong",
                data:err,
                status:-1
            })
        }else{
            res.json({
                msg:"Listed",
                data:data,
                status:200
            })
        }
    })
    
}

//update Address
module.exports.updateAddress = function(req, res){
    
    let addressId = req.body.addressId
    let addressLocation = req.body.address
    let pincode = req.body.pincode


    addressModel.updateOne({_id: addressId}, {address:addressLocation, 
     pincode:pincode
    },
    function(err,data){
        if(err){
            res.json({
                msg:"Something went wrong",
                data:err,
                status:-1
            })
        }else{
            res.json({
                msg:"data updated",
                data:data,
                status:200
            })
        }
    })
}

//del address
module.exports.delAddress =  function(req, res){

    let addressId = req.params.addressId

    addressModel.deleteOne({_id:addressId}, function(err,data){
        if(err){
            res.json({
                msg:"something went wrong",
                data:err,
                status:-1
            })
        }
        else{
            res.json({
                msg:"Deleted successfully",
                data:data,
                status:200
            })
        }
    })
}
const e = require("express")
const subcategoryModel = require("../model/subcategory-model")

//add Service Details
module.exports.addDetails = function(req, res){
    let serviceName = req.body.serviceName
    let categoryId = req.body.categoryId

    let subcategory = new subcategoryModel({
        serviceName: serviceName,
        category: categoryId
    })

    subcategory.save(function(err, data){
        if(err){
            res.json({msg:"Data not added ", data:err, status:-1})
        }
        else{
            res.json({msg:"data added done",data:data, status:200})//http status code
        }
    })
}

//list all service
module.exports.listAllService = function(req,res){
    subcategoryModel.find().populate("category").exec(function(err,data){
        if(err){
            res.json({msg:"SMW ", data:err, status:-1})
        }
        else{
            res.json({msg:"Listing done",data:data, status:200})//http status code
        }
    })
}


//update service
module.exports.updateService = function(req,res){

    let subCatId = req.body.subCatId
    let serviceName = req.body.serviceName
    subcategoryModel.updateOne(
        {_id: subCatId},
        {serviceName:serviceName},
        function(err, data){
        if(err){
            res.json({msg:"Not updated", status:-1, data:data})
        }else{
            res.json({msg:"Subcategory Updated", status:200, data:data})
        }
    })
}

//delete service
module.exports.delService = function(req, res){
    
    let subcategoryId = req.params.subcategoryId
    subcategoryModel.deleteOne({_id:subcategoryId}, function(err,data){
        if(err){
            res.json({msg:"Not deleted", status:-1, data:err})
        }
        else{
            res.json({msg:"Deleted", status:200, data:data})
        }
    })
}
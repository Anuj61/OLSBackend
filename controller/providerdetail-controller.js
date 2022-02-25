const providerDetailModel = require("../model/providerdetail-model")
const subcategoryModel = require("../model/subcategory-model")

//adding providerdetail

module.exports.addProviderDetail = function(req, res){

    //db insert providerDetail
    let userId = req.body.userId
    let availability = req.body.availability
    let price = req.body.price
    let serviceDetail = req.body.serviceDetail

    let providerDetail = new providerDetailModel({
        userId: req.body.userId,
        availability:availability,
        price:price,
        serviceDetail:serviceDetail
    })

    providerDetail.save(function(err,data){
        if(err){
            res.json({
                msg:"providerdetails not added",
                status:-1,
                data:err
            })
        }else{
            res.json({
                msg:"data insetered",
                data:data,
                status:200
            })
        }
    })

    
}

//lsit proivderdetails
module.exports.listProviderDetail = function(req, res){
    providerDetailModel.find().populate("userId").exec(function(err, data){
        if(err){
            res.json({
                msg:"data not listed",
                status:-1,
                data:err
            })
        }else{
            res.json({
                msg:"data listed",
                status:200,
                data:data
            })
        }
    })
}

//update providerdetails
module.exports.updateProivderDetails = function(req, res){

    let providerDetailId = req.body.providerDetailId
    // let price = req.body.price
    // let availability = req.body.availability
    let serviceDetail = req.body.serviceDetail

    providerDetailModel.updateOne({_id:providerDetailId}, 
        {serviceDetail: serviceDetail},
       function(err,data){
           if(err){
               res.json({
                   msg:"data not updated",
                   status:-1,
                   data:err
               })
           }
           else{
               res.json({
                   msg:"data updated",
                   status:200,
                   data:data
               })
           }
       })
}

//delete providerdetails
module.exports.deleteProviderDetails = function(req, res){
    let providerDetailId = req.params.providerDetailId
    
    providerDetailModel.deleteOne({_id: providerDetailId}, function(err, data){
        if(err){
            res.json({mgs:"not deleted", status:-1, data:err})

        }
        else{
            res.json({
                msg:"Deleted",
                status:200,
                data:data
            })
        }
    })
    
}
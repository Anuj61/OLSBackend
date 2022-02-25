const servicedetailModel = require("../model/servicedetail-model")

//add serviceDetails
module.exports.addServicedetail = function(req, res){

    let serviceDetailinput = req.body.serviceDetail;
    let workingId = req.body.workingId;
    let availability = req.body.availability;
    let price = req.body.price

    let serviceDetail = new servicedetailModel({
        serviceDetail:serviceDetailinput,
        workingId: workingId,
        availability: availability,
        price : price
    })

    //model

    serviceDetail.save(function(err,data){
        if(err){
            res.json({
                msg:"Something Went wrong",
                data:err,
                status:-1
            })

        }else{
            res.json({
                msg:"Service details added",
                data:data,
                status:200
            })
        }
    })
}

//list all service details
module.exports.listServiceDetail = function(req, res){
    servicedetailModel.find().populate("workingId").exec(function(err, data){
        if(err){
            res.json({
                msg:"Not listed",
                status:-1,
                data:err
            })
        }else{
            res.json({
                msg:"Listed",
                status:200,
                data:data
            })
        }
    })
}

//adding url in index.js remains
const vendorDetailModel = require("../model/vendordetail-model")

//addVendorDetails
module.exports.addVendorDetails = function(req, res){
    let userId = req.body.userId
    let subCatId = req.body.subCatId
    let serviceDetail = req.body.serviceDetail
    let price = req.body.price
    let timing = req.body.timing

    let vendordetail = new vendorDetailModel({
        userId:userId,
        subCatId:subCatId,
        serviceDetails:serviceDetail,
        price:price,
        timing:timing
    })

    vendordetail.save(function(err,data){
        if(err){
            res.json({msg:"Vendor Details Not added", status:-1, data:err})
        }else{
            res.json({msg:"vendor details added", status:200, data:data})
        }
    })
}


//listing all vendor Details
module.exports.listAllVendorDetails = function(req, res){
    
    vendorDetailModel.find().populate("userId", "firstName").populate({path:"subCatId", select:"serviceName" , populate:{path:"category",select:"categoryName",model:"category"}}).exec(function(err,data){
        if(err){
            res.json({
                msg:"Not able to list",
                data:err,
                status:-1
            })
        }else{
            res.json({
                msg:"All vendor Details listed",
                data:data,
                status:200,
            })
        }
    })
}

//listing vendor by id
module.exports.listVendorDetailsById = function(req, res){

    vendorDetailModel.findById(req.params.vendordetailId).populate("userId", "firstName").populate({path:"subCatId", select:"serviceName" , populate:{path:"category",select:"categoryName",model:"category"}}).exec(function(err,data){
        if(err){
            res.json({
                msg:"Not able to find ",
                data:err,
                status:-1
            })
        }else{
            res.json({
                msg:"vendor Details listed",
                data:data,
                status:200,
            })
        }
    })
}

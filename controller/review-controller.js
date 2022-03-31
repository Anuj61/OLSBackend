const reviewModel = require("../model/review-model")


//add
module.exports.addReviews = function(req, res){
    let serviceId = req.body.serviceId
    let userId = req.body.userId
    let reviewDetails = req.body.reviewDetails
    let stars = req.body.stars


    let review  =  new reviewModel({
        serviceId:serviceId,
        userId: userId,
        reviewDetails: reviewDetails,
        stars:stars,
    })

    review.save(function(err, data){
        if(err){
            res.json({msg:"review not added", status:-1, data:err})
        }
        else{
            res.json({msg:"review added", status:200, data:data})
        }
    })
}

//list reivews
module.exports.listReviews = function(req, res){
    reviewModel.find().populate("user", "firstName").populate("serviceId", "firstName").exec(function(err, data){
        if(err){
            res.json({msg:"review not listed",status:-1,data:err})
        }else{
            res.json({msg:"reveiw listed", status:200, data:data})
        }
    })
}
//populating with multiple foreign keys and selecting a column to view

//update reivews
module.exports.updateReviews = function(req, res){
    
    let reviewId = req.body.reviewId
    let reviewDetails = req.body.reviewDetails
    let stars = req.body.stars

    reviewModel.updateOne({_id:reviewId}, {reviewDetails:reviewDetails, stars:stars}, function(err,data){
        if(err){
            res.json({
                msg:"not updataed",
                data:err,
                status:-1
            })
        }else{
            res.json({
                msg:"updated reveiw",
                status:200,
                data:data
            })
        }
    })
}

module.exports.enableDisableReviews = function(req, res){
    let reviewId = req.body.reviewId
    let isActive = req.body.isActive

    reviewModel.updateOne({_id:reviewId}, {isActive:isActive}, function(err,data){
        if(err){
            res.json({msg:"Action Not approved", status:-1, data:err})
        }else{
            res.json({msg:"Action approved", status:200, data:data})
        }
    })
}
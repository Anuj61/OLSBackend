//add model
const CategoryModel = require("../model/category-model");



//add category
module.exports.addCategory = function(req, res){

    //insert category
    let category = new CategoryModel({
        categoryName: req.body.categoryName
    })

    //save category
    category.save(function(err, success){

        if(err){
            res.json({msg:"Unsuccessful", status:-1, data:err})
        }else{
            res.json({msg:"Successful", status:200, data:success})

        }
    })
}

//list all category
module.exports.listAllCategory = function(req, res){
    CategoryModel.find(function(err, data){
        if(err){
            res.json({msg:"Something went wrong",status:-1, data:err })
        }else{
            res.json({msg:"Listed Category",status:200, data:data })
        }
    })
}

//update category
module.exports.updateCategory = function(req, res){

    //input category id
    let catId = req.body.categoryId
    let updatedCatName = req.body.categoryName

    CategoryModel.updateOne({_id:catId}, {categoryName:updatedCatName}, function(err, data){
        if(err){
            res.json({msg:"Data not updated", status:-1, data:data})
        }else{
            res.json({msg:"Data updated", status:200, data:data})

        }
    })
}

//delete categoy
module.exports.deleteCategory = function(req,res){
    
    let categoryId = req.params.categoryId
    
    CategoryModel.deleteOne({"_id":categoryId},function(err,data){
        if (err) {
            res.json({
                msg:"something went wrong!",
                status:-1,
                data:err
            })
        } else {
            res.json({
                msg:"removed data",
                status:200,
                data:data
            })
        }
    })
}

//disable category (update)
module.exports.disableCategory = function(req, res){
    
    //taking id
    let catId = req.body.categoryId;
    
    // console.log(catId)
    CategoryModel.updateOne({_id: catId}, {isActive: false}, function(err, data){
        if(err){
            res.json({msg:"Not disabled", status:-1, data:err})
        }else{
            res.json({msg:"Disabled", status:200, data:data})
        }
    })
}

//enable category(update)

module.exports.enableCategory = function(req, res){

    let catId = req.body.categoryId;

    CategoryModel.updateOne({_id: catId}, {isActive: true}, function(err, data){
        if(err){
            res.json({msg:"Not eenabled", status:-1, data:err})
        }else{
            res.json({msg:"Enabled", status:200, data:data})
        }


    })


}


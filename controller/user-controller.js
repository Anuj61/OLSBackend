const UserModel = require("../model/user-model")



//add
module.exports.addUser = function(req, res){

    let firstName = req.body.firstName;
    let email = req.body.email;
    let password = req.body.password;
    let role = req.body.role



    let user = new UserModel({
        firstName: firstName,
        email: email,
        password: password,
        role: role
    })


    user.save(function(err, data){
        if(err){
            res.json({msg:"SMW ", data:err, status:-1})
        }
        else{
            res.json({msg:"Sign up done",data:data, status:200})//http status code
        }
    })
}

//List all users
module.exports.listAllUsers = function(req, res){

    UserModel.find().populate("role").exec(function(err,data){
        if(err){
            res.json({msg:"SMW ", data:err, status:-1})
        }
        else{
            res.json({msg:"Listing done",data:data, status:200})//http status code
        }
    })
}

//update a user
module.exports.updateUsers = function(req, res){

    let userId = req.body.userId;
    let firstName  = req.body.firstName;
    let email = req.body.email;

    console.log(firstName, " ", email)
    UserModel.updateOne(
        {_id:userId},
        {firstName:firstName, email:email},
        function(err, data){
            if(err){
                res.json({msg:"SMW ", data:err, status:-1})
            }
            else{
                res.json({msg:"Update donedone",data:data, status:200})//http status code
            }
        })
}

//del user by Id
module.exports.delUser = function(req,res){

    let userId = req.params.userId;

    UserModel.deleteOne({_id:userId}, function(err, data){
        if(err){
            res.json({msg:"SMW ", data:err, status:-1})
        }
        else{
            res.json({msg:"Delete done",data:data, status:200})//http status code
        }
    })
}
const UserModel = require("../model/user-model")
const bcrypt = require("bcrypt")


//add
module.exports.addUser = function(req, res){

    let firstName = req.body.firstName;
    let email = req.body.email;
    let password = req.body.password;
    let role = req.body.role

    let encryptpassword = bcrypt.hashSync(password, 10)


    let user = new UserModel({
        firstName: firstName,
        email: email,
        password: encryptpassword,
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

//login
module.exports.login  = function(req, res){
    
    let inputEmail = req.body.email
    let inputPassword = req.body.password

    let isCorrect = false;

    UserModel.findOne({email:inputEmail}, function(err,data){
        if(data){
            let ans = bcrypt.compareSync(inputPassword,data.password)
            if(ans == true){
                isCorrect = true
            }
        }
        
        if(isCorrect == false){
            res.json({
                msg:"Invalid credentials",
                status:-1,
                data:req.body
            })
        }else{
            res.json({
                msg:"Successful login",
                status:200,
                data:data
            })
        }
    })
    
}


const { append } = require("express/lib/response");
const fs = require("fs")
const bcrypt = require("bcrypt")
const UserModel = require("../model/user-model")


function login(req, res){


    res.write("login");
    res.end();

}


function signUp(req, res){

    let signUpHtml  = fs.readFileSync("./views/signUp.html")
    res.write(signUpHtml);
    res.end();
}

function saveUser(req, res){  //making saveUser for action in html

    console.log(req.body)

    res.json({ //responding json type data
        msg:"data saved",
        status:200,
        data:req.body
    })
}


//sending otp for password
function sendOtpForPassword(req,res){
    let emailParam  = req.body.email 
    UserModel.find({email:emailParam},function(err,data){
        if(err){
            res.json({status:-1,msg:"SMW",data:err})
        }else{
            if(data.length != 0){
                let myotp = parseInt(Math.random()*1000000)
                UserModel.updateOne({email:emailParam},{otp:myotp},function(err,success){
                    res.json({status:200,msg:"otp sent to your email",data:""})
                })           

            }else{
                res.json({status:-1,msg:"Invalid Email",data:err})
            }
        }
    })            
}

//export


    module.exports.signUp = signUp
    module.exports.login = login
    module.exports.saveUser = saveUser; //exporting saveUser
    module.exports.sendOtpForPassword = sendOtpForPassword
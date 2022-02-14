

const { append } = require("express/lib/response");
const fs = require("fs")


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

//export


    module.exports.signUp = signUp
    module.exports.login = login
    module.exports.saveUser = saveUser; //exporting saveUser
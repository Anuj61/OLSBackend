

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

//export


    module.exports.signUp = signUp
    module.exports.login = login
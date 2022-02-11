



function login(req, res){


    res.write("login");
    res.end();
}


function signUp(req, res){


    res.write("signUp");
    res.end();
}

//export


    module.exports.signUp = signUp
    module.exports.login = login
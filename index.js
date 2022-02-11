const express = require("express");
const res = require("express/lib/response");

const sessionController = require("./controller/session-controller");

const app = express();


app.get("/", function(req, res){
    res.write("Landing Page");
    res.end();
})


app.get("/Login", sessionController.login);


app.get("/signUp", sessionController.signUp);

// app.get("/login", function(req, res){
//     res.write("Login Page");
//     res.end();
// })

// app.get("/signup", function(req, res){
//     res.write("SignUP page")
//     res.end()
// })


app.listen(3000, function(){
    console.log("Server started at 3000 port number")
})
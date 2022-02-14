const express = require("express");
const res = require("express/lib/response");

const sessionController = require("./controller/session-controller");

const app = express();

//middleware for getting data from html and parsing it
app.use(express.json()) // use express.json() method to parse appdata
app.use(express.urlencoded({extends:true})) //use urlencoding for parsing url data with extending all the extra special characters ex:emojis


app.get("/", function(req, res){
    res.write("Landing Page");
    res.end();
})


app.get("/Login", sessionController.login);
app.get("/signUp", sessionController.signUp);
app.post("/saveUser", sessionController.saveUser);  //using post method as the form method is of post type

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
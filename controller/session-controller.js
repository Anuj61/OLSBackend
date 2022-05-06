const { append } = require("express/lib/response");
const nodemailer = require("nodemailer");
const fs = require("fs");
const bcrypt = require("bcrypt");
const UserModel = require("../model/user-model");

const dotenv = require("dotenv");
dotenv.config();

function login(req, res) {
  res.write("login");
  res.end();
}

function signUp(req, res) {
  let signUpHtml = fs.readFileSync("./views/signUp.html");
  res.write(signUpHtml);
  res.end();
}

function saveUser(req, res) {
  //making saveUser for action in html

  console.log(req.body);

  res.json({
    //responding json type data
    msg: "data saved",
    status: 200,
    data: req.body,
  });
}

//sending otp for password
function sendOtpForPassword(req, res) {
  let emailParam = req.body.email;
  UserModel.find({ email: emailParam }, function (err, data) {
    if (err) {
      res.json({ status: -1, msg: "SMW", data: err });
    } else {
      if (data.length != 0) {
        let myotp = parseInt(Math.random() * 1000000);
        UserModel.updateOne(
          { email: emailParam },
          { otp: myotp },
          function (err, success) {
            //mail send
            let transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: "ols.projectfinalyear@gmail.com",
                pass: "olsprojectfinalyear@2022",
              },
            });

            console.log("created transporter");

            let mailDetails = {
              from: "ols.projectfinalyear@gmail.com",
              to: emailParam,
              subject: "OTP to Reset Password",
              text: "Hey Your OTP for Reset Password is: " + myotp,
            };

            transporter.sendMail(mailDetails, function (err, data) {
              if (err) {
                console.log(transporter, mailDetails, emailParam);
                res.json({ status: -1, msg: "otp not sent", data: err });
              } else {
                res.json({
                  status: 200,
                  msg: "otp sent to your email",
                  data: "",
                });
              }
            });
          }
        );
      } else {
        res.json({ status: -1, msg: "Invalid Email", data: err });
      }
    }
  });
}

function checkOTP(req, res) {
  let otp = req.body.otp;
  let email = req.body.email;
  let password = req.body.password;
  UserModel.find({ email: email, otp: otp }, "otp", function (err, data) {
    if (err) {
      res.json({
        status: -1,
        msg: "mail or otp not found",
        data: err,
      });
    } else {
      if (data.length != 0) {
        res.json({
          status: 200,
          msg: "OTP is correct",
          data: data,
        });
      } else {
        res.json({ status: -1, msg: "Invalid OTP", data: err });
      }
    }
  });
}
//export

module.exports.signUp = signUp;
module.exports.login = login;
module.exports.saveUser = saveUser; //exporting saveUser
module.exports.sendOtpForPassword = sendOtpForPassword;
module.exports.checkOTP = checkOTP;

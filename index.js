//middlewares and library
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const morgan = require("morgan");

const checkAuth = require("./middleware/check-auth");

//session (login, signUp, forgot pass)
const sessionController = require("./controller/session-controller");

//admin contorllers
const categoryController = require("./controller/category-controller");
const userController = require("./controller/user-controller");
const addressController = require("./controller/address-controller");
const vendorDetailController = require("./controller/vendordetail-controller");
// const servicedetailController = require("./controller/servicedetail-controller")

const reviewRouter = require("./router/review.router");
const roleRouter = require("./router/role.router");
const userRouter = require("./router/user.router");
const subcategoryRouter = require("./router/subcategory.router");
const categoryRouter = require("./router/category.router");

const app = express();
//cors for cross origin resource sharing
app.use(cors());
//middleware for getting data from html and parsing it
app.use(express.json()); // use express.json() method to parse appdata
app.use(express.urlencoded({ extends: true })); //use urlencoding for parsing url data with extending all the extra special characters ex:emojis

// Logger
app.use(morgan("dev"));

//database connection
mongoose.connect(
  "mongodb://localhost:27017/onlineLocalService",
  function (err) {
    if (err) {
      console.log("Error while connecting");
    } else {
      console.log("db connected");
    }
  }
);

//basic example of working with node servere
app.get("/", function (req, res) {
  res.write("Landing Page");
  res.end();
});

//urls
app.get("/login", sessionController.login); //dummy
app.get("/signUp", sessionController.signUp); //dummyP
app.post("/saveUser", sessionController.saveUser);
app.post("/sendotpforpassword", sessionController.sendOtpForPassword);
//using post method as the form method is of post type

//role
app.use("/roles", roleRouter);

//category
app.use("/categories", categoryRouter);

//user
app.use("/users", userRouter);

app.get("/listOnlyVendors", userController.listOnlyVendors);

app.post("/login", userController.login);
app.post("/loginJWT", userController.loginJWT);

//localServiceDetail
app.use("/subcategories", subcategoryRouter);

//addressLocation  listAddress not able to list using populate
// app.get("/userAddress", addressController.listAddressUser)
app.post("/addresses", addressController.addAddress);
app.get("/addresses", addressController.listAddress);
app.put("/addresses", addressController.updateAddress);
app.delete("/addresses/:addressId", addressController.delAddress);
app.get("/listUserAddress", addressController.listUserAddress);
app.get("/addressesById/:addressId", addressController.getAddressById);

//workingdetail
// app.post("/servicedetail", servicedetailController.addServicedetail)

//vendordetails
app.post("/vendorDetails", vendorDetailController.addVendorDetails);
app.get("/vendorDetails", vendorDetailController.listAllVendorDetails);
app.get(
  "/vendorDetails/:vendordetailId",
  vendorDetailController.listVendorDetailsById
);
// app.put("/vendorDetails", vendorDetailController)

//review
app.use("/reviews", reviewRouter);

app.listen(3000, function () {
  console.log("Server started at 3000 port number");
});

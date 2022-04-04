//middlewares and library
const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const res = require("express/lib/response");
const { use } = require("bcrypt/promises");


//session (login, signUp, forgot pass)
const sessionController = require("./controller/session-controller");

//admin contorllers
const roleController = require("./controller/role-controller");
const categoryController = require("./controller/category-controller")
const userController = require("./controller/user-controller")
const subcategoryController = require("./controller/subcategory-controller");
const addressController = require("./controller/address-controller")
const reviewController = require("./controller/review-controller");
const vendorDetailController = require("./controller/vendordetail-controller")
// const servicedetailController = require("./controller/servicedetail-controller")



const app = express();
//cors for cross origin resource sharing 
app.use(cors());
//middleware for getting data from html and parsing it
app.use(express.json()) // use express.json() method to parse appdata
app.use(express.urlencoded({extends:true})) //use urlencoding for parsing url data with extending all the extra special characters ex:emojis

//database connection
mongoose.connect('mongodb://localhost:27017/onlineLocalService', function(err){
    if(err){ 
        console.log('Error while connecting')
    }
    else{
        console.log('db connected')
    }
})


//basic example of working with node servere
app.get("/", function(req, res){
    res.write("Landing Page");
    res.end();
})

//urls
app.get("/login", sessionController.login);  //dummy
app.get("/signUp", sessionController.signUp); //dummyP
app.post("/saveUser", sessionController.saveUser);
app.post("/sendotpforpassword",sessionController.sendOtpForPassword)
//using post method as the form method is of post type


//role
app.post("/roles", roleController.addRole);
app.get("/roles", roleController.listAllRole);
app.delete("/roles/:roleId", roleController.deleteRole);
app.put("/roles", roleController.updateRole)
app.get("/roles/:roleId", roleController.listRoleById)


//category
app.post("/categories", categoryController.addCategory);
app.get("/categories", categoryController.listAllCategory);
app.delete("/categories/:categoryId", categoryController.deleteCategory);
app.put("/categories", categoryController.updateCategory);
app.get("/categories/:categoryId", categoryController.listCategoryById)
app.put("/disablecategory", categoryController.disableCategory);
app.put("/enablecategory",categoryController.enableCategory);

//user
app.post("/users", userController.addUser)
app.get("/users", userController.listAllUsers)
app.put("/users", userController.updateUsers)
app.delete("/users/:userId", userController.delUser)
app.get("/users/:userId", userController.listUserById)

app.post("/login", userController.login)


//localServiceDetail
app.post("/subcategories", subcategoryController.addDetails)
app.get("/subcategories", subcategoryController.listAllService)
app.put("/subcategories", subcategoryController.updateService)
app.delete("/subcategories/:subcategoryId", subcategoryController.delService)
app.get("/subcategories/:subCatId", subcategoryController.listServiceById)

//addressLocation  listAddress not able to list using populate
// app.get("/userAddress", addressController.listAddressUser)
app.post("/addresses", addressController.addAddress)
app.get("/addresses", addressController.listAddress)
app.put("/addresses", addressController.updateAddress)
app.delete("/addresses/:addressId", addressController.delAddress)
app.get("/listUserAddress", addressController.listUserAddress)
app.get("/addressesById/:addressId",addressController.getAddressById)

//workingdetail
// app.post("/servicedetail", servicedetailController.addServicedetail)

//vendordetails
app.post("/vendorDetails",vendorDetailController.addVendorDetails)
app.get("/vendorDetails",vendorDetailController.listAllVendorDetails)
app.get("/vendorDetails/:vendordetailId", vendorDetailController.listVendorDetailsById)
// app.put("/vendorDetails", vendorDetailController)


//review
app.post("/reviews",reviewController.addReviews);
app.get("/reviews", reviewController.listReviews)
app.put("/reviews", reviewController.updateReviews)
app.put("/reivewAction", reviewController.enableDisableReviews)
app.listen(3000, function(){
    console.log("Server started at 3000 port number")
})

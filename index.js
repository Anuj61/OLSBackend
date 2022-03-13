const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")

const res = require("express/lib/response");

const sessionController = require("./controller/session-controller");
const roleController = require("./controller/role-controller");
const categoryController = require("./controller/category-controller")
const userController = require("./controller/user-controller")
const app = express();
const subcategoryController = require("./controller/subcategory-controller");
const addressController = require("./controller/address-controller")
// const servicedetailController = require("./controller/servicedetail-controller")
const providerDetailController = require("./controller/providerdetail-controller");
const reviewController = require("./controller/review-controller")
//middleware for getting data from html and parsing it
app.use(cors());
app.use(express.json()) // use express.json() method to parse appdata
app.use(express.urlencoded({extends:true})) //use urlencoding for parsing url data with extending all the extra special characters ex:emojis

//database
mongoose.connect('mongodb://localhost:27017/onlineLocalService', function(err){
    if(err){ 
        console.log('Error while connecting')
    }
    else{
        console.log('db connected')
    }
})


app.get("/", function(req, res){
    res.write("Landing Page");
    res.end();
})

//urls
app.get("/login", sessionController.login);  //dummy
app.get("/signUp", sessionController.signUp); //dummyP
app.post("/saveUser", sessionController.saveUser);
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
app.delete("/categories/:categoriesId", categoryController.deleteCategory);
app.put("/categories", categoryController.updateCategory);
//category disable ask sir about updating two things at a same time
app.put("/disablecategory", categoryController.disableCategory);
app.put("/enablecategory",categoryController.enableCategory);

//user
app.post("/users", userController.addUser)
app.get("/users", userController.listAllUsers)
app.put("/users", userController.updateUsers)
app.delete("/users/:userId", userController.delUser)
app.post("/login", userController.login )


//localServiceDetail
app.post("/subcategories", subcategoryController.addDetails)
app.get("/subcategories", subcategoryController.listAllService)
app.put("/subcategories", subcategoryController.updateService)
app.delete("/subcategories/:subcategoriesId", subcategoryController.delService)

//addressLocation  listAddress not able to list using populate
app.post("/addresses", addressController.addAddress)
app.get("/addresses", addressController.listAddress)
//doubt of list address
app.put("/addresses", addressController.updateAddress)
app.delete("/addresses/:addressesId", addressController.delAddress)

//workingdetail
// app.post("/servicedetail", servicedetailController.addServicedetail)

//serviceproviderdetails
app.post("/providerdetails",providerDetailController.addProviderDetail)
app.get("/providerdetails",providerDetailController.listProviderDetail)
app.put("/providerdetails" ,providerDetailController.updateProivderDetails)
app.delete("/providerdetails/:providerDetailId",providerDetailController.deleteProviderDetails)

//review
app.post("/reviews",reviewController.addReviews);
app.get("/reviews", reviewController.listReviews)
app.put("/reviews", reviewController.updateReviews)
app.listen(3000, function(){
    console.log("Server started at 3000 port number")
})

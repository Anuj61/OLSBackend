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
const providerDetailModel = require("./controller/providerdetail-controller")
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
app.get("/Login", sessionController.login);
app.get("/signUp", sessionController.signUp);
app.post("/saveUser", sessionController.saveUser);
//using post method as the form method is of post type


//role
app.post("/roles", roleController.addRole);
app.get("/roles", roleController.listAllRole);
app.delete("/roles/:roleId", roleController.deleteRole);
app.put("/roles", roleController.updateRole)

//category
app.post("/category", categoryController.addCategory);
app.get("/category", categoryController.listAllCategory);
app.delete("/category/:categoryId", categoryController.deleteCategory);
app.put("/category", categoryController.updateCategory);
//category disable ask sir about updating two things at a same time
app.put("/disablecategory", categoryController.disableCategory);
app.put("/enablecategory",categoryController.enableCategory);

//user
app.post("/users", userController.addUser)
app.get("/users", userController.listAllUsers)
app.put("/users", userController.updateUsers)
app.delete("/users/:userId", userController.delUser)


//localServiceDetail
app.post("/subcategory", subcategoryController.addDetails)
app.get("/subcategory", subcategoryController.listAllService)
app.put("/subcategory", subcategoryController.updateService)
app.delete("/subcategory/:subcategoryId", subcategoryController.delService)

//addressLocation  listAddress not able to list using populate
app.post("/address", addressController.addAddress)
app.get("/address", addressController.listAddress)
//doubt of list address
app.put("/address", addressController.updateAddress)
app.delete("/address/:addressId", addressController.delAddress)

//workingdetail
// app.post("/servicedetail", servicedetailController.addServicedetail)

//serviceproviderdetails
app.post("/providerdetail",providerDetailModel.addProviderDetail)
app.get("/providerdetail",providerDetailModel.listProviderDetail)
app.put("/providerdetail" ,providerDetailModel.updateProivderDetails)
app.delete("/providerdetail/:providerDetailId",providerDetailModel.deleteProviderDetails)

app.listen(3000, function(){
    console.log("Server started at 3000 port number")
})


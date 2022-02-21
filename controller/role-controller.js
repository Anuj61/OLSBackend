const RoleModel = require("../model/role-model")


//adding role
module.exports.addRole = function (req,res){
    //db insert role 

    let role = new RoleModel({
        roleName:req.body.roleName
    })
    
    role.save(function(err, success){
        
        console.log(err)
        if(err){
            res.json({msg:"Unsuccessful something wrong", status:200, data:req.body})
        }
        else{
            res.json({msg:"Successful", status:200, data:success})
        }
    })
    // console.log(req.body.roleName);
    // res.json({msg:"role added",status:200,data:req.body})
}

//listing all roles
module.exports.listAllRole = function(req, res){
    RoleModel.find(function(err, roles){
        if (err) {
            res.json({
                msg:"Something went wrong",
                status:-1,
                data: err
            })
        } else {
                res.json({
                msg:"Roles listed",
                status:200,
                data: roles
            })           
        }
    })
}


module.exports.deleteRole = function(req, res){

    //let roleId = req.params.roleId


    RoleModel.deleteOne({"_id":req.params.roleId},function(err,data){
        if (err) {
            res.json({
                msg:"something went wrong!",
                status:-1,
                data:err
            })
        } else {
            res.json({
                msg:"removed data",
                status:200,
                data:data
            })
        }
    })
}
















//alternate way to directly export the api/function
// function addRole(req, res){
    
//     console.log(req.body.roleName)
//     res.json({
//         msg:"role add",
//         status:200,
//         data: req.body,
//     })
// }


// function updateRole(req, res){

// }


// function deleteRole(req, res){

// }


// function getAllRoles(req, res){

// }


// function getRoleById(req, res){

// }
// module.exports.addRole = addRole

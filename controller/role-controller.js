const RoleModel = require("../model/role-model")



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

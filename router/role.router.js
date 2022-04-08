const express = require("express");

const roleController = require("../controller/role-controller");

const router = express.Router();

router.post("/", roleController.addRole);
router.get("/", roleController.listAllRole);
router.delete("/:roleId", roleController.deleteRole);
router.put("/", roleController.updateRole);
router.get("/:roleId", roleController.listRoleById);

module.exports = router;

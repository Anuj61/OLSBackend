const express = require("express");

const userController = require("../controller/user-controller");

const router = express.Router();

router.post("/", userController.addUser);
router.get("/", userController.listAllUsers);
router.put("/", userController.updateUsers);
router.delete("/:userId", userController.delUser);
router.get("/:userId", userController.listUserById);

module.exports = router;

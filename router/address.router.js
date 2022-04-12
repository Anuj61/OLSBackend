const addressController = require("../controller/address-controller");
const express = require("express");
const router = express.Router();

router.post("/", addressController.addAddress);
router.get("/:addressId", addressController.getAddressById);
router.get("/", addressController.listAddress);
router.put("/", addressController.updateAddress);
router.delete("/:addressId", addressController.delAddress);
router.get("/list/vendor", addressController.getVendors);
router.get("/list/user", addressController.getUsers);

module.exports = router;

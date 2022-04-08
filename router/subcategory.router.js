const express = require("express");

const subcategoryController = require("../controller/subcategory-controller");

const router = express.Router();

router.post("/", subcategoryController.addDetails);
router.get("/", subcategoryController.listAllService);
router.put("/", subcategoryController.updateService);
router.delete("/:subcategoryId", subcategoryController.delService);
router.get("/:subCatId", subcategoryController.listServiceById);

module.exports = router;

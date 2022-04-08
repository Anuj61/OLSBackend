const express = require("express");

const categoryController = require("../controller/category-controller");

const router = express.Router();

router.post("/", categoryController.addCategory);
router.get("/", categoryController.listAllCategory);
router.delete("/:categoryId", categoryController.deleteCategory);
router.put("/", categoryController.updateCategory);
router.get("/:categoryId", categoryController.listCategoryById);
router.put("/action/disablecategory", categoryController.disableCategory);
router.put("/action/enablecategory", categoryController.enableCategory);

module.exports = router;

const express = require("express");
const reviewController = require("../controller/review-controller");

const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("/", checkAuth, reviewController.addReviews);
router.get("/", checkAuth, reviewController.listReviews);
router.put("/", checkAuth, reviewController.updateReviews);
router.put("/action", checkAuth, reviewController.enableDisableReviews);

module.exports = router;

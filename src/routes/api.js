const express = require("express");
const ProfileController = require('../controllers/ProfileController');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');
const router = express.Router();


router.post("/CreateProfile", ProfileController.CreateProfile)
router.post("/UserLogin", ProfileController.UserLogin)
router.get("/selectProfile", AuthVerifyMiddleware, ProfileController.selectProfile)












//export router
module.exports = router;

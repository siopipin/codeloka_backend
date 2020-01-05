const express = require("express");
const router = express.Router();

//Controller
const SettingController = require("../controllers/SettingController");

router.get("/profile", SettingController.getProfile);

module.exports = router;

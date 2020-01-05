const express = require("express");
const router = express.Router();

// Routes
const SettingRoutes = require("./routes/SettingRoutes");

router.use("/settings", SettingRoutes);

module.exports = router;

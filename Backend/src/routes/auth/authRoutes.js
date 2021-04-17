const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth/authController");
const { registerBody } = require("../../validators/validators");

router.post("/register-user", registerBody(), authController.registerUser);

module.exports = router;

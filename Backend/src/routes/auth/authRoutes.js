const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth/authController");
const { registerBody } = require("../../validators/validators");

const validate = registerBody();
router.post("/register-user", validate, authController.registerUser);

module.exports = router;

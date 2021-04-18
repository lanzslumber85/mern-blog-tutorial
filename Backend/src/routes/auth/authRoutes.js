const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth/authController");
const { registerUserValidator } = require("../../validators/validators");

router.post(
    "/register-user",
    registerUserValidator(),
    authController.registerUser
);

module.exports = router;

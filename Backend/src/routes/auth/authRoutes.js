const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth/authController");
const authSchema = require("./schema");

router.post("/register-user", authSchema.schema(), authController.registerUser);

module.exports = router;

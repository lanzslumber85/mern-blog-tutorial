const express = require("express");
const router = express.Router();
const blogController = require("../../controllers/blog/blogController");

router.post("/create-blog", blogController.createBlog);

module.exports = router;

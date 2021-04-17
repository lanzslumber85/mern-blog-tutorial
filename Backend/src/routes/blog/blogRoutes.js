const express = require("express");
const router = express.Router();
const blogController = require("../../controllers/blog/blogController");
const { createBlogBody } = require("../../validators/validators");

router.post("/create-blog", createBlogBody(), blogController.createBlog);

module.exports = router;

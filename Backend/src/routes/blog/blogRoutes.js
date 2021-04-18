const express = require("express");
const router = express.Router();
const blogController = require("../../controllers/blog/blogController");
const { createBlogBody } = require("../../validators/validators");

const validate = createBlogBody();
router.post("/create-blog", validate, blogController.createBlog);

router.get("/get-blogs", blogController.getAllBlogs);

module.exports = router;

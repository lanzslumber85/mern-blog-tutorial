const express = require("express");
const router = express.Router();
const blogController = require("../../controllers/blog/blogController");
const { createBlogBody } = require("../../validators/validators");

const validate = createBlogBody();
router.post("/create-blog", validate, blogController.createBlog);

router.get("/get-blogs", blogController.getAllBlogs);

router.get("/get-blog-by-id/:postID", blogController.getBlogByID);

module.exports = router;

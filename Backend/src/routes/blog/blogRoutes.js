const express = require("express");
const router = express.Router();
const blogController = require("../../controllers/blog/blogController");
const { createBlogValidator } = require("../../validators/validators");

router.post("/create-blog", createBlogValidator(), blogController.createBlog);
router.get("/get-blogs", blogController.getAllBlogs);
router.get("/get-blog-by-id/:postID", blogController.getBlogByID);
router.put("/get-blog-by-id/:postID", blogController.updateBlogByID);
router.delete("/get-blog-by-id/:postID", blogController.deleteBlogByID);

module.exports = router;

const express = require("express");
const router = express.Router();
const blogController = require("../../controllers/blog/blogController");
const blogSchema = require("./schema");

router.post("/create-blog", blogSchema.schema(), blogController.createBlog);

module.exports = router;

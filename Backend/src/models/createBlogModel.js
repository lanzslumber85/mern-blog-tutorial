const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createBlog = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        author: {
            type: Object,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("CreateBlogModel", createBlog);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createBlog = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: new.Date(),
    },
    author: {
        type: Object,
        required: true,
    },
});

module.exports = mongoose.model("CreateBlog", createBlog);

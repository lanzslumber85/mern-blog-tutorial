const { checkError, checkErrorFile } = require("../../errors/errors");
const BlogModel = require("../../models/createBlogModel");
const { postData } = require("../../crud/postData");
const { getData } = require("../../crud/getData");
const { getDataByID } = require("../../crud/getDataByID");
const { updateData } = require("../../crud/updateData");
const { deleteData } = require("../../crud/deleteData");
const { getPaginationData } = require("../../crud/getPaginationData");

exports.createBlog = (req, res, next) => {
    checkError(req);
    checkErrorFile(req);

    const post = new BlogModel({
        title: req.body.title,
        content: req.body.content,
        image: req.file.path,
        author: {
            uid: 1,
            name: "azman",
        },
    });
    postData(post, res, next);
};

exports.getAllBlogs = (req, res, next) => {
    const get = BlogModel;
    getData(get, res, next);
};

exports.getBlogsByPagination = (req, res, next) => {
    const currentPage = req.query.page || 1;
    const perPage = req.query.perPage || 5;
    const get = BlogModel;
    getPaginationData(get, res, next, currentPage, perPage);
};

exports.getBlogByID = (req, res, next) => {
    const get = BlogModel;
    getDataByID(get, req, res, next);
};

exports.updateBlogByID = (req, res, next) => {
    checkError(req);
    checkErrorFile(req);
    const put = BlogModel;
    updateData(put, req, res, next);
};

exports.deleteBlogByID = (req, res, next) => {
    const del = BlogModel;
    deleteData(del, req, res, next);
};

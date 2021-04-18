const {
    checkError,
    checkErrorImage,
    checkDataError,
} = require("../../errors/errors");
const BlogModel = require("../../models/createBlogModel");

exports.createBlog = (req, res, next) => {
    checkError(req);
    checkErrorImage(req);

    const post = new BlogModel({
        title: req.body.title,
        content: req.body.content,
        image: req.file.path,
        author: {
            uid: 1,
            name: "azman",
        },
    });

    post.save()
        .then(result => {
            res.status(201).json({
                message: "CREATE Blog success!",
                data: result,
            });
            next();
        })
        .catch(err => console.log("err:", err));
};

exports.getAllBlogs = (req, res, next) => {
    const get = BlogModel;

    get.find()
        .then(result => {
            res.status(200).json({
                message: "GET Blog success!",
                data: result,
            });
        })
        .catch(err => next(err));
};

exports.getBlogByID = (req, res, next) => {
    const get = BlogModel;

    get.findById(req.params.postID)
        .then(result => {
            checkDataError(result);

            res.status(200).json({
                message: "GET Blog by ID success!",
                data: result,
            });
        })
        .catch(err => next(err));
};

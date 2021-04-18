const { checkError, checkErrorImage } = require("../../errors/errors");
const Blog = require("../../models/createBlogModel");

exports.createBlog = (req, res, next) => {
    checkError(req);
    checkErrorImage(req);

    const title = req.body.title;
    const image = req.file.path;
    const content = req.body.content;

    const post = new Blog({
        title,
        content,
        image,
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
    const get = Blog;
    get.find()
        .then(result => {
            res.status(200).json({
                message: "GET Blog success!",
                data: result,
            });
        })
        .catch(err => next(err));
};

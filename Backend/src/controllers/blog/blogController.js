const { throwError, throwImageError } = require("../../errors/errors");
const CreateBlog = require("../../models/createBlogModel");

exports.createBlog = (req, res, next) => {
    throwError(req);
    throwImageError(req);

    const title = req.body.title;
    const image = req.file.path;
    const content = req.body.content;

    const postBlog = new CreateBlog({
        title,
        content,
        image,
        author: {
            uid: 1,
            name: "azman",
        },
    });

    postBlog
        .save()
        .then(result => {
            res.status(201).json({
                message: "Create Blog success!",
                data: result,
            });
            next();
        })
        .catch(err => console.log("err:", err));
};

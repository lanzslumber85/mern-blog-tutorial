const { throwError } = require("../../errors/errors");
const CreateBlog = require("../../models/createBlogModel");

exports.createBlog = (req, res, next) => {
    const title = req.body.title;
    const image = "imageFile.png";
    const content = req.body.content;

    throwError(req);

    const postBlog = new CreateBlog({
        title,
        content,
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

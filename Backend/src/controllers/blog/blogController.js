const { validate } = require("../../validator/validator");

exports.createBlog = (req, res, next) => {
    const title = req.body.title;
    const image = "imageFile.png";
    const content = req.body.content;

    validate(req);

    const result = {
        message: "Create Blog success!",
        data: [
            {
                post_id: 001,
                title,
                image,
                content,
                created_at: "17/04/2021",
                author: {
                    uid: 1,
                    name: "azman",
                },
            },
        ],
    };
    res.status(201).json(result);
    next();
};

const { body } = require("express-validator");

exports.registerBody = () => {
    return [
        body("name")
            .isLength({ min: 3 })
            .withMessage("Name must more than 3 characters!"),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Password must more than 6 characters!"),
    ];
};

exports.createBlogBody = () => {
    return [
        body("title")
            .isLength({ min: 4 })
            .withMessage("Title must more than 5 characters!"),
        body("content")
            .isLength({ min: 5 })
            .withMessage("Content must more than 5 characters!"),
    ];
};

const { body } = require("express-validator");

exports.schema = () => {
    return [
        body("title")
            .isLength({ min: 4 })
            .withMessage("Title must more than 5 characters!"),
        body("content")
            .isLength({ min: 5 })
            .withMessage("Content must more than 5 characters!"),
    ];
};

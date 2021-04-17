const { body } = require("express-validator");

const schema = () => {
    return [
        body("name")
            .isLength({ min: 3 })
            .withMessage("Name must more than 3 characters!"),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Password must more than 6 characters!"),
    ];
};

exports.schema = schema;

const { validationResult } = require("express-validator");

const validate = req => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error("Invalid value!");
        err.code = 400;
        err.data = errors.array();
        throw err;
    }
};

exports.validate = validate;

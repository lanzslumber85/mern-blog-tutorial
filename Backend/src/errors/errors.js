const { validationResult } = require("express-validator");

exports.throwError = req => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error("Invalid value!");
        err.code = 400;
        err.data = errors.array();
        throw err;
    }
};

exports.throwImageError = req => {
    const errors = validationResult(req);

    if (!req.file) {
        const err = new Error("You must upload an image!");
        err.code = 422;
        throw err;
    }
};

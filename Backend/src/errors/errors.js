const { validationResult } = require("express-validator");

exports.checkError = req => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error("Invalid value!");
        err.code = 400;
        err.data = errors.array();
        throw err;
    }
};

exports.checkErrorImage = req => {
    if (!req.file) {
        const err = new Error("You must upload an image!");
        err.code = 422;
        throw err;
    }
};

exports.checkDataError = data => {
    if (!data) {
        const error = new Error("Data not found!");
        error.code = 404;
        throw error;
    }
};

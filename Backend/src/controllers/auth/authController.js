const { checkError } = require("../../errors/errors");

exports.registerUser = (req, res, next) => {
    checkError(req);

    const result = {
        message: "Registration success!",
        data: [
            {
                uid: 001,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            },
        ],
    };

    res.status(201).json(result);
    next();
};

const { throwError } = require("../../errors/errors");

exports.registerUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    throwError(req);

    const result = {
        message: "Registration success!",
        data: [
            {
                uid: 001,
                name,
                email,
                password,
            },
        ],
    };

    res.status(201).json(result);
    next();
};

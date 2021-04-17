exports.registerUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;

    const result = {
        message: "Registration success!",
        data: [
            {
                uid: 001,
                name,
                email,
            },
        ],
    };

    res.status(201).json(result);
    next();
};

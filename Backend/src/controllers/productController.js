exports.createProduct = (req, res, next) => {
    res.json({
        message: "Create Product Success",
        data: [
            {
                id: 1,
                name: "Tepung",
                harga: 8.0,
            },
        ],
    });
    next();
};

exports.getAllProducts = (req, res, next) => {
    res.json({
        message: "Get All Products Success",
        data: [
            {
                id: 1,
                name: "Tepung",
                harga: 8.0,
            },
        ],
    });
    next();
};

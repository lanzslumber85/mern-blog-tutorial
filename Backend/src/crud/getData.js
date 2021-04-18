const getData = (get, res, next) => {
    get.find()
        .then(result => {
            res.status(200).json({
                message: "GET Data success!",
                data: result,
            });
        })
        .catch(err => next(err));
};

exports.getData = getData;

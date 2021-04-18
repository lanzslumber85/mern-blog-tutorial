const { checkDataError } = require("../errors/errors");

const getDataByID = (get, req, res, next) => {
    get.findById(req.params.postID)
        .then(result => {
            checkDataError(result);

            res.status(200).json({
                message: "GET Data by ID success!",
                data: result,
            });
        })
        .catch(err => next(err));
};

exports.getDataByID = getDataByID;

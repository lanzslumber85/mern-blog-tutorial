const { checkDataError } = require("../errors/errors");

const updateData = (put, req, res, next) => {
    put.findById(req.params.postID)
        .then(data => {
            checkDataError(data);

            data.title = req.body.title;
            data.content = req.body.content;
            data.image = req.file.path;

            return data.save();
        })
        .then(result => {
            res.status(200).json({
                message: "Update Blog by ID success!",
                data: result,
            });
        })
        .catch(err => next(err));
};

exports.updateData = updateData;

const { checkDataError } = require("../errors/errors");
const { removeFile } = require("./removeFile");

const deleteData = (del, req, res, next) => {
    del.findById(req.params.postID)
        .then(data => {
            checkDataError(data);
            removeFile(data.image);
            return del.findByIdAndRemove(req.params.postID);
        })
        .then(result => {
            res.status(200).json({
                message: "DELETE Data success!",
                data: result,
            });
        })
        .catch(err => next(err));
};

exports.deleteData = deleteData;

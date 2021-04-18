const multer = require("multer");

exports.fileStorage = () => {
    return multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, "assets/images");
        },
        filename: (req, file, callback) => {
            callback(null, `${new Date().getTime()}-${file.originalname}`);
        },
    });
};

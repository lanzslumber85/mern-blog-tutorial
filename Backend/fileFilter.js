exports.fileFilter = () => {
    return (req, file, callback) => {
        const fileType =
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/jpeg";

        fileType ? callback(null, true) : callback(null, false);
    };
};

const mongoose = require("mongoose");

exports.mongoDB = () => {
    mongoose
        .connect(
            "mongodb+srv://azlan:abcde12345@cluster0.1vru7.mongodb.net/mernBlog?retryWrites=true&w=majority"
        )
        .then(() => console.log("Connection with database is SUCCESSFUL"))
        .catch(error => console.log(error));
};

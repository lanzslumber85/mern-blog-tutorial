const mongoose = require("mongoose");

exports.mongoDB = () => {
    mongoose
        .connect(
            "mongodb+srv://azlan:abcde12345@cluster0.1vru7.mongodb.net/mernBlog?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            }
        )
        .then(() => console.log(`Connection to database ESTABLISHED`))
        .catch(err => console.log(`Database error: ${err.message}`));
};

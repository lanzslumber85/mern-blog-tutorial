const postData = (post, res, next) => {
    post.save()
        .then(result => {
            res.status(201).json({
                message: "CREATE new data success!",
                data: result,
            });
            next();
        })
        .catch(err => console.log("err:", err));
};

exports.postData = postData;

const getPaginationData = (get, res, next, currentPage, perPage) => {
    let totalData;

    get.find()
        .countDocuments()
        .then(count => {
            totalData = count;
            return get
                .find()
                .skip((parseInt(currentPage) - 1) * parseInt(perPage))
                .limit(parseInt(perPage));
        })
        .then(result => {
            res.status(200).json({
                message: "GET Data success!",
                data: result,
                total_items: totalData,
                items_per_page: parseInt(perPage),
                current_page: parseInt(currentPage),
            });
        })
        .catch(err => next(err));
};

exports.getPaginationData = getPaginationData;

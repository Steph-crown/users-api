const Users = require('./../models/users');

module.exports = (req, res, next) => {
    let id = req.params.id;
    Users.findOne({id: id}, (err, data) => {
        if (err) {
            res.status(402).json({
                error: "Data not found"
            })
        } else {
            res.status(200).json({
                data
            })
        }
    })
};
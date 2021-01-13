const Users = require('./../models/users')


module.exports = (req, res, next) => {
    let id = req.params.id;
    Users.findOneAndUpdate({id}, req.body, {new: true}, (err, data) => {
        if (!data) {
            res.status(503).json({
                error: "Error updating data" + err
            })
        } else {
            res.status(200).json({
                data
            })
        }
    })
};
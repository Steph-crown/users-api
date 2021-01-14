const Users = require('./../models/users');

module.exports = (req, res, next) => {
    let id = req.params.id;
    Users.findOne({id: id}, (err, data) => {
        if (!data) {
            res.status(406).json({
                error: `User with id ${id} not found`
            })
            throw new Error(`User with id ${id} not found`)
        } else {
            res.status(200).json({
                data
            })
        }
    })
};
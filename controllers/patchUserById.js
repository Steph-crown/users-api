const Users = require('./../models/users')


module.exports = (req, res, next) => {
    let id = req.params.id;
    Users.findOneAndUpdate({id}, req.body, {new: true}, (err, data) => {
        if (!data) {
            res.status(406).json({
                error: `'${id}' is not a valid id in database`
            })
        } else {
            res.status(200).json({
                data
            })
        }
    })
};
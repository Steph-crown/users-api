const User = require('./../models/users')

module.exports = (req, res) => {
    User.find((err, data) => {
        if (err) {
            throw new Error('Error Getting Users')
            res.status(400).json({
                error: "Error fetching data" + err
            })
        } else {
            res.status(200).json({
                data
            })
        }
    })
};
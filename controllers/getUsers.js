const User = require('./../models/users')

module.exports = (req, res) => {
    User.find((err, data) => {
        if (err) {
            res.status(400).json({
                error: "Error fetching data" + err
            })
            // throw new Error('Error Getting Users')

        } else {
            res.status(200).json({
                data
            })
        }
    })
};
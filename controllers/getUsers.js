const User = require('./../models/users')

module.exports = (req, res) => {
    User.find((err, data) => {
        if (err) {
            res.status(502).json({
                error: "Error fetching data" + err
            })
        } else {
            res.status(200).json({
                data
            })
        }
        
    })
};
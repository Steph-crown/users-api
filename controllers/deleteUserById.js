const Users = require('./../models/users')

module.exports = (req, res) => {
    Users.findOneAndDelete({id: req.params.id}, (err, data) => {
      if (data) {
        res.status(200).json({
          data
        });
      } else {
        res.status(406).json({
          error: `Data with id '${req.params.id}' not found `
        });
      }
    })
};
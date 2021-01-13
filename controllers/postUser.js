// This module creates a new user
const User = require('./../models/users');
const generateRandId = require('./../utils/generateRandId');
const sendMail = require('./../utils/sendMail')


module.exports = (req, res, next) => {
  let idList = [];
  User.find((err, data) => {
    // Gets list of previously used id strings
    idList = data.map(x => x.id)
  })

  // Generates new id for the new user that was not previously used
  let newUserId = generateRandId(idList)

  let newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    mobile: req.body.mobile,
    id: newUserId
  })

  newUser.save((err, data) => {
    if (err) {
      res.status(401).json({
        error: "Error saving user data " + err
      })
    } else {
      sendMail({
        email: req.body.email,
        subject: "User API",
        body: `
          <h1 style="color:#3fe645">Hi ${newUser.firstname} </h1>
          <p>You have successfully been registered to the users API. with this email</p>
          `
      }, (err, data) => {
        if (err) console.log(err);
        else console.log(data)
      })
      res.status(200).json({
        data
      })
    }
  })
}
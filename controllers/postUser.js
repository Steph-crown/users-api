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
      res.status(400).json({
        error:  err.message
      })
    } else {
      sendMail({
        email: req.body.email,
        subject: "User API",
        body: `
        <div style="background-color: rgb(169, 132, 255); padding:20px; border-radius:5px;">
            <h1 style="color:rgb(32, 0, 107); ">Hi ${newUser.firstname} </h1>
            <p style="font-size:24px; color:rgb(23, 0, 78)">You have successfully been registered to the users API. with this email</p>
            <b>You can find your registration details below</b>
            <p>First Name: ${req.body.firstname}</p>
            <p>Last Name: ${req.body.lastname}</p>
            <p>Email: ${req.body.email}</p>
            <p>Mobile: ${req.body.mobile}</p>
          </div>
          `
      }, (err, data) => {
        if (err) console.log(err);
        else console.log(data)
      })
      res.status(201).json({
        data
      })
    }
  })
}
const Users = require('./../models/users');
const sendMail = require('./../utils/sendMail')


module.exports = (req, res) => {
    Users.findOneAndDelete({id: req.params.id}, (err, data) => {
      if (data) {
        sendMail({
          email: data.email,
          subject: "!! Deleted data User API",
          body: `
          <div style="background-color: rgb(169, 132, 255); padding:20px; border-radius:5px;">
              <h1 style="color:rgb(32, 0, 107); ">Hi ${data.firstname} </h1>
              <p style="font-size:24px; color:rgb(23, 0, 78)">We are sad to announce that you have successfully ended our teeming relationship. Your users API account has been deleted.</p>
              <b>Our hearts still remain with you even as you have parted with us. We are always available if you wish to make a U-turn ;-)</b>
            </div>
            `
        }, (err, data) => {
          if (err) console.log(err);
          else console.log(data)
        })
        res.status(200).json({
          data
        });
      } else {
        res.status(406).json({
          error: `Data with id ${req.params.id} not found `
        });
        throw new Error(`Data with id ${req.params.id} not found `)
      }
    })
};
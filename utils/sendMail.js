var nodemailer = require('nodemailer');
require('dotenv').config()

module.exports = async function(mailData) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'emmanuelstephen024@@gmail.com',
      pass: process.env.PASSWORD
    }
  }); 

  var mailOptions = {
    from: '"Steph Crown" <stephtechnologies8@gmail.com>',
    to: mailData.email,
    subject: mailData.subject,
    html: mailData.body
  };

  try {
    data = await transporter.sendMail(mailOptions);
    return data;
  }catch(err) {
    return err
  }
}
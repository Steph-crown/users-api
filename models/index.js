// TO CONNECT THE DATABASE
// Mongo client
const mongoose = require('mongoose');

// Set up mongoose connection
var localhostUrl = 'mongodb://localhost:27017/users';
let thisUrl = 'mongodb+srv://stephcrown:mobols2000@first-api.bg6th.mongodb.net/users?retryWrites=true&w=majority'
var mongoDB = process.env.MONGODB_URI || localhostUrl;

mongoose.connect(mongoDB, { useNewUrlParser: true })
  .catch(err => console.log(err));



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('DB Connected')
});
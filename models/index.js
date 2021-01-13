// TO CONNECT THE DATABASE
// Mongo client
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true })
  .catch(err => console.log(err));




const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('DB Connected')
});
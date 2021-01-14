var express = require('express');
var router = express.Router();

// Get all users
router.get('/users', require('./../controllers/getUsers'))

// Create a new user
router.post('/user', require('./../controllers/postUser'))

/* Route /user/:id. */
router.route('/user/:id')
  .get(require('./../controllers/getUserById'))
  .patch(require('./../controllers/patchUserById'))
  .delete(require('./../controllers/deleteUserById'))



module.exports = router;
var express = require('express');
var router = express.Router();

// Get users
router.get('/users', (req, res) => {
  res.send('faag')
})

// Post /user
router.post('/user', (req, res, next) => {
  res.send("post user")
})

/* Route /user/:id. */
router.route('/user/:id')
  .get((req, res, next) => {
  res.send(req.params.id);
})
  .patch((req, res, next) => {
    res.send(req.params.id + "patch")
  })
  .delete((req, res) => {
    res.send(req.params.id + "delete")
  })



module.exports = router;

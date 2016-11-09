var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/homepage/');
});

router.get('/user', function(req, res) {
  res.redirect('/users/');
});

router.get('/blog', function(req, res) {
  res.redirect('/blog/');
});

module.exports = router;

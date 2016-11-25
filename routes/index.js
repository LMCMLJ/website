var express = require('express');
var router = express.Router();
var app = express();
var partials = require('express-partials');

app.use(partials());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/homepage/');
});

router.get('/users', function(req, res) {
  res.redirect('/users/');
});

router.get('/blog', function(req, res) {
  res.redirect('/blog/recent');
});

router.get('/snake', function(req, res) {
  res.render('snake');
});

module.exports = router;

var express = require('express');
var router = express.Router();
var app = express();
var partials = require('express-partials');

app.use(partials());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage');
});

// router.get('/users', function(req, res) {
//   res.redirect('/users/');
// });

router.get('/cv', function(req, res) {
  res.render('cv');
});

module.exports = router;

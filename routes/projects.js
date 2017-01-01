var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('projects');
});

router.get('/snake', function(req, res) {
  res.render('snake');
});

module.exports = router;

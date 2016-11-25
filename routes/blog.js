var express = require('express');
var router = express.Router();

router.get('/recent', function(req, res) {
  res.render('blog/recent');
});

module.exports = router;

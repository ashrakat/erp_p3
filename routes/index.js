var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('Homepage.html');
});


router.get('multimedia', function(req, res, next) {
  res.redirect('Multimedia.html');
});

module.exports = router;

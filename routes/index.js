var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('Homepage.html', { title: 'Express' });
});


router.get('multimedia', function(req, res, next) {
  res.redirect('Multimedia.html', { title: 'Express' });
});

module.exports = router;

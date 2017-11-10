var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = {
    title: 'Handlebars',
    subtitle: 'An awesome javascript template engine',
  }
  res.render('index', data);
});

module.exports = router;

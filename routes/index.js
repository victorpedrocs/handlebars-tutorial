var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = {
    title: 'Handlebars',
    subtitle: 'An awesome javascript template engine',
    features: [
      {feat: 'It is flexible'},
      {feat: 'It\'s resourcefull '},
    ],
    quotes: `
      <p class="italic">It's awesome</p> &mdash; Me
      <p class="italic">So cool</p> &mdash; Random person
    `,
  }
  res.render('index', data);
});

module.exports = router;

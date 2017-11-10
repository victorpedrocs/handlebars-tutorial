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
    sunnyDay: true,
    book: {
      title: 'The Lord of The Rings',
      author: 'J. R. R. Tolkien',
    },
    videos: [
      {videoId: 'wSNa5b1mS5Y'},
      {videoId: '4HuAnM6b2d8'},
      {videoId: 'SPaw1ETzS2c'},
      {videoId: '1srD3Mdvf50'},
    ],
  }
  res.render('index', data);
});

module.exports = router;

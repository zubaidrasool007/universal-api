var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Universal Application', descripton: 'Test Description!', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fgta-5-1920x1080&psig=AOvVaw1avQEYney6aHq6ASJCyEZn&ust=1624100516325000&source=images&cd=vfe&ved=0CAcQjRxqFwoTCKjH8IqEofECFQAAAAAdAAAAABAD' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Muhammad Zubaid Rasool', description: 'MEAN/MERN Stack Developer!', image: 'https://media-exp1.licdn.com/dms/image/C4D03AQFC9RnRbt5eJQ/profile-displayphoto-shrink_200_200/0/1601135281198?e=1628121600&v=beta&t=k1-XLgR6zZCq-XrN5XsFBBek01HINT73NcIWiMqmFvQ' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET user Meta Data. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Test User', description: 'MEAN/MERN Stack Developer!' });
});

/* GET user Data. */
router.get('/1', function(req, res, next) {
  res.send({
    title: 'Test User',
    description: 'Full Stack Developer for the JS frameworks (Angular, React, NodeJS)!',
    currentCompany: 'Allomate Solutions',
    // image: 'https://media-exp1.licdn.com/dms/image/C4D03AQFC9RnRbt5eJQ/profile-displayphoto-shrink_200_200/0/1601135281198?e=1628121600&v=beta&t=k1-XLgR6zZCq-XrN5XsFBBek01HINT73NcIWiMqmFvQ',
    projects: [
      {
        title: 'EPHA',
        description: 'It is a B2C application for those vendors and buyers who want sale and purchase through leasing system.'
      },
      {
        title: 'Synaptitude Brain Health',
        description: 'Synaptitude brain health mainly focuses on the brain health of clients. But it also takes care of the physical health and diets.'
      },
      {
        title: 'SeeBiz',
        description: 'SeeBiz - See your business grow. SeeBiz is a platform for all types of vendors to trade with other businesses. It is B2B platform.'
      },
      {
        title: 'ECS',
        description: 'ECS - E-Chat System is chatting platform with messaging, audio and video call features. It is an organization based system.'
      },
      {
        title: 'Hector Kitchen',
        description: 'Hector kitchen is an online platform for the food and other pet supplies mainly for the cats and dogs. It is active in France and Germany.'
      }
    ]
  });
});

module.exports = router;

const Restaurant = require('../models/restaurant');

function moderationIndex(req, res) {
  Restaurant
    .find()
    .then(restaurants => {
      console.log(restaurants);
      res.render('moderations/index', { restaurants });
    });
}

module.exports = {
  index: moderationIndex
};

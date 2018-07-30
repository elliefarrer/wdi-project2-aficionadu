const Restaurant = require('../models/restaurant');

function restaurantsIndex(req, res) {
  Restaurant
    .find()
    .then(restaurants => {
      res.render('restaurants/index', { restaurants });
    });
}

module.exports = {
  index: restaurantsIndex
};

const Restaurant = require('../models/restaurant');

function restaurantsIndex(req, res) {
  Restaurant
    .find()
    .then(restaurants => {
      res.render('restaurants/index', { restaurants });
    });
}

function restaurantsShow(req, res) {
  const restaurantId = req.params.id;
  Restaurant
    .findById(restaurantId)
    .then(restaurant => res.render('restaurants/show', { restaurant }));
}

module.exports = {
  index: restaurantsIndex,
  show: restaurantsShow
};

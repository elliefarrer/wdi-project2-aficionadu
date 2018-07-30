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

function restaurantsNew(req, res) {
  res.render('restaurants/new');
}

function restaurantsCreate(req, res) {
  Restaurant
    .create(req.body)
    .then(() => res.redirect('/restaurants'))
    .catch(err => res.status(500).send(err));
}

module.exports = {
  index: restaurantsIndex,
  show: restaurantsShow,
  new: restaurantsNew,
  create: restaurantsCreate
};

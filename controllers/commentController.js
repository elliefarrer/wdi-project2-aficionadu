const Restaurant = require('../models/restaurant');

function commentsCreate(req, res) {
  req.body.date = Date();
  Restaurant
    .findById(req.params.restaurantId)
    .then(restaurant => {
      restaurant.comments.push(req.body);
      return restaurant.save();
    })
    .then(restaurant => res.redirect(`/restaurants/${restaurant.id}`))
    .catch(err => console.log(err));
}

function commentsUpdate(req, res) {
  Restaurant
    .findByIdAndUpdate(req.params.id, req.body)
    .then(restaurant => res.render(`restaurants/${restaurant.id}`, { restaurant }))
    .catch(err => res.status(404).send(err));
}

function commentsDelete(req, res, next) {
  Restaurant
    .findById(req.params.restaurantId)
    .then(restaurant => {
      restaurant.comments = restaurant.comments.filter(
        comment => comment.id !== req.params.commentId
      );
      return restaurant.save();
    })
    .then(restaurant => res.redirect(`/restaurants/${restaurant.id}`))
    .catch(next);
}

function commentsSetModerated(req, res, next) {
  Restaurant
    .findById(req.params.restaurantId)
    .then(restaurant => {
      restaurant.comments.filter(comment => comment.id === req.params.commentId).forEach(
        comment => comment.moderated = true
      );
      return restaurant.save();
    })
    .then(restaurant => res.redirect(`/restaurants/${restaurant.id}`))
    .catch(next);
}

module.exports = {
  create: commentsCreate,
  update: commentsUpdate,
  delete: commentsDelete,
  setModerated: commentsSetModerated
};

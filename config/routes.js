const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
const restRegistrationController = require('../controllers/restRegistrationController');
const revRegistrationController = require('../controllers/revRegistrationController');
const sessionController = require('../controllers/sessionController');
const userController = require('../controllers/userController');
const commentController = require('../controllers/commentController');

function secureRoute(req, res, next) {
  if(!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('primary', 'Oops! Something went wrong. Please log in to continue');
      res.redirect('/sessions/new');
    });
  }
  return next();
}

router.get('/', (req, res) => res.render('pages/home'));

// Index
router.route('/restaurants')
  .get(restaurantController.index)
  .post(restaurantController.create);

router.route('/restaurants/new')
  .get(secureRoute, restaurantController.new);

router.route('/restaurants/:id/edit')
  .get(secureRoute, restaurantController.edit);

router.route('/restaurants/:id')
  .get(restaurantController.show)
  .put(restaurantController.update)
  .delete((req, res, next) => {
    if(req.session.userId) {
      restaurantController.delete(req, res, next);
    } else {
      res.redirect('/sessions/new', { message: 'Oops! Something went wrong. Please log in to continue'});
    }
  });


// Restaurant Sign Up
router.route('/restaurant-registrations/new')
  .get(restRegistrationController.new);

router.route('/restaurant-registrations')
  .post(restRegistrationController.create);


// Reviewer Sign Up
router.route('/reviewer-registrations/new')
  .get(revRegistrationController.new);

router.route('/reviewer-registrations')
  .post(revRegistrationController.create);


// Log In
router.route('/sessions/new')
  .get(sessionController.new);

router.route('/sessions')
  .post(sessionController.create);

router.route('/sessions/delete')
  .get(sessionController.delete);


// Reviews
router.route('/restaurants/:restaurantId/comments')
  .post(secureRoute, commentController.create);

router.route('/restaurants/:restaurantId/comments/:commentId')
  .delete(secureRoute, commentController.delete);


// Profile
router.route('/users/:id/edit')
  .get(secureRoute, userController.edit);

router.route('/users/:id')
  .get(secureRoute, userController.show)
  .put(secureRoute, userController.update);

module.exports = router;

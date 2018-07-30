const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

router.get('/', (req, res) => res.render('pages/home'));

router.route('/restaurants')
  .get(restaurantController.index);

router.route('/restaurants/:id')
  .get(restaurantController.show);

module.exports = router;

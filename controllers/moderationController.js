const Restaurant = require('../models/restaurant');

function moderationIndex(req, res) {
  Restaurant
    .find()
    .then(restaurant => {
      res.render('moderations/index', { restaurant });
    });
}

module.exports = {
  index: moderationIndex
};

const User = require('../models/user');

function restRegistrationsNew(req, res) {
  res.render('restaurant-registrations/new');
}

function restRegistrationsCreate(req, res) {
  req.body.type = 'restaurant';
  console.log(req.body);
  User
    .create(req.body)
    .then(user => {
      console.log('Hello new account', user);
      res.redirect('/');
    })
    .catch(() => res.status(500).redirect('/restaurant-registrations'));
}

module.exports = {
  new: restRegistrationsNew,
  create: restRegistrationsCreate
};

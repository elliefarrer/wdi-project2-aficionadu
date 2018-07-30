const User = require('../models/user');

function revRegistrationsNew(req, res) {
  res.render('reviewer-registrations/new');
}

function revRegistrationsCreate(req, res) {
  req.body.type = 'reviewer';
  User
    .create(req.body)
    .then(user => {
      console.log('Hello new account', user);
      res.redirect('/');
    })
    .catch(() =>
      res.status(500).redirect('/reviewer-registrations'));
}

module.exports = {
  new: revRegistrationsNew,
  create: revRegistrationsCreate
};

const User = require('../models/user');

function revRegistrationsNew(req, res) {
  res.render('reviewer-registrations/new');
}

function revRegistrationsCreate(req, res) {
  req.body.type = 'reviewer';
  req.body.profilePic = 'https://www.wythalltheatrecompany.co.uk/wp-content/themes/generatepress_child/images/no_profile_image.jpg';
  req.body.role = 'user';
  User
    .create(req.body)
    .then(user => {
      console.log('Hello new account 👋', user);
      res.redirect('/');
    })
    .catch(() =>
      res.status(500).redirect('/reviewer-registrations'));
}

module.exports = {
  new: revRegistrationsNew,
  create: revRegistrationsCreate
};

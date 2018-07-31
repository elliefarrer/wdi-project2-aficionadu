const User = require('../models/user');

function restRegistrationsNew(req, res) {
  res.render('restaurant-registrations/new');
}

function restRegistrationsCreate(req, res) {
  req.body.type = 'restaurant';
  req.body.profilePic = 'https://www.wythalltheatrecompany.co.uk/wp-content/themes/generatepress_child/images/no_profile_image.jpg';
  console.log(req.body);
  User
    .create(req.body)
    .then(user => {
      console.log('Hello new account 👋', user);
      res.redirect('/');
    })
    .catch(() => res.status(500).redirect('/restaurant-registrations'));
}

module.exports = {
  new: restRegistrationsNew,
  create: restRegistrationsCreate
};

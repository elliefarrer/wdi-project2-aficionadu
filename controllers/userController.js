const User = require('../models/user');

function usersShow(req, res) {
  const userId = req.params.id;
  User
    .findById(userId)
    .then(user => {
      console.log('Users show. User is', user);
      res.render('users/show', { user });
    });
}


module.exports = {
  show: usersShow
};

////// TO GET REVIEWS
// User
//   .findById(req.params.id)
//   .then(user => {
//     const reviews = user.getReviews();
//   })

const User = require('../models/user');

function sessionsNew(req, res) {
  res.render('sessions/new');
}

function sessionsCreate(req, res) {
  // req.body.type = 'restaurant';
  User
    .findOne({ email: req.body.email })
    .then(user => {
      console.log(user);
      if (!user || !user.validatePassword(req.body.password)) {
        res.status(401).render('sessions/new', { message: 'Oops! Something went wrong...'
        });
      } else {
        req.flash('peach', `Welcome back ${user.username}`);
        req.session.userId = user.id;
        res.redirect('/restaurants');
      }
    });
}

function sessionsDelete(req, res) {
  return req.session.regenerate(() => {
    req.flash('peach', 'Bye! Hope to see you again soon!');
    res.redirect('/');
  });
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate,
  delete: sessionsDelete
};

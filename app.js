const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const { DB_URI, port } = require('./config/environment');
const flash = require('express-flash');
const User = require('./models/user');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(DB_URI);

// Layouts
const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('views', `${__dirname}/views`);

// Static files
app.use(express.static(`${__dirname}/public`));

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(session({
  secret: 'HelpImTrappedInTheComputer',
  resave: false,
  saveUninitialized: false
}));

app.use((req, res, next) => {
  if(!req.session.userId) return next();
  User
    .findById(req.session.userId)
    .then(user => {
      console.log('Setting locals.user', user);
      res.locals.currentUser = user;
      res.locals.isLoggedIn = true;
      next();
    });
});

app.use(flash());

// Routes
const router = require('./config/routes');

app.use(router);

// Start listening
app.listen(port, () => console.log(`I'm hungry, feed me on port ${port} 😋`));

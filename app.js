const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const { DB_URI, port } = require('./config/environment');

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

// Routes
const router = require('./config/routes');

app.use(router);

// Start listening
app.listen(port, () => console.log(`I'm hungry, feed me on port ${port} 😋`));

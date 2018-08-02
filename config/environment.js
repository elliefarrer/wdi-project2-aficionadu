const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost/aficionadu';
const port = process.env.PORT || 8000;

module.exports = {
  DB_URI, port
};

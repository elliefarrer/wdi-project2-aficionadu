const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true},
  address: { type: String, required: true},
  city: { type: String, required: true},
  postcode: { type: String, required: true},
  description: { type: String, required: true},
  price: { type: String, required: true, enum: ['£', '££', '£££', '££££']},
  cuisine: { type: String, required: true, enum: ['British', 'American', 'French', 'Spanish', 'Italian', 'Dutch', 'Mexican', 'Chinese', 'Indian', 'fusion', 'vegetarian/vegan', 'other']},
  photo: { type: String, required: true },
  url: String
  // addedBy: String
});

module.exports = mongoose.model('Restaurant', restaurantSchema);

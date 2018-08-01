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
  url: String,
  comments: [{
    name: String,
    headline: String,
    content: String,
    rating: { type: Number, min: 1, max: 5 },
    imgUrl: String,
    date: String,
    moderated: false
  }],
  addedBy: String
});

restaurantSchema.virtual('averageRating')
  .get(function() {
    return this.comments.reduce((sum, comment) => sum + comment.rating, 0) / this.comments.length;
  });

module.exports = mongoose.model('Restaurant', restaurantSchema);

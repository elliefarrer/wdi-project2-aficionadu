const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  type: { type: String, required: true, enum: ['restaurant', 'reviewer']},
  city: String,
  dateOfBirth: String,
  gender: String,
  personality: [{ type: String, enum: ['Adventurous eater', 'Party animal', 'Family trip planner', 'Vegetarian/vegan', 'Peace and quiet seeker', 'Fine dining fan', 'Health conscious', 'Comfort food fan', 'Trendsetter', 'Will eat anything and everything', 'Spicy food lover']}]
});

userSchema.virtual('passwordConfirmation')
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

module.exports = mongoose.model('User', userSchema);

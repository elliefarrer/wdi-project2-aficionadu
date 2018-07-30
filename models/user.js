const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  type: { type: String, required: true, enum: ['Restaurant', 'reviewer']},
  city: String,
  dateOfBirth: String,
  gender: { type: String, enum: ['Male', 'Female', 'Other']},
  personality: [{ type: String, enum: ['Adventurous eater', 'Party animal', 'Family trip planner', 'Vegetarian/vegan', 'Peace and quiet seeker', 'Fine dining fan', 'Health conscious', 'Comfort food fan', 'Trendsetter', 'Will eat anything and everything', 'Spicy food lover']}]
});

userSchema.virtual('passwordConfirmation')
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

module.exports = mongoose.model('User', userSchema);

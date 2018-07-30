const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  type: { type: String, required: true, enum: ['restaurant', 'reviewer']},
  city: String,
  dateOfBirth: String,
  gender: { type: String, enum: ['Male', 'Female', 'Other']},
  personality: [{ type: String, enum: ['Adventurous eater', 'Party animal', 'Family trip planner', 'Vegetarian/vegan', 'Peace and quiet seeker', 'Fine dining fan', 'Health conscious', 'Comfort food fan', 'Trendsetter', 'Will eat anything and everything', 'Spicy food lover']}]
});

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.virtual('passwordConfirmation')
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function(next) {
  console.log('Pre validate hook has happened');
  if (this._passwordConfirmation !== this.password) {
    console.log('Passwords don\'t match');
    this.invalidate('Password confirmation', 'does not match');
  }
  next();
});

userSchema.post('validate', function() {
  console.log('Post validate hook has happened');
});

userSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, 8);
  next();
});



module.exports = mongoose.model('User', userSchema);

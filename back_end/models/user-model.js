const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
  orders: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Order' }]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);

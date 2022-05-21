const mongoose = require('mongoose');

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    firstName: String,
    phoneNumber: String,
    address: String,
    town: String,
    country: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
      },
    ],
    imageFile: String,
  })
);

module.exports = User;

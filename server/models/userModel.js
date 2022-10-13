const mongoose = require('mongoose');

// user schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,

      // to remove whitespace from the beginning & trailing - end
      trim: true,

      required: true,
      max: 12,
      unique: true,

      // index is for performance benefit like on queries
      index: true,

      lowercase: true,
    },

    displayName: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },

    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      max: 32,
      lowercase: true,
    },

    hashed_password: {
      type: String,
      required: true,
    },

    // salt is made up of random bits added to each password instance before its hashing
    // When using both hashing and salting, even if two users choose the same password,
    // salting adds random characters to each password when the users enter them
    salt: String,

    role: {
      type: String,

      // to set default value
      default: 'subscriber',
    },

    resetPasswordLink: {
      data: String,
      default: '',
    },
  },
  // Passing as second arg here to get createdAt & updatedAt dates automatically on user creation
  { timestamps: true }
);

/*  virtual fields is to hash password before saving to database */
// 1. authenticate - method to check if user input password matches
// the hashed password to allow authentication

// 2. encryptPassword: to hash the password before saving to db

module.exports = userSchema;

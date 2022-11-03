const mongoose = require('mongoose');

// node js module
const crypto = require('crypto');

// user schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,

      // to remove beginning & trailing whitespace - end
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

    // hashed key/password saved in db
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

/*  virtual fields is to add a custom setter to hash password before saving to db */
userSchema
  // creating Virtual Property - userInput
  .virtual('password')
  // note - Arrow function won't work in this userSchema
  .set(function (password) {
    // create temp variable called _password
    this._password = password;

    // generate salt
    this.salt = this.makeSalt();

    // encrypt password to save in db
    this.hashed_password = this.encryptPassword(password);
  })

  .get(function () {
    return this.hashed_password;
  });

// to apply our custom methods
userSchema.methods = {
  // salt
  makeSalt: function () {
    return String(Math.round(new Date().valueOf() * Math.random()));
  },

  // encryptPassword: to hash the password before saving to db
  encryptPassword: function (password) {
    if (!password) return '';

    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    }
  },

  // method to check if user current input password matches the hashed password/key in db to allow authentication
  authenticate: function (password) {
    return this.encryptPassword(password) === this.hashed_password;
  },
};

// convention to always use uppercase for Modal Names & related variables
// telling mongoose to create new model class instance
// first arg - name of the collection & second arg - name of the the Schema, data model
const User = mongoose.model('User', userSchema);

module.exports = User;

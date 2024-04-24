/**
 * File Name: userModel.js
 */

const mongoose = require('mongoose');
const mongooseHidden = require('mongoose-hidden')();

const userSchema = new mongoose.Schema(
  {
    email: String,
    password: {
      type: String,
      hide: true,
    },
    profile_picture_url: String,
    first_name: String,
    last_name: String,
    address: Object,
    order_history: [
      {
        order_number: String,
        date: Date,
        status: String,
      },
    ],
    wish_list: [
      {
        name: String,
        notes: String,
      },
    ],
    recently_viewed_products: [
      {
        name: String,
        image: String,
        notes: String,
      },
    ],
    favorite_products: [
      {
        name: String,
        image: String,
        notes: String,
      },
    ],
    product_reviews: [
      {
        product_name: String,
        rating: Number,
        comment: String,
        date: { type: Date, default: Date.now },
      },
    ],
    last_login: {
      type: Date,
    },
    account_status: {
      type: String,
      enum: ['active', 'inactive', 'suspended', 'deleted'],
    },
    authentication_provider: {
      type: String,
      enum: ['local', 'Facebook', 'Google'],
    },
    last_password_change: {
      type: Date,
    },
    is_email_verified: { type: Boolean, default: false },
    email_verification_token: {
      type: String,
      hide: true,
    },
    password_reset_token: {
      type: String,
      hide: true,
    },
    password_reset_expiry: {
      type: Date,
    },
    login_attempts: {
      type: Number,
    },
    created_at: { type: Date, default: Date.now },
    updated_at: Date,
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    updated_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    is_deleted: { type: Boolean, default: false },
    deleted_at: Date,
    deleted_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    versionKey: false,
  },
);
userSchema.pre(/^find/, function (next) {
  // Add condition for is_deleted to be false
  this.where({ is_deleted: false });
  next();
});
userSchema.plugin(mongooseHidden);

const User = mongoose.models.User || mongoose.model('User', userSchema);
module.exports = User;

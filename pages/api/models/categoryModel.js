/**
 * File Name: categoryModel.js
 */
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    image_url: {
      type: String,
    },
    description: {
      type: String,
    },
    is_head_category: {
      type: Boolean,
    },
    head_category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
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
categorySchema.pre(/^find/, function (next) {
  this.where({ is_deleted: false });
  next();
});
const Category =
  mongoose.models.Category || mongoose.model('Category', categorySchema);

module.exports = Category;

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    // Product details
    product_name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        isPrimary: {
          type: Boolean,
          default: false,
        },
        uploadedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    // Brand,Category...
    brand_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },

    // Price related fields
    price: {
      type: Number,
      default: 0,
    },
    sale_price: {
      type: Number,
      default: 0,
    },

    // Physical attributes
    weight: {
      type: Number,
    },
    length: {
      type: Number,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    dimension_unit: {
      type: String,
    },
    weight_unit: {
      type: String,
    },

    // Product inventory fields
    stock_quantity: {
      type: Number,
      default: 0,
    },

    // Products RatingReviews fields
    reviews: [
      {
        reviewer_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        reviewer_rating: Number,
        comment: String,
        created_at: { type: Date, default: Date.now },
      },
    ],
    viewers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    rating: { type: Number, default: 0 },
    views_count: { type: Number, default: 0 },
    likes_count: { type: Number, default: 0 },

    // Product flags/indicators
    is_featured: {
      type: Boolean,
    },
    is_bestseller: {
      type: Boolean,
    },
    is_new: {
      type: Boolean,
    },
    is_on_sale: {
      type: Boolean,
    },
    is_top_rated: {
      type: Boolean,
    },
    is_available: {
      type: Boolean,
    },
    is_active: {
      type: Boolean,
    },
    is_new_arrival: {
      type: Boolean,
    },

    sku: {
      type: String,
    },

    created_at: { type: Date, default: Date.now },
    updated_at: Date,
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    updated_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    is_deleted: Boolean,
    deleted_at: Date,
    deleted_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  },
  {
    versionKey: false,
  },
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

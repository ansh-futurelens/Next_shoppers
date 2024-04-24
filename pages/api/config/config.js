/**
 * File Name: config.js
 */
const envFound = require('dotenv').config();

module.exports = {
  node_env: process.env.NODE_ENV,
  database: {
    development: {
      url:
        process.env.NEXT_PUBLIC_DEV_DATABASE_URL ||
        'mongodb://localhost:27017/shoppers_dev',
    },
    test: {
      url:
        process.env.NEXT_PUBLIC_TEST_DATABASE_URL ||
        'mongodb://localhost:27017/shoppers_test',
    },
    production: {
      url:
        process.env.NEXT_PUBLIC_PROD_DATABASE_URL ||
        'mongodb://localhost:27017/shoppers_prod',
    },
  },
  jwtSecret: process.env.NEXT_PUBLIC_JWT_SECRET || 'mysecretkey',
  jwtExpirationTimeInSeconds: process.env.NEXT_PUBLIC_JWT_EXPIRE_TIME || '1h',
  jwtEmailVerificationSecret:
    process.env.NEXT_PUBLIC_EMAIL_VERIFICATION_SECRET || 'myemailverificationsecretkey',
  CacheExpirationTimeInSeconds: process.env.NEXT_PUBLIC_CACHE_EXPIRE_TIME || '1h',
  mail: {
    mail_user: process.env.NEXT_PUBLIC_MAIL_USER,
    mail_pass: process.env.NEXT_PUBLIC_MAIL_PASS,
  },
  cloudinary: {
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
  },
  url: {
    base_url: process.env.NEXT_PUBLIC_BASE_URL,
  },
};
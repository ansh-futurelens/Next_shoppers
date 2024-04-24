const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const config = require('../config/config');

cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'ECommerce_Advance',
    allowed_formats: ['jpg', 'jpeg', 'png'],
    format: 'png',
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const parser = multer({ storage: storage });

module.exports = { cloudinary, parser };

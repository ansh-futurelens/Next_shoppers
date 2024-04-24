// utils/multerMiddleware.js

import multer from 'multer';

// Configure multer to handle file uploads
const upload = multer({
  limits: { fileSize: 8 * 1024 * 1024 }, // Set max file size to 8MB
});

// Middleware function to parse form data and handle file uploads
export const uploadMiddleware = upload.array('images', 5); // 'image' is the field name for the uploaded file

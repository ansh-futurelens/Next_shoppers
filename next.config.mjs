/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    NODE_ENV : process.env.NODE_ENV,
    DEV_DATABASE_URL: process.env.DEV_DATABASE_URL,
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL,
    PROD_DATABASE_URL: process.env.PROD_DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRE_TIME: process.env.JWT_EXPIRE_TIME,
    EMAIL_VERIFICATION_SECRET: process.env.EMAIL_VERIFICATION_SECRET,
    CACHE_EXPIRE_TIME: process.env.CACHE_EXPIRE_TIME,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASS: process.env.MAIL_PASS,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
  }
};

export default nextConfig;

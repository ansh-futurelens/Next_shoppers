// utils/db.js

import mongoose from 'mongoose';
import config from '../config/config';
let isConnected = false;

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log('Using existing database connection');
    return;
  }
  console.log(process.env.NEXT_PUBLIC_MONGODB_URI);
  try {
    const db = await mongoose.connect(
      config.database[process.env.NEXT_PUBLIC_NODE_ENV || 'development'].url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    isConnected = db.connections[0].readyState;
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
};

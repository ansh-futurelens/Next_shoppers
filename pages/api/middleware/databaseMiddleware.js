// databaseMiddleware.js

import { connectToDatabase } from '../db/db';

export function withDatabaseConnection(handler) {
  return async (req, res) => {
    try {
      await connectToDatabase();
      await handler(req, res);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: error.stack || 'Internal server error' });
    }
  };
}

import { login } from '../../controllers/authController';
import {
  withDatabaseConnection,
  ResponseHelper,
} from '../../utils/apiDependencies';
import cors from 'micro-cors';

const corsMiddleware = cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
});

async function handler(req, res) {
  try {
    // Apply CORS headers
    await corsMiddleware(req, res);

    if (req.method === 'POST') {
      const result = await login(req, res);
      res.status(200).json(result);
    } else {
      // If method is not allowed
      res.status(405).json(ResponseHelper.error(405, 'Method Not Allowed'));
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json(ResponseHelper.error(500, 'Internal server error', error.message));
  }
}

export default withDatabaseConnection(handler);

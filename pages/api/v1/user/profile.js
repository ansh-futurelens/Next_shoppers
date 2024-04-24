import {
  withDatabaseConnection,
  ResponseHelper,
  authMiddleware,
} from '../../utils/apiDependencies';
import {
  getUserProfile,
  updateProfile,
} from '../../controllers/userController';

async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      return authMiddleware(getUserProfile)(req, res);
    }
    if (req.method === 'PUT') {
      return authMiddleware(updateProfile)(req, res);
    }

    res.status(405).json(ResponseHelper.error(405, 'Method Not Allowed'));
  } catch (error) {
    console.error('Error:', error);
    res
      .status(500)
      .json(ResponseHelper.error(500, 'Internal Server Error', error.message));
  }
}

export default withDatabaseConnection(handler);

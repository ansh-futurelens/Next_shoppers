import {
  withDatabaseConnection,
  ResponseHelper,
  authMiddleware,
} from '../../utils/apiDependencies';
import { getAllUsers } from '../../controllers/userController';

async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const response = await getAllUsers(req, res);
      return res.status(response.statusCode).json(response);
    }
    res.status(405).json(ResponseHelper.error(405, 'Method Not Allowed'));
  } catch (error) {
    console.error('Error:', error);
    res
      .status(500)
      .json(ResponseHelper.error(500, 'Internal Server Error', error.message));
  }
}

export default withDatabaseConnection(authMiddleware(handler));

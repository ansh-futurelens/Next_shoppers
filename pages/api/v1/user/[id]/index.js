import {
  withDatabaseConnection,
  ResponseHelper,
  authMiddleware,
} from '../../../utils/apiDependencies';
import {
  deleteUserById,
  getUserById,
} from '../../../controllers/userController';

async function handler(req, res) {
  try {
    const { userId } = req.query;
    if (req.method === 'GET') {
      const response = await getUserById(req, res);
      return res.status(response.statusCode).json(response);
    }
    if (req.method === 'DELETE') {
      const response = await deleteUserById(req, res);
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

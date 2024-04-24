import { signup } from '../../controllers/authController';
import {
  withDatabaseConnection,
  ResponseHelper,
} from '../../utils/apiDependencies';

async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      return res.status(200).json(await signup(req, res));
    }
    res.status(405).json(ResponseHelper.error(405, 'Method Not Allowed'));
  } catch (error) {
    console.error('Error:', error);
    res
      .status(500)
      .json(ResponseHelper.error(500, 'Internal server error', error.message));
  }
}

export default withDatabaseConnection(handler);

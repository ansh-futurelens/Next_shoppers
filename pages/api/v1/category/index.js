import {
  withDatabaseConnection,
  ResponseHelper,
  authMiddleware,
} from '../../utils/apiDependencies';
import {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
} from '../../controllers/categoryController';

async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      return authMiddleware(getAllCategories)(req, res);
    }

    if (req.method === 'POST') {
      return createCategory(req, res);
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

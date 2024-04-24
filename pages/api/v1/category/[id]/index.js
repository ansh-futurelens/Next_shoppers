import {
  withDatabaseConnection,
  ResponseHelper,
  MSG,
  authMiddleware,
} from '../../../utils/apiDependencies';
import CategoryService from '../../../services/categoryServices';
import {
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
} from '@/pages/api/controllers/categoryController';

async function handler(req, res) {
  try {
    const { id } = req.query;

    if (req.method === 'GET') {
      // Fetch category by ID
      const response = await getCategoryById(req, res);
      return res.status(response.statusCode).json(response);
    }

    if (req.method === 'PUT') {
      // Update category by ID
      const response = await updateCategoryById(req, res);
      return res.status(response.statusCode).json(response);
    }

    if (req.method === 'DELETE') {
      // Delete category by ID
      const response = await deleteCategoryById(req, res);
      return response;
    }

    res.status(405).json(ResponseHelper.error(405, 'Method Not Allowed'));
  } catch (error) {
    console.error('Error:', error);
    res
      .status(500)
      .json(ResponseHelper.error(500, 'Internal server error', error.message));
  }
}

export default withDatabaseConnection(authMiddleware(handler));

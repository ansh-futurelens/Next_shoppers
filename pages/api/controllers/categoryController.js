// controllers/categoryController.js

import {
  createCategoryItem,
  deleteCategoryByIdService,
  findAllCategories,
  getCategoryByIdService,
  updateCategoryByIdService,
} from '../services/categoryServices';
import { Category } from '../utils/apiDependencies';
import { ResponseHelper, MSG } from '../utils/apiDependencies';

export async function getAllCategories(req, res) {
  try {
    const categories = await findAllCategories();
    return res
      .status(200)
      .json(ResponseHelper.success(200, MSG.FOUND_SUCCESS, categories));
  } catch (error) {
    console.error('Error:', error);
    return res
      .status(500)
      .json(
        ResponseHelper.error(500, MSG.INTERNAL_SERVER_ERROR, error.message),
      );
  }
}

export async function createCategory(req, res) {
  try {
    const newCategory = await createCategoryItem(req.body);
    return res
      .status(201)
      .json(ResponseHelper.success(201, MSG.CREATE_SUCCESS, newCategory));
  } catch (error) {
    console.error('Error:', error);
    return res
      .status(500)
      .json(
        ResponseHelper.error(500, MSG.INTERNAL_SERVER_ERROR, error.message),
      );
  }
}

export async function getCategoryById(req, res) {
  try {
    const { id } = req.query;
    const category = await getCategoryByIdService(id);
    if (!category) {
      return res
        .status(404)
        .json(ResponseHelper.error(404, 'Category not found'));
    }
    return res
      .status(200)
      .json(ResponseHelper.success(200, MSG.FOUND_SUCCESS, category));
  } catch (error) {
    console.error('Error:', error);
    return res
      .status(500)
      .json(
        ResponseHelper.error(500, MSG.INTERNAL_SERVER_ERROR, error.message),
      );
  }
}

export async function updateCategoryById(req, res) {
  try {
    const { id } = req.query;
    const updatedCategory = await updateCategoryByIdService(id, req.body);
    if (!updatedCategory) {
      return res
        .status(404)
        .json(ResponseHelper.error(404, 'Category not found'));
    }
    return res
      .status(200)
      .json(ResponseHelper.success(200, MSG.UPDATE_SUCCESS, updatedCategory));
  } catch (error) {
    console.error('Error:', error);
    return res
      .status(500)
      .json(
        ResponseHelper.error(500, MSG.INTERNAL_SERVER_ERROR, error.message),
      );
  }
}

export async function deleteCategoryById(req, res) {
  try {
    const { id } = req.query;
    const deletedCategory = await deleteCategoryByIdService(id);
    if (!deletedCategory) {
      return res
        .status(404)
        .json(ResponseHelper.error(404, 'Category not found'));
    }
    return res
      .status(200)
      .json(ResponseHelper.success(200, 'Category deleted successfully'));
  } catch (error) {
    console.error('Error:', error);
    return res
      .status(500)
      .json(
        ResponseHelper.error(500, MSG.INTERNAL_SERVER_ERROR, error.message),
      );
  }
}

export async function uploadImageController(req, res) {
  try {
    const { id } = req.query;

    // Call service function to handle image upload
    const result = await uploadImageOfCategoriesService(id, req.file);

    return res.status(result.statusCode).json(result);
  } catch (error) {
    console.error('Error:', error);
    res
      .status(500)
      .json(ResponseHelper.error(500, 'Internal server error', error.message));
  }
}

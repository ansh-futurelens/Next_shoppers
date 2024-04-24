// services/categoryService.js

import { Category } from '../utils/apiDependencies';
import { ResponseHelper, MSG } from '../utils/apiDependencies';

export async function findAllCategories() {
  try {
    return await Category.find({ is_deleted: false });
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Internal Server Error');
  }
}

export async function createCategoryItem(body) {
  try {
    const {
      name,
      icon_image_url,
      description,
      is_head_category,
      head_category_id,
      created_by,
    } = body;
    const category = new Category({
      name,
      icon_image_url,
      description,
      is_head_category,
      head_category_id,
      created_by,
    });
    return await category.save();
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Internal Server Error');
  }
}

export async function getCategoryByIdService(id) {
  try {
    return await Category.findOne({ _id: id, is_deleted: false });
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Internal Server Error');
  }
}

export async function updateCategoryByIdService(id, data) {
  try {
    const {
      name,
      icon_image_url,
      description,
      is_head_category,
      head_category_id,
      updated_by,
    } = data;
    return await Category.findByIdAndUpdate(
      id,
      {
        name,
        icon_image_url,
        description,
        is_head_category,
        head_category_id,
        updated_by,
        updated_at: new Date(),
      },
      { new: true },
    );
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Internal Server Error');
  }
}

export async function deleteCategoryByIdService(id) {
  try {
    return await Category.findByIdAndDelete(id);
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Internal Server Error');
  }
}

export async function uploadImageOfCategoriesService(id, file) {
  try {
    // Parse the image upload using multer and Cloudinary
    parser.single('image')(req, res, async function (err) {
      if (err) {
        console.error('Error uploading file:', err);
        return ResponseHelper.error(400, 'File upload error');
      }

      // Check if the request contains a file
      if (!file) {
        return ResponseHelper.error(400, 'No image uploaded');
      }

      // Upload the image to Cloudinary
      const result = await cloudinary.uploader.upload(file.path);

      // Update the category with the Cloudinary image URL
      const updatedCategory = await Category.findByIdAndUpdate(
        id,
        { image_url: result.secure_url },
        { new: true },
      );

      return ResponseHelper.success(
        200,
        'Image uploaded successfully',
        updatedCategory,
      );
    });
  } catch (error) {
    console.error('Error:', error);
    return ResponseHelper.error(500, 'Internal server error', error.message);
  }
}

import {
  withDatabaseConnection,
  Category,
  ResponseHelper,
  authMiddleware,
} from '../../../utils/apiDependencies';
import { cloudinary, parser } from '../../../utils/cloudinaryUtils';

export const config = {
  api: {
    bodyParser: false, // Disable built-in bodyParser to use custom middleware
  },
};

async function handler(req, res) {
  try {
    const { id } = req.query;

    // Parse the image upload using multer and Cloudinary
    parser.single('image')(req, res, async function (err) {
      if (err) {
        console.error('Error uploading file:', err);
        return res
          .status(400)
          .json(ResponseHelper.error(400, 'File upload error'));
      }

      // Check if the request contains a file
      if (!req.file) {
        return res
          .status(400)
          .json(ResponseHelper.error(400, 'No image uploaded'));
      }

      // Upload the image to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      // Update the category with the Cloudinary image URL
      const updatedCategory = await Category.findByIdAndUpdate(
        id,
        { image_url: result.secure_url },
        { new: true },
      );

      return res
        .status(200)
        .json(
          ResponseHelper.success(
            200,
            'Image uploaded successfully',
            updatedCategory,
          ),
        );
    });
  } catch (error) {
    console.error('Error:', error);
    res
      .status(500)
      .json(ResponseHelper.error(500, 'Internal server error', error.message));
  }
}

export default withDatabaseConnection(authMiddleware(handler));

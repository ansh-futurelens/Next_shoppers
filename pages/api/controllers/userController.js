import { ResponseHelper, MSG, User } from '../utils/apiDependencies';

export async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    return ResponseHelper.success(200, MSG.FOUND_SUCCESS, users);
  } catch (error) {
    console.error('Error:', error);
    return ResponseHelper.error(500, MSG.INTERNAL_SERVER_ERROR, error.message);
  }
}

export async function getUserById(req, res) {
  try {
    const { id } = req.query;
    const user = await User.findById(id);
    if (!user) {
      return ResponseHelper.error(404, MSG.USER_NOT_FOUND);
    }
    return ResponseHelper.success(200, MSG.FOUND_SUCCESS, user);
  } catch (error) {
    console.error('Error:', error);
    return ResponseHelper.error(500, MSG.INTERNAL_SERVER_ERROR, error.message);
  }
}

export async function getUserProfile(req, res) {
  try {
    return res
      .status(200)
      .json(ResponseHelper.success(200, MSG.FOUND_SUCCESS, req.user));
  } catch (error) {
    console.error('Error:', error);
    return res
      .status(500)
      .json(
        ResponseHelper.error(500, MSG.INTERNAL_SERVER_ERROR, error.message),
      );
  }
}

export async function updateProfile(req, res) {
  try {
    const { user } = req;
    const { first_name, last_name } = req.body;
    user.first_name = first_name;
    user.last_name = last_name;
    await user.save();

    return res
      .status(200)
      .json(ResponseHelper.success(200, MSG.USER_UPDATED_SUCCESSFULLY, user));
  } catch (error) {
    console.error('Error:', error);
    return ResponseHelper.error(500, MSG.INTERNAL_SERVER_ERROR, error.message);
  }
}

export async function deleteUserById(req, res) {
  try {
    const { id } = req.query;
    console.log(req.user);
    const user = await User.findById(id);
    if (!user) {
      return ResponseHelper.error(404, MSG.USER_NOT_FOUND);
    }

    // Soft delete user
    user.is_deleted = true;
    user.deleted_at = new Date();
    user.deleted_by = req.user.id;
    await user.save();

    return ResponseHelper.success(200, MSG.USER_DELETED_SUCCESSFULLY);
  } catch (error) {
    console.error('Error:', error);
    return ResponseHelper.error(500, MSG.INTERNAL_SERVER_ERROR, error.message);
  }
}

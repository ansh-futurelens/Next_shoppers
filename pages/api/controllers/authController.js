// controllers/authController.js

import { MSG, ResponseHelper } from '../utils/apiDependencies';
import {
  checkPassword,
  checkUserExists,
  createUser,
  generateAuthToken,
  generateEmailVerificationToken,
  generatePasswordResetToken,
  hashPassword,
  resetPasswordServices,
  sendPasswordResetEmail,
  sendVerificationEmail,
  updatePassword,
  validateEmailVerificationToken,
  validatePasswordResetToken,
  verifyUserEmail,
} from '../services/authServices';
import bcrypt from 'bcryptjs';
const _ = require('lodash');

export async function signup(req, res) {
  try {
    const { email, password, first_name, last_name } = req.body;

    // Check if user already exists
    const existingUser = await checkUserExists(email);

    if (existingUser) {
      return ResponseHelper.error(400, MSG.USER_ALREADY_EXISTS);
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);
    const email_verification_token = await generateEmailVerificationToken(
      { email },
      '1h',
    );

    // Create user
    let newUser = await createUser({
      email,
      password: hashedPassword,
      first_name,
      last_name,
      email_verification_token,
    });
    await sendVerificationEmail(email, email_verification_token);

    // Remove the values we don't want in response
    newUser = _.omit(newUser, ['email_verification_token']);
    return ResponseHelper.success(
      201,
      MSG.VERIFICATION_EMAIL_SENT_SUCCESS,
      newUser,
    );
  } catch (error) {
    console.error('Error:', error);
    return ResponseHelper.error(500, MSG.INTERNAL_SERVER_ERROR, error.message);
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await checkUserExists(email);

    if (!user) {
      return ResponseHelper.error(404, MSG.EMAIL_NOT_EXIST);
    }

    if (!user.is_email_verified) {
      // If email is not verified, return an error response
      return ResponseHelper.error(403, MSG.EMAIL_NOT_VERIFIED);
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return ResponseHelper.error(401, MSG.INVALID_CREDENTIALS);
    }

    // Generate JWT token
    const token = generateAuthToken({ email: user.email });
    return ResponseHelper.success(200, MSG.LOGIN_SUCCESS, { token });
  } catch (error) {
    console.error('Error:', error);
    return ResponseHelper.error(500, MSG.INTERNAL_SERVER_ERROR, error.message);
  }
}

export async function verifyEmail(req, res) {
  try {
    const { token } = req.query;

    // Validate email verification token
    const isValid = await validateEmailVerificationToken(token);
    if (!isValid) {
      return res.status(400).json(ResponseHelper.error(400, MSG.TOKEN_INVALID));
    }

    // Update user email verification status
    await verifyUserEmail(token);

    return res
      .status(200)
      .json(ResponseHelper.success(200, MSG.VERIFIED_SUCCESS));
  } catch (error) {
    console.error('Error:', error);
    return res
      .status(500)
      .json(
        ResponseHelper.error(500, MSG.INTERNAL_SERVER_ERROR, error.message),
      );
  }
}

export async function forgotPassword(req, res) {
  try {
    const { email } = req.body;

    // Generate password reset token
    const resetToken = await generatePasswordResetToken(email);
    console.log(resetToken);
    if (!resetToken) {
      return res.status(404).json(ResponseHelper.error(404, MSG.NOT_FOUND));
    }

    // Send password reset email to user
    await sendPasswordResetEmail(email, resetToken);

    return res
      .status(200)
      .json(ResponseHelper.success(200, MSG.PASSWORD_RESET_EMAIL_SENT_SUCCESS));
  } catch (error) {
    console.error('Error:', error);
    return res
      .status(500)
      .json(
        ResponseHelper.error(500, MSG.INTERNAL_SERVER_ERROR, error.message),
      );
  }
}

export async function resetPassword(req, res) {
  try {
    const { newPassword } = req.body;
    const { token } = req.query;

    // Validate reset token
    const isValid = await validatePasswordResetToken(token);
    if (!isValid) {
      return res.status(400).json(ResponseHelper.error(400, MSG.TOKEN_INVALID));
    }

    // Update user password
    const hashedPassword = await hashPassword(newPassword);
    await resetPasswordServices(token, hashedPassword);

    return res
      .status(200)
      .json(ResponseHelper.success(200, MSG.PASSWORD_RESET_SUCCESS));
  } catch (error) {
    console.error('Error:', error);
    return res
      .status(500)
      .json(
        ResponseHelper.error(500, MSG.INTERNAL_SERVER_ERROR, error.message),
      );
  }
}

export async function changePassword(req, res) {
  try {
    const { oldPassword, newPassword } = req.body;
    const { user } = req;

    // Check if old password is correct
    const isMatch = await checkPassword(user.password, oldPassword);
    if (!isMatch) {
      return res
        .status(400)
        .json(ResponseHelper.error(400, MSG.INVALID_PASSWORD));
    }

    // Update user password
    await updatePassword(user._id, newPassword);

    return res
      .status(200)
      .json(ResponseHelper.success(200, MSG.PASSWORD_CHANGED_SUCCESSFULLY));
  } catch (error) {
    console.error('Error:', error);
    return res
      .status(500)
      .json(
        ResponseHelper.error(500, MSG.INTERNAL_SERVER_ERROR, error.message),
      );
  }
}

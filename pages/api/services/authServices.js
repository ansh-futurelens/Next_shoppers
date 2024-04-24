// services/AuthServices.js
import { ResponseHelper, User } from '../utils/apiDependencies';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import { send } from '../utils/mailer';
import { v4 as uuidv4 } from 'uuid';

export async function checkUserExists(email) {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Internal server error');
  }
}

export async function hashPassword(password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Internal server error');
  }
}

export async function createUser(body) {
  try {
    const user = await new User(body);
    await user.save();
    return user.toJSON();
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Internal server error');
  }
}

export async function comparePasswords(password, hashedPassword) {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Internal server error');
  }
}

export function generateAuthToken(payload) {
  try {
    const token = jwt.sign(payload, config.jwtSecret, {
      expiresIn: config.jwtExpirationTimeInSeconds,
    });
    return token;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Internal server error');
  }
}

export async function generateEmailVerificationToken(payload, expiresIn) {
  try {
    return await jwt.sign(payload, config.jwtEmailVerificationSecret, {
      expiresIn,
    });
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Error generating email verification token');
  }
}

export async function validateEmailVerificationToken(token) {
  try {
    const user = await User.findOne({ email_verification_token: token });
    if (!user) {
      return false;
    }
    const isTokenValid = token === user.email_verification_token;
    return isTokenValid;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Error validating email verification token');
  }
}

export async function verifyUserEmail(token) {
  try {
    const user = await User.findOneAndUpdate(
      { email_verification_token: token },
      { email_verification_token: null, is_email_verified: true },
      { new: true },
    );
    if (!user) {
      throw new Error(MSG.USER_NOT_FOUND);
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Error verifying user email');
  }
}

export async function sendVerificationEmail(email, token) {
  // Build the verification link
  const baseUrl = config.url.base_url;
  const verifyUrl = `${baseUrl}/verify-email?token=${token}`;

  // Send the verification email
  const message = {
    from: 'Your Company <noreply@yourcompany.com>',
    to: email,
    subject: 'Email Verification',
    text: `Dear User,

    Please click on the following link to verify your email address:

    ${verifyUrl}

    Sincerely,
    Your Company`,
    html: `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Email Verification</title>
      </head>
      <body>
        <p>Dear User,</p>
        <p>Please click on the following link to verify your email address:</p>
        <p><a href="${verifyUrl}">${verifyUrl}</a></p>
        <p>Sincerely,</p>
        <p>Your Company</p>
      </body>
    </html>`,
  };

  await send(message);
}

export async function generatePasswordResetToken(email) {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return false;
    }

    const token = uuidv4(); // Generate unique token
    const expiresAt = new Date(Date.now() + 3600000); // 1 hour from now

    user.password_reset_token = token;
    user.password_reset_expiry = expiresAt;
    await user.save();

    return token;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Error generating password reset token');
  }
}

export async function sendPasswordResetEmail(email, resetToken) {
  try {
    let baseUrl = config.url.base_url;
    const resetUrl = `${baseUrl}/reset-password?token=${resetToken}`;

    const message = {
      from: 'Your Company <noreply@yourcompany.com>',
      to: email,
      subject: 'Password Reset Request',
      text: `Dear User,

We have received a request to reset your password. To reset your password, please click on the following link:

${resetUrl}

If you did not request this password reset, please ignore this message.

Sincerely,
Your Company`,
      html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Password Reset Request</title>
  </head>
  <body>
    <p>Dear User,</p>
    <p>We have received a request to reset your password. To reset your password, please click on the following link:</p>
    <p><a href="${resetUrl}">${resetUrl}</a></p>
    <p>If you did not request this password reset, please ignore this message.</p>
    <p>Sincerely,</p>
    <p>Your Company</p>
  </body>
</html>`,
    };

    await send(message);
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Error sending password reset email');
  }
}

export async function validatePasswordResetToken(resetToken) {
  try {
    const user = await User.findOne({
      password_reset_token: resetToken,
      password_reset_expiry: {
        $gt: new Date(),
      },
    });
    return !!user;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Error validating password reset token');
  }
}

export async function resetPasswordServices(resetToken, newPassword) {
  try {
    const user = await User.findOne({
      password_reset_token: resetToken,
      password_reset_expiry: {
        $gt: new Date(),
      },
    });

    if (!user) {
      throw new Error('Invalid password reset token');
    }

    user.password = newPassword;
    user.password_reset_token = null;
    user.password_reset_expiry = null;
    await user.save();
    return user;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Error resetting password');
  }
}

export async function checkPassword(storedPassword, oldPassword) {
  const isMatch = await bcrypt.compare(oldPassword, storedPassword);
  return isMatch;
}

export async function updatePassword(userId, newPassword) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update the user's password in the database
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { password: hashedPassword },
      { new: true },
    );

    return updatedUser;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Error updating password');
  }
}

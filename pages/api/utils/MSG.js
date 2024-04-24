/**
 * File Name: MSG.js
 */
const MSG = {
  // Success messages
  INSERT_SUCCESS: 'Successfully inserted.',
  CREATE_SUCCESS: 'Successfully created.',
  UPDATE_SUCCESS: 'Successfully updated.',
  DELETE_SUCCESS: 'Successfully deleted.',
  FOUND_SUCCESS: 'Successfully found.',
  LOGIN_SUCCESS: 'Successfully logged in.',
  SIGNUP_SUCCESS: 'Successfully signed up.',
  SIGNIN_SUCCESS: 'Successfully signed in.',
  LOGOUT_SUCCESS: 'Successfully logout',
  PASSWORD_CHANGED_SUCCESSFULLY: 'Successfully password changed.',
  PASSWORD_RESET_SUCCESS: 'Successfully reset password.',
  UPLOAD_SUCCESS: 'Successfully uploaded.',
  CHECKOUT_SUCCESS: 'Successfully checked out.',
  ACTIVATED_SUCCESS: 'Successfully activated.',
  DEACTIVATED_SUCCESS: 'Successfully deactivated.',
  SENT_SUCCESS: 'Successfully sent.',
  APPROVED_SUCCESS: 'Successfully approved.',
  REJECTED_SUCCESS: 'Successfully rejected.',
  BLOCKED_SUCCESS: 'Successfully blocked.',
  UNBLOCKED_SUCCESS: 'Successfully unblocked.',
  ENABLED_SUCCESS: 'Successfully enabled.',
  DISABLED_SUCCESS: 'Successfully disabled.',
  ADDED_SUCCESS: 'Successfully added.',
  REMOVED_SUCCESS: 'Successfully removed.',
  SAVED_SUCCESS: 'Successfully saved.',
  SYNCED_SUCCESS: 'Successfully synced.',
  UPDATED_SETTINGS_SUCCESS: 'Successfully updated settings.',
  SENT_EMAIL_SUCCESS: 'Successfully sent email.',
  CONFIRMED_EMAIL_SUCCESS: 'Successfully confirmed email.',
  UPDATED_AVATAR_SUCCESS: 'Successfully updated avatar.',
  REMOVED_AVATAR_SUCCESS: 'Successfully removed avatar.',
  PASSWORD_CHANGED_SUCCESS: 'Successfully changed password.',
  SECURITY_QUESTION_ANSWERED_SUCCESS:
    'Successfully answered security question.',
  PASSWORD_RESET_LINK_SENT_SUCCESS: 'Successfully sent password reset link.',
  EMAIL_VERIFICATION_LINK_SENT_SUCCESS:
    'Successfully sent email verification link.',
  VERIFIED_SUCCESS: 'Successfully verified.',
  ACCOUNT_CREATED_SUCCESS: 'Successfully created account.',
  SIGNED_OUT_SUCCESS: 'Successfully signed out.',
  UPDATED_SUCCESS: 'Successfully updated.',
  CLEARED_SUCCESS: 'Successfully cleared.',
  OPT_IN_SUCCESS: 'Successfully opted in.',
  OPT_OUT_SUCCESS: 'Successfully opted out.',
  // Additional success messages
  ADDED_TO_CART_SUCCESS: 'Successfully added to cart.',
  REMOVED_FROM_CART_SUCCESS: 'Successfully removed from cart.',
  ITEM_PURCHASED_SUCCESS: 'Successfully purchased item.',
  SUBSCRIPTION_CREATED_SUCCESS: 'Successfully created subscription.',
  SUBSCRIPTION_CANCELLED_SUCCESS: 'Successfully cancelled subscription.',
  PAYMENT_SUCCESS: 'Payment was successful.',
  FILE_UPLOADED_SUCCESS: 'File was successfully uploaded.',
  FILE_DELETED_SUCCESS: 'File was successfully deleted.',
  IMAGE_UPLOADED_SUCCESS: 'Image was successfully uploaded.',
  IMAGE_DELETED_SUCCESS: 'Image was successfully deleted.',
  VIDEO_UPLOADED_SUCCESS: 'Video was successfully uploaded.',
  VIDEO_DELETED_SUCCESS: 'Video was successfully deleted.',
  ACCOUNT_VERIFICATION_SUCCESS: 'Account verification was successful.',
  ACCOUNT_DELETION_SUCCESS: 'Account deletion was successful.',
  PASSWORD_UPDATED_SUCCESS: 'Password was successfully updated.',
  SETTING_UPDATED_SUCCESS: 'Setting was successfully updated.',
  PROFILE_UPDATED_SUCCESS: 'Profile was successfully updated.',
  PROFILE_DELETED_SUCCESS: 'Profile was successfully deleted.',
  FAVORITE_ADDED_SUCCESS: 'Successfully added to favorites.',
  FAVORITE_REMOVED_SUCCESS: 'Successfully removed from favorites.',
  ORDER_PLACED_SUCCESS: 'Order was successfully placed.',
  ORDER_CANCELLED_SUCCESS: 'Order was successfully cancelled.',
  INVOICE_SENT_SUCCESS: 'Invoice was successfully sent.',
  MESSAGE_SENT_SUCCESS: 'Message was successfully sent.',
  MESSAGE_DELETED_SUCCESS: 'Message was successfully deleted.',
  REVIEW_POSTED_SUCCESS: 'Review was successfully posted.',
  REVIEW_UPDATED_SUCCESS: 'Review was successfully updated.',
  REVIEW_DELETED_SUCCESS: 'Review was successfully deleted.',
  ITEM_ADDED_SUCCESS: 'Item was successfully added.',
  ITEM_REMOVED_SUCCESS: 'Item was successfully removed.',
  CART_CLEARED_SUCCESS: 'Cart was successfully cleared.',
  PURCHASE_COMPLETED_SUCCESS: 'Purchase was successfully completed.',
  SUBSCRIPTION_CANCELLED_SUCCESS: 'Subscription was successfully cancelled.',
  PAYMENT_CANCELLED_SUCCESS: 'Payment was successfully cancelled.',
  FILE_DOWNLOADED_SUCCESS: 'File was successfully downloaded.',
  IMAGE_DOWNLOADED_SUCCESS: 'Image was successfully downloaded.',
  VIDEO_DOWNLOADED_SUCCESS: 'Video was successfully downloaded.',
  PROFILE_CREATED_SUCCESS: 'Profile was successfully created.',
  PROFILE_RETRIEVED_SUCCESS: 'Profile was successfully retrieved.',
  FAVORITES_RETRIEVED_SUCCESS: 'Favorites were successfully retrieved.',
  ORDER_RETRIEVED_SUCCESS: 'Order was successfully retrieved.',
  INVOICE_GENERATED_SUCCESS: 'Invoice was successfully generated.',
  MESSAGE_UPDATED_SUCCESS: 'Message was successfully updated.',
  REVIEW_RETRIEVED_SUCCESS: 'Review was successfully retrieved.',
  FORM_SUBMITTED_SUCCESS: 'Form was successfully submitted.',
  DATA_IMPORTED_SUCCESS: 'Data was successfully imported.',
  DATA_EXPORTED_SUCCESS: 'Data was successfully exported.',
  ACCOUNT_ACTIVATION_EMAIL_SENT_SUCCESS:
    'Activation email was successfully sent.',
  PASSWORD_RESET_EMAIL_SENT_SUCCESS:
    'Password reset email was successfully sent.',
  EMAIL_SENT_SUCCESS: 'Email was successfully sent.',
  MESSAGE_RECEIVED_SUCCESS: 'Message was successfully received.',
  SEARCH_COMPLETED_SUCCESS: 'Search was completed successfully.',
  REQUEST_COMPLETED_SUCCESS: 'Request was completed successfully.',
  OPERATION_COMPLETED_SUCCESS: 'Operation was completed successfully.',
  REGISTRATION_COMPLETED_SUCCESS: 'Registration was completed successfully.',
  VERIFICATION_EMAIL_SENT_SUCCESS: 'Verification email was successfully sent.',
  PASSWORD_CHANGED_EMAIL_SENT_SUCCESS:
    'Password changed email was successfully sent.',
  REQUEST_SUBMITTED_SUCCESS: 'Request was submitted successfully.',
  FORM_SAVED_SUCCESS: 'Form was successfully saved.',
  COMMENT_POSTED_SUCCESS: 'Comment was successfully posted.',
  COMMENT_DELETED_SUCCESS: 'Comment was successfully deleted.',
  COMMENT_UPDATED_SUCCESS: 'Comment was successfully updated.',
  POST_CREATED_SUCCESS: 'Post was successfully created.',
  POST_UPDATED_SUCCESS: 'Post was successfully updated.',
  POST_DELETED_SUCCESS: 'Post was successfully deleted.',
  ARTICLE_CREATED_SUCCESS: 'Article was successfully created.',
  ARTICLE_UPDATED_SUCCESS: 'Article was successfully updated.',
  ARTICLE_DELETED_SUCCESS: 'Article was successfully deleted.',
  REVIEW_SUBMITTED_SUCCESS: 'Review was successfully submitted.',
  REVIEW_APPROVED_SUCCESS: 'Review was successfully approved.',
  REVIEW_REJECTED_SUCCESS: 'Review was successfully rejected.',
  IMAGE_MODIFIED_SUCCESS: 'Image was successfully modified.',
  VIDEO_MODIFIED_SUCCESS: 'Video was successfully modified.',
  DATA_DELETED_SUCCESS: 'Data was successfully deleted.',
  DATA_UPDATED_SUCCESS: 'Data was successfully updated.',
  ACCOUNT_DETAILS_UPDATED_SUCCESS: 'Account details were successfully updated.',
  ACCESS_GRANTED_SUCCESS: 'Access was successfully granted.',
  ACCESS_REVOKED_SUCCESS: 'Access was successfully revoked.',
  DOCUMENT_SAVED_SUCCESS: 'Document was successfully saved.',
  DOCUMENT_DELETED_SUCCESS: 'Document was successfully deleted.',
  TRANSACTION_COMPLETED_SUCCESS: 'Transaction was completed successfully.',
  CONFIRMATION_EMAIL_SENT_SUCCESS: 'Confirmation email was successfully sent.',
  PAYMENT_PROCESSED_SUCCESS: 'Payment was processed successfully.',
  TRANSACTION_CANCELLED_SUCCESS: 'Transaction was cancelled successfully.',
  BUG_REPORT_SUBMITTED_SUCCESS: 'Bug report was successfully submitted.',
  BUG_REPORT_RESOLVED_SUCCESS: 'Bug report was successfully resolved.',
  FEATURE_REQUEST_SUBMITTED_SUCCESS:
    'Feature request was successfully submitted.',
  FEATURE_REQUEST_APPROVED_SUCCESS:
    'Feature request was successfully approved.',
  FEATURE_REQUEST_REJECTED_SUCCESS:
    'Feature request was successfully rejected.',
  SETTINGS_UPDATED_SUCCESS: 'Settings updated successfully.',
  TWO_FACTOR_ENABLED:
    'Two-factor authentication has been enabled successfully. Scan the QR code with your authenticator app.',

  // Error messages
  INVALID_CREDENTIALS: 'Invalid credentials.',
  EMAIL_ALREADY: 'Email is already in use.',
  EMAIL_INVALID: 'Invalid email ID.',
  EMAIL_NOT_EXIST: 'Email ID does not exist.',
  CREDENTIALS_WRONG: 'Incorrect username or password.',
  TOKEN_EMPTY: 'No token provided. Authorization denied.',
  TOKEN_INVALID: 'Invalid token. Authorization denied.',
  INVALID_ID: 'Invalid ID. Please provide a valid ID.',
  NOT_FOUND: 'Not found.',
  EMPTY: 'Cannot be empty.',
  INVALID: 'Invalid input.',
  SUCCESS: 'Success.',
  SUCCESSFULLY: 'Successfully.',
  FAILED: 'Failed.',
  ACTIVATION_ERROR: 'Activation failed.',
  DEACTIVATION_ERROR: 'Deactivation failed.',
  SEND_ERROR: 'Sending failed.',
  APPROVE_ERROR: 'Approval failed.',
  REJECT_ERROR: 'Rejection failed.',
  BLOCK_ERROR: 'Blocking failed.',
  UNBLOCK_ERROR: 'Unblocking failed.',
  ENABLE_ERROR: 'Enabling failed.',
  DISABLE_ERROR: 'Disabling failed.',
  ADD_ERROR: 'Adding failed.',
  REMOVE_ERROR: 'Removing failed.',
  SAVE_ERROR: 'Saving failed.',
  SYNC_ERROR: 'Syncing failed.',
  UPDATE_SETTINGS_ERROR: 'Updating settings failed.',
  EMAIL_SENDING_ERROR: 'Email sending failed.',
  EMAIL_CONFIRMATION_ERROR: 'Email confirmation failed.',
  AVATAR_UPDATE_ERROR: 'Avatar update failed.',
  AVATAR_REMOVAL_ERROR: 'Avatar removal failed.',
  PASSWORD_CHANGE_ERROR: 'Password change failed.',
  SECURITY_QUESTION_ANSWER_ERROR: 'Security question answer failed.',
  PASSWORD_RESET_LINK_SEND_ERROR: 'Sending password reset link failed.',
  EMAIL_VERIFICATION_LINK_SEND_ERROR: 'Sending email verification link failed.',
  VERIFICATION_ERROR: 'Verification failed.',
  ACCOUNT_CREATION_ERROR: 'Account creation failed.',
  SIGN_OUT_ERROR: 'Sign out failed.',
  UPDATE_ERROR: 'Updating failed.',
  CLEAR_ERROR: 'Clearing failed.',
  OPT_IN_ERROR: 'Opt-in failed.',
  OPT_OUT_ERROR: 'Opt-out failed.',
  PASSWORD_INVALID: 'Password is invalid.',
  PASSWORD_DIFFERNT: 'Passwords do not match.',
  PASSWORD_SAME: 'New password must be different from the old one.',
  BALANCE_ENOUGH: "You don't have enough balance in your wallet.",
  WITHDRAW_SUCCESS: 'Money withdrawn successfully.',
  PERMISSION_DENIED: 'Permission denied.',
  FILE_UPLOAD_ERROR: 'File upload failed.',
  FILE_DOWNLOAD_ERROR: 'File download failed.',
  FILE_DELETE_ERROR: 'File deletion failed.',
  FILE_RENAME_ERROR: 'File renaming failed.',
  FILE_COPY_ERROR: 'File copying failed.',
  FILE_MOVE_ERROR: 'File moving failed.',
  FILE_OPEN_ERROR: 'File opening failed.',
  FILE_CLOSE_ERROR: 'File closing failed.',
  DIRECTORY_CREATE_ERROR: 'Directory creation failed.',
  DIRECTORY_DELETE_ERROR: 'Directory deletion failed.',
  DIRECTORY_RENAME_ERROR: 'Directory renaming failed.',
  DIRECTORY_COPY_ERROR: 'Directory copying failed.',
  DIRECTORY_MOVE_ERROR: 'Directory moving failed.',
  DIRECTORY_OPEN_ERROR: 'Directory opening failed.',
  DIRECTORY_CLOSE_ERROR: 'Directory closing failed.',
  CONNECTION_ERROR: 'Connection failed.',
  SERVER_ERROR: 'Internal Server Error',
  CLIENT_ERROR: 'Client error.',
  AUTHENTICATION_ERROR: 'Authentication failed.',
  AUTHORIZATION_ERROR: 'Authorization failed.',
  FORBIDDEN: 'Forbidden.',
  NOT_ACCEPTABLE: 'Not acceptable.',
  CONFLICT: 'Conflict.',
  UNAUTHORIZED: 'Unauthorized.',
  UNSUPPORTED_MEDIA_TYPE: 'Unsupported media type.',
  SERVICE_UNAVAILABLE: 'Service unavailable.',
  GATEWAY_TIMEOUT: 'Gateway timeout.',
  BAD_GATEWAY: 'Bad gateway.',
  TOO_MANY_REQUESTS: 'Too many requests.',
  INTERNAL_SERVER_ERROR: 'Internal server error.',
  METHOD_NOT_ALLOWED: 'Method not allowed.',
  LENGTH_REQUIRED: 'Length required.',
  PAYMENT_REQUIRED: 'Payment required.',
  PRECONDITION_FAILED: 'Precondition failed.',
  REQUEST_ENTITY_TOO_LARGE: 'Request entity too large.',
  REQUEST_URI_TOO_LONG: 'Request URI too long.',
  UNSUPPORTED_LANGUAGE: 'Unsupported language.',
  UNSUPPORTED_CURRENCY: 'Unsupported currency.',
  INVALID_ADDRESS: 'Invalid address.',
  INVALID_PHONE_NUMBER: 'Invalid phone number.',
  INVALID_ZIP_CODE: 'Invalid zip code.',
  INVALID_COUNTRY: 'Invalid country.',
  INVALID_STATE: 'Invalid state.',
  INVALID_CITY: 'Invalid city.',
  INVALID_STREET: 'Invalid street.',
  INVALID_DATE_FORMAT: 'Invalid date format.',
  INVALID_TIME_FORMAT: 'Invalid time format.',
  INVALID_DATETIME_FORMAT: 'Invalid date-time format.',
  INVALID_DATE_RANGE: 'Invalid date range.',
  INVALID_TIME_RANGE: 'Invalid time range.',
  INVALID_DATETIME_RANGE: 'Invalid date-time range.',
  INVALID_CARD_NUMBER: 'Invalid card number.',
  INVALID_CVV: 'Invalid CVV.',
  INVALID_EXPIRATION_DATE: 'Invalid expiration date.',
  INVALID_AMOUNT: 'Invalid amount.',
  INVALID_TRANSACTION: 'Invalid transaction.',
  TRANSACTION_ERROR: 'Transaction error.',
  INSUFFICIENT_FUNDS: 'Insufficient funds.',
  CARD_DECLINED: 'Card declined.',
  CURRENCY_MISMATCH: 'Currency mismatch.',
  EXPIRED_CARD: 'Expired card.',
  DUPLICATE_TRANSACTION: 'Duplicate transaction.',
  UNABLE_TO_PROCESS: 'Unable to process.',
  UNKNOWN_ERROR: 'Unknown error.',
  ACCESS_TOKEN_EXPIRED: 'Access token expired.',
  REFRESH_TOKEN_EXPIRED: 'Refresh token expired.',
  ACCESS_TOKEN_INVALID: 'Access token invalid.',
  REFRESH_TOKEN_INVALID: 'Refresh token invalid.',
  ACCESS_TOKEN_MISSING: 'Access token missing.',
  REFRESH_TOKEN_MISSING: 'Refresh token missing.',
  INVALID_OPERATION: 'Invalid operation.',
  INVALID_LOGIN: 'Invalid login.',
  ACCOUNT_LOCKED: 'Account locked.',
  SESSION_EXPIRED: 'Session expired.',
  SESSION_INVALID: 'Session invalid.',
  CONVERSION_ERROR: 'Conversion error.',
  API_KEY_INVALID: 'Invalid API key.',
  API_KEY_MISSING: 'API key missing.',
  API_KEY_EXPIRED: 'API key expired.',
  AUTHORIZATION_HEADER_MISSING: 'Authorization header missing.',
  AUTHORIZATION_HEADER_INVALID: 'Authorization header invalid.',
  INVALID_GRANT_TYPE: 'Invalid grant type.',
  INVALID_CLIENT: 'Invalid client.',
  INVALID_SCOPE: 'Invalid scope.',
  INVALID_REDIRECT_URI: 'Invalid redirect URI.',
  INVALID_RESPONSE_TYPE: 'Invalid response type.',
  INVALID_CODE: 'Invalid code.',
  INVALID_REFRESH_TOKEN: 'Invalid refresh token.',
  INVALID_TOKEN_REQUEST: 'Invalid token request.',
  INVALID_RESOURCE_REQUEST: 'Invalid resource request.',
  INVALID_GRANT: 'Invalid grant.',
  INVALID_SESSION: 'Invalid session.',
  INVALID_CLIENT_SECRET: 'Invalid client secret.',
  INVALID_USERNAME: 'Invalid username.',
  INVALID_PASSWORD: 'Invalid password.',
  INVALID_TOKEN_ENDPOINT: 'Invalid token endpoint.',
  INVALID_RESOURCE_ENDPOINT: 'Invalid resource endpoint.',
  INVALID_CLIENT_CREDENTIALS: 'Invalid client credentials.',
  INVALID_USER_CREDENTIALS: 'Invalid user credentials.',
  INVALID_ACCESS_TOKEN: 'Invalid access token.',
  INVALID_REFRESH_TOKEN_REQUEST: 'Invalid refresh token request.',
  INVALID_RESOURCE_OWNER: 'Invalid resource owner.',
  INVALID_AUTHORIZATION_CODE: 'Invalid authorization code.',
  INVALID_ACCESS_TOKEN_REQUEST: 'Invalid access token request.',
  INVALID_REDIRECT_URI_ENDPOINT: 'Invalid redirect URI endpoint.',
  INVALID_SCOPE_REQUEST: 'Invalid scope request.',
  INVALID_GRANT_TYPE_REQUEST: 'Invalid grant type request.',
  INVALID_ACCESS_TOKEN_TYPE: 'Invalid access token type.',
  INVALID_TOKEN_TYPE: 'Invalid token type.',
  INVALID_TOKEN_REVOCATION: 'Invalid token revocation.',
  INVALID_TOKEN_VALIDATION: 'Invalid token validation.',
  INVALID_RESOURCE_OWNER_PASSWORD_CREDENTIALS:
    'Invalid resource owner password credentials.',
  INVALID_RESOURCE_OWNER_USERNAME_CREDENTIALS:
    'Invalid resource owner username credentials.',
  INVALID_RESOURCE_OWNER_GRANT: 'Invalid resource owner grant.',
  INVALID_CLIENT_AUTHENTICATION: 'Invalid client authentication.',
  INVALID_RESOURCE_SERVER: 'Invalid resource server.',
  INVALID_TOKEN_USAGE: 'Invalid token usage.',
  INVALID_CLIENT_REGISTRATION: 'Invalid client registration.',
  INVALID_USER_REGISTRATION: 'Invalid user registration.',
  INVALID_DEVICE_REGISTRATION: 'Invalid device registration.',
  INVALID_APPLICATION_REGISTRATION: 'Invalid application registration.',
  INVALID_SERVICE_REGISTRATION: 'Invalid service registration.',
  INVALID_API_REGISTRATION: 'Invalid API registration.',
  INVALID_DATABASE: 'Invalid database.',
  INVALID_QUERY: 'Invalid query.',
  INVALID_DATA: 'Invalid data.',
  INVALID_FORMAT: 'Invalid format.',
  INVALID_ENCODING: 'Invalid encoding.',
  INVALID_CONTENT_TYPE: 'Invalid content type.',
  INVALID_MEDIA_TYPE: 'Invalid media type.',
  INVALID_CHARACTER: 'Invalid character.',
  INVALID_LENGTH: 'Invalid length.',
  INVALID_SIZE: 'Invalid size.',
  INVALID_INDEX: 'Invalid index.',
  INVALID_KEY: 'Invalid key.',
  INVALID_VALUE: 'Invalid value.',
  INVALID_IDENTIFIER: 'Invalid identifier.',
  INVALID_PARAMETER: 'Invalid parameter.',
  INVALID_OPTION: 'Invalid option.',
  INVALID_SETTING: 'Invalid setting.',
  INVALID_CONFIGURATION: 'Invalid configuration.',
  INVALID_ENVIRONMENT: 'Invalid environment.',
  INVALID_INPUT: 'Invalid input.',
  INVALID_OUTPUT: 'Invalid output.',
  INVALID_REQUEST: 'Invalid request.',
  INVALID_RESPONSE: 'Invalid response.',
  EMAIL_NOT_VERIFIED: 'Please verify your email to log in',
  PASSWORD_INVALID: 'Password is invalid.',
  PASSWORD_DIFFERNT: 'Passwords do not match.',
  PASSWORD_SAME: 'New password must be different from the old one.',
  BALANCE_ENOUGH: "You don't have enough balance in your wallet.",
  WITHDRAW_SUCCESS: 'Money withdrawn successfully.',
  PERMISSION_DENIED: 'Permission denied.',
  NOT_PERMISSION_TO_ACCESS:
    'You do not have permission to access this resource.',

  LIKE_SUCCESS: 'Liked successfully.',
  COMMENT_SUCCESS: 'Commented successfully.',
  FOLLOW_SUCCESS: 'Followed successfully.',

  UNLIKE_SUCCESS: 'Unliked successfully.',
  LIKE_ALREADY: 'You have already liked this.',
  UNLIKE_ALREADY: 'You have already unliked this.',
  ALREADY: 'Already ',

  // Input validation messages
  REQUIRED_FIELD: ' is required.',
  INVALID_FIELD: ' is invalid.',
  TOO_SHORT_FIELD: ' must be at least 3 characters long.',
  TOO_LONG_FIELD: ' must not exceed 100 characters.',

  // Payment related messages
  PAYMENT_AUTH_ERROR:
    'There was an error authorizing your payment. Please check your card details and try again.',
  PAYMENT_DECLINED:
    'Your payment was declined. Please check your card details and try again.',
  PAYMENT_PROCESSING_ERROR:
    'There was an error processing your payment. Please try again later.',
  PAYMENT_ERROR:
    'There was an error processing your payment. Please contact support for assistance.',

  // User related messages
  USER_NOT_FOUND: 'User not found.',
  USER_ALREADY_EXISTS: 'A user with this information already exists.',
  USER_DELETED_SUCCESSFULLY: 'User deleted successfully.',
  USER_UPDATED_SUCCESSFULLY: 'User updated successfully.',
  USER_UNAUTHORIZED: 'Unauthorized user.',
  USER_AUTHORIZED: 'Authorized user.',

  // Product related messages
  PRODUCT_NOT_FOUND: 'Product not found.',
  PRODUCT_ALREADY_EXISTS: 'A product with this information already exists.',
  PRODUCT_CREATED_SUCCESSFULLY: 'Product created successfully.',
  PRODUCT_DELETED_SUCCESSFULLY: 'Product deleted successfully.',
  PRODUCT_UPDATED_SUCCESSFULLY: 'Product updated successfully.',
  PRODUCT_UNAUTHORIZED: 'Unauthorized product.',
  PRODUCT_AUTHORIZED: 'Authorized product.',
  ADDED_TO_FAVORITES: 'Product successfully added to favorites.',
  REMOVED_FROM_FAVORITES: 'Product successfully removed from favorites.',

  // Order related messages
  ORDER_NOT_FOUND: 'Order not found.',
  ORDER_ALREADY_EXISTS: 'An order with this information already exists.',
  ORDER_DELETED_SUCCESSFULLY: 'Order deleted successfully.',
  ORDER_UPDATED_SUCCESSFULLY: 'Order updated successfully.',
  ORDER_UNAUTHORIZED: 'Unauthorized order.',
  ORDER_AUTHORIZED: 'Authorized order.',

  // Category related messages
  CATEGORY_NOT_FOUND: 'Category not found.',
  CATEGORY_ALREADY_EXISTS: 'A category with this information already exists.',
  CATEGORY_DELETED_SUCCESSFULLY: 'Category deleted successfully.',
  CATEGORY_UPDATED_SUCCESSFULLY: 'Category updated successfully.',
  CATEGORY_UNAUTHORIZED: 'Unauthorized category.',
  CATEGORY_AUTHORIZED: 'Authorized category.',

  // Brand related messages
  BRAND_NOT_FOUND: 'Brand not found.',
  BRAND_DELETED_SUCCESSFULLY: 'Brand deleted successfully.',
  BRAND_UPDATED_SUCCESSFULLY: 'Brand updated successfully.',
  BRAND_CREATED_SUCCESSFULLY: 'Brand created successfully.',

  // Cart related messages
  CART_NOT_FOUND: 'Cart not found.',
  CART_ALREADY_EXISTS: 'A cart with this information already exists.',
  CART_DELETED_SUCCESSFULLY: 'Cart deleted successfully.',
  CART_UPDATED_SUCCESSFULLY: 'Cart updated successfully.',
  CART_UNAUTHORIZED: 'Unauthorized cart.',
  CART_AUTHORIZED: 'Authorized cart.',

  // Wishlist related messages
  WISHLIST_NOT_FOUND: 'Wishlist not found.',
  WISHLIST_ALREADY_EXISTS: 'A wishlist with this information already exists.',
  WISHLIST_DELETED_SUCCESSFULLY: 'Wishlist deleted successfully.',
  WISHLIST_UPDATED_SUCCESSFULLY: 'Wishlist updated successfully.',
  WISHLIST_UNAUTHORIZED: 'Unauthorized wishlist.',
  WISHLIST_AUTHORIZED: 'Authorized wishlist.',

  // Coupon related messages
  COUPON_NOT_FOUND: 'Coupon not found.',
  COUPON_ALREADY_EXISTS: 'A coupon with this information already exists.',
  COUPON_DELETED_SUCCESSFULLY: 'Coupon deleted successfully.',
  COUPON_UPDATED_SUCCESSFULLY: 'Coupon updated successfully.',
  COUPON_UNAUTHORIZED: 'Unauthorized coupon.',
  COUPON_AUTHORIZED: 'Authorized coupon.',

  // Shipping related messages
  SHIPPING_NOT_FOUND: 'Shipping information not found.',
  SHIPPING_ALREADY_EXISTS:
    'Shipping information with this information already exists.',
  SHIPPING_DELETED_SUCCESSFULLY: 'Shipping information deleted successfully.',
  SHIPPING_UPDATED_SUCCESSFULLY: 'Shipping updated successfully.',
  SHIPPING_UNAUTHORIZED: 'Shipping unauthorized.',
  SHIPPING_AUTHORIZED: 'Shipping authorized.',

  // Refund related messages
  REFUND_NOT_FOUND: 'Refund not found.',
  REFUND_ALREADY_EXISTS: 'Refund already exists.',
  REFUND_DELETED_SUCCESSFULLY: 'Refund deleted successfully.',
  REFUND_UPDATED_SUCCESSFULLY: 'Refund updated successfully.',
  REFUND_UNAUTHORIZED: 'Refund unauthorized.',
  REFUND_AUTHORIZED: 'Refund authorized.',

  // guest related messages
  GUEST_LOGIN_SUCCESS: 'Guest login successfully.',
  GUESTS_FOUND_SUCCESS: 'Guest users retrieved successfully.',
  GUEST_FOUND_SUCCESS: 'Guest user retrieved successfully.',
  GUESTS_NOT_FOUND: 'Guest user not found.',
};

module.exports = MSG;

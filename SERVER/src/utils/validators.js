/**
 * Validation utilities
 * Common validation functions
 */

exports.isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

exports.isValidPassword = (password) => {
  // At least 6 characters
  return password && password.length >= 6;
};

exports.isValidUsername = (username) => {
  // Alphanumeric and underscores, 3-20 characters
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  return usernameRegex.test(username);
};


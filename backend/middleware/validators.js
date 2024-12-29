const { body, validationResult } = require('express-validator');

const validateUserRegistration = [
  body('username').trim().notEmpty().withMessage('Username is required'),
  body('email').trim().isEmail().withMessage('Invalid email address'),
  body('password')
    .trim()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateTaskCreation = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  // Add more validation rules for other fields as needed
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateUserRegistration, validateTaskCreation };
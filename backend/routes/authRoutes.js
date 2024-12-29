const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
} = require('../controllers/authController');
const { validateUserRegistration } = require('../middleware/validators');

router.post('/register', validateUserRegistration, registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

module.exports = router;
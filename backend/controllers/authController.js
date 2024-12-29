const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

// @desc Register new user
// @route POST /api/auth/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('Email address already registered');
  }

  // Hash password (already done in the User model)

  // Create user
  const user = await User.create({
    username,
    email,
    password,
  });

  if (user) {
    res.status(201).json({ message: 'User registered successfully' });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc Authenticate a user
// @route POST /api/auth/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await user.comparePassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Set JWT as an HTTP-only cookie
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Set to true in production for HTTPS
      sameSite: 'strict', // Recommended for security
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    res.json({ message: 'Logged in successfully' });
  } else {
    res.status(401);
    throw new Error('Invalid credentials');
  }
});

// @desc Logout user
// @route POST /api/auth/logout
// @access Public
const logoutUser = (req, res) => {
  res.clearCookie('jwt');
  res.json({ message: 'Logged out successfully' });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
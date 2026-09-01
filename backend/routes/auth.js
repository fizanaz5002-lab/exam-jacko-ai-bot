const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Mock authentication - Replace with real DB logic
const mockUsers = new Map();

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Register
router.post('/register', [
  body('email').isEmail().withMessage('Valid email required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('name').notEmpty().withMessage('Name is required')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password, name } = req.body;

  if (mockUsers.has(email)) {
    return res.status(400).json({ error: 'User already exists' });
  }

  // In production: hash password with bcrypt
  mockUsers.set(email, { name, password, email });

  res.status(201).json({
    message: 'User registered successfully',
    user: { name, email }
  });
});

// Login
router.post('/login', [
  body('email').isEmail().withMessage('Valid email required'),
  body('password').notEmpty().withMessage('Password required')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  if (!mockUsers.has(email)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const user = mockUsers.get(email);
  if (user.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // In production: generate JWT token
  const token = 'mock-jwt-token-' + Date.now();

  res.status(200).json({
    message: 'Login successful',
    token,
    user: { name: user.name, email }
  });
});

// Logout
router.post('/logout', (req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = router;

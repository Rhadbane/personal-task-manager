const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const { validateTaskCreation } = require('../middleware/validators');

router.route('/').get(protect, getTasks).post(protect, validateTaskCreation, createTask);
router.route('/:id').put(protect, updateTask).delete(protect, deleteTask);

module.exports = router;